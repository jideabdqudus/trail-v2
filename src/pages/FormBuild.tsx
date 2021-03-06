import { useState, Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";

import { Header } from "../layouts/header";
import { SideBar } from '../layouts/sidebar';
import {CreateForm } from '../components/CreateForm'
import { IAuthenticate, IForms, IBuildType, IInputsFields} from '../type.d'
import { COMPONENT_TYPES } from "../constants/types";
import {getPrograms, getIndicatorQuestions, createForm} from '../redux/actions/form';
import { toastify } from "../helpers";

export const FormBuild = () => {
  const history = useHistory()
  const {Footer} = Layout;
  const dispatch =useDispatch();
  const { user } = useSelector((state: IAuthenticate) => state.auth);
  const {programs, indicatorQuestions}= useSelector((state: IForms) => state.form)
  useEffect(()=>{
    dispatch(getPrograms())
    // eslint-disable-next-line 
  },[])
  //Defining all states found in component
  
  const [tags, setTags] = useState<any>([]);
  const [tag2, setTags2]=useState<any>([])

  
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
      {
        name: 'Multi-choice Question',
        value: COMPONENT_TYPES.mcq
    },
  ])
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
  const [componentBuild, setComponentBuild] = useState<any>([]);
  const addBuilderTypes = (value: string )=> {
    setTags2([
      ...tag2,
      {
        option:[]
      }
    ])
    setComponentBuild([
      ...componentBuild,
        {
          question: '',
          question_answers:[],
          targetValue: null,
          targetType: 'Percentage',
          inputType: value,
          input: true,
          placeholder: '',
          linkedIndicator: null,
          indicatorquestion: '',
          value: value==='radio'?'number':value==='mcradio'?'text':value,
        },
      ]); 
    }
  const buildType = (builderType: IBuildType)=>{
    if(inputs.program === "" ){
      toastify.alertWarning('Kindly choose a program', 3000)
    } else {
      addBuilderTypes(builderType.value)
      setInputs({...inputs, builderType: builderType.value})
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
  //start of mcq
  const handleOptionAddition = (tag:any, compIndex:any, name:string) => {
    setTags([...tags, tag]);
    if(tags.length <= 3 && tag2.length <= 3){
      tag2[compIndex].option.push(tag)
      componentBuild[compIndex].question_answers=tag2[compIndex].option
  
      setTags(tag2[compIndex].option)
    }else{
      toastify.alertWarning('Cannot have more than 5 options for a multi-choice question')
    }
  };
  const handleOptionDelete = (i:number,compIndex:any) => {
    const removeTag=tag2[compIndex].option.filter((tag:any,index:number) => index !== i);
    tag2[compIndex].option=removeTag
    componentBuild[compIndex].question_answers=tag2[compIndex].option
    setTags(tag2[compIndex].option)
  };
  const onOptionUpdate = (i:number, newTag:any) => {
    const updatedOptions = tags.slice();
    updatedOptions.splice(i, 1, newTag);
    setTags(updatedOptions);
    setComponentBuild([...componentBuild, {question_answers: tags}])
  };
  // end of mcq

  // Get linkedindicator 
  const handleLinkedIndicator=(value: string)=>{
    let ind: string[] = []
    // eslint-disable-next-line
    programs.filter((program: any)=>{
      if(value===program.id){
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
  }
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
  const onFinish=()=>{
    inputs.components.forEach(({linkedIndicator, targetType,targetValue, indicatorquestion, question,question_answers,inputType}:any)=>{
      if((question==="" && indicatorquestion ===0) || (linkedIndicator === "" || targetValue ===null || targetType==="" )){
        toastify.alertWarning('Kindly fill the appropriate field', 3000)
      }else if(inputType ==='mcradio' && question_answers.length < 2){
        toastify.alertWarning('Multi-choice questions requires atleast two options', 3000)
      }else{dispatch(createForm(inputs, history))  }
    })
    // dispatch(createForm(inputs, history))  
    
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
                    <CreateForm 
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
                      handleOptionAddition={handleOptionAddition}
                      handleOptionDelete={handleOptionDelete}
                      onOptionUpdate={onOptionUpdate}
                      tags={tags}
                      tag2={tag2}
                    />
                  </Fragment>
                </div>
              </div>
            </div>
            <Footer style={{ textAlign: "center" }}>Trail ??2021 by GSV</Footer>
          </div>
        </div>
      </div>
    )
}
