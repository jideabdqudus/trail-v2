import { useState, Fragment, useEffect,useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { isEmpty } from "lodash";

import { Header } from "../layouts/header";
import { SideBar } from '../layouts/sidebar';
import {EditForm } from '../components/EditForm'
import { IAuthenticate, IForms, IBuildType, IInputsFields,IComponentBuild} from '../type.d'
import { COMPONENT_TYPES } from "../constants/types";
import {getPrograms, getIndicatorQuestions, updateForm} from '../redux/actions/form';
import { toastify } from "../helpers";

export const FormEdit = () => {
  const {id}  = useParams<any>()
  const history = useHistory()
  const {Footer} = Layout;
  const dispatch =useDispatch();
  const { user } = useSelector((state: IAuthenticate) => state.auth);
  const {programs, indicatorQuestions, form}= useSelector((state: IForms) => state.form)
  //define state
  const [componentBuild, setComponentBuild] = useState<any>([]);
    const [inputs, setInputs]=useState<IInputsFields>({
      title: 'form',
      display: 'form',
      type: 'number',
      name: '',
      program: '',
      organisationId: 0,
      instructions: '',
      buttonType: 'submit',
      buttonValue: 'Submit',
      builderType: 'text',
      components: []
    })
    const addBuilderTypes = (value: string )=> {
      setComponentBuild([
        ...componentBuild,
        {
          key: '',
          label: '',
          prefix: '',
          tableView: true,
          value:value==='radio'?'number':value,
          question: '',
          targetValue: null,
          targetType: 'Percentage',
          inputType: value,
          input: true,
          placeholder: '',
          linkedIndicator: null,
          indicatorquestion: null,
          // value: 'number',
          questionId:''
        },
        ]);   
      }
    
  const [LinkedIndicator, setLinkedIndicator]=useState<string[]>()
  const [builderTypes, ]=useState <IBuildType[]>([
      {
          name: 'Text Input',
          value: COMPONENT_TYPES.text,
      },
      {
          name: 'Radio Input',
          value: COMPONENT_TYPES.radio,
      },
      {
          name: 'Number Input',
          value: COMPONENT_TYPES.number,
      },
  ])
  
   
  useEffect(()=>{
    dispatch(getPrograms())
    // eslint-disable-next-line 
  },[])

  const determineIndicatorQuestion = (question:any) => {
    if (isEmpty(question)) return 0
    if (typeof question === 'object') return question.indicatorquestionid
    return question
}
  useEffect(() => {
    if (id) {
        const availableComponents = form?.components?.map(
            ({
                inputType,
                Value,
                question,
                placeholder,
                questionId,
                targetValue,
                targetType,
                indicatorQuestion,
                linkedIndicator,
            }:any) => ({
                input: true,
                tableView: true,
                inputType,
                value: Value,
                label: question,
                key: question,
                placeholder,
                prefix: '',
                questionId,
                question,
                targetType,
                targetValue,
                indicatorquestion:
                    determineIndicatorQuestion(indicatorQuestion),
                linkedIndicator:
                    linkedIndicator?.SelectedProgramIndicatorId,
            })
        )

        setInputs({
          title: 'form',
          display: 'form',
          type: "form",
          name: form.name,
          program: String(form.programId),
          organisationId: 0,
          instructions: form.instructions,
          buttonType: form.buttontype,
          buttonValue: form.buttonvalue,
          builderType: 'text',
          components: availableComponents
      })
      setComponentBuild(availableComponents)
    }
}, [form, id])

  const getIndicatorQuestionOnUpdate=()=>{
    let s=0
    for(const comp of componentBuild){
      s =comp.linkedIndicator
    }
    dispatch(getIndicatorQuestions(s))
  
  }

  useEffect(() => {
      getIndicatorQuestionOnUpdate()
      // eslint-disable-next-line
  }, []) 
    
 // Get linkedindicator
 const handleLinkedIndicator=useCallback(
   (value:string) => {
    let ind: string[] = []
    // eslint-disable-next-line
    programs.filter((program: any)=>{
      if(value===String(program.id)){
        return program.sdgs.map((sdg: any)=>{
          sdg.indicators.map((indicator: any)=>{
          ind.push(indicator)
          return null
          })
          return null
        })
      }    
    })
    setLinkedIndicator(ind)
   },
   [programs],
 ) 

useEffect(() => {
  handleLinkedIndicator(String(form.programId))
  
}, [form.programId,handleLinkedIndicator])
//on change of input type
  const buildType = (builderType: IBuildType)=>{
    if(inputs.program === "" ){
      toastify.alertWarning('Kindly choose a program', 3000)
    } else {
      addBuilderTypes(builderType.value)
      // setInputs({...inputs, value: builderType.value})
    }
  } 
  const menu=(
      <Menu>
        {builderTypes.map((builderType: IBuildType, id)=>{
          return  (
            <Menu.Item key={id} onClick={()=>buildType(builderType)}>
              {builderType.name}
            </Menu.Item>
            )
        })}
      </Menu>
  )
  
  //get all indicator questions on select of program
  const handleIndicatorQuestion=(value: string)=>{
    dispatch(getIndicatorQuestions(value))
}
  
  // Update state on change of inputs
  const onChangeofInputs= (e: any)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  //Update state on change of select fields
  const onChangeSelectDropdown=(value: string)=>{
    setInputs({ ...inputs,program : value.toString()})
  }
  // Delete object in component array
  const removeComponents = (index: number) => {
    const component_build = componentBuild.filter((e: any, idx: number) => idx !== index);
    setComponentBuild( component_build );
  }
  // Handle input type change for component
  const handleChangeQuestion= (e: any, name: string, index: number) => {
    componentBuild[index][name] = e.target.value;
    setComponentBuild(componentBuild);
    setInputs({ ...inputs,  components: componentBuild})
  };
  // Handle select dropdown change for component
  const handleSelect = (value: any, name: string, index: number) => {
    if(index !==-1){
      const tempComp=[...componentBuild]
      tempComp[index][name] = value;
      setComponentBuild(tempComp);
      setInputs({ ...inputs, components: componentBuild})
    }
  };
  // console.log(inputs, 'form inputs')
  // console.log(form, 'each form')
  console.log(inputs, 'INPUTS FIELD')
  console.log(form, 'each form')
  const onFinish=()=>{
    console.log(inputs, "INPUTS FIELD")
    // console.log(form, 'each form')
  inputs.components.forEach(({linkedIndicator, targetType,targetValue, indicatorquestion, question}:IComponentBuild) => {
      if(linkedIndicator === "" || targetValue ===null || targetType===""){
        toastify.alertWarning('Kindly fill the appropriate field', 3000)
        return false
      }else if(indicatorquestion !==0 && question !==""){
        toastify.alertWarning('You cant have both indicatorQuestion and question containing values', 3000)
        return false
      }
    }); 
    dispatch(updateForm(id,inputs, history)) 
  }
    return (
        <div className="container-scroller">
        <Header user={ user }/>
        <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
          <SideBar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row page-title-header">
                <div className="col-12">
                  <Fragment>
                    <EditForm 
                      programs={programs}
                      menu={menu}
                      handleLinkedIndicator={handleLinkedIndicator}
                      LinkedIndicator={LinkedIndicator}
                      handleIndicatorQuestion={handleIndicatorQuestion}
                      indicatorQuestions={indicatorQuestions}
                      onChangeofInputs={onChangeofInputs}
                      inputs={inputs}
                      onChangeSelectDropdown={onChangeSelectDropdown}
                      componentBuild={componentBuild}
                      removeComponents={removeComponents}
                      handleChangeQuestion={handleChangeQuestion}
                      handleSelect={handleSelect}
                      onFinish={onFinish}
                    />
                  </Fragment>
                </div>
              </div>
            </div>
            <Footer style={{ textAlign: "center" }}>Trail ©2021 by GSV</Footer>
          </div>
        </div>
      </div>
    )
}
