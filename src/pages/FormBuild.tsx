import { useState, Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu } from "antd";

// import 
import { Header } from "../layouts/header";
import { SideBar } from '../layouts/sidebar';
import {CreateForm} from '../components/CreateForm'
import { IAuthenticate, IForms, IBuildType, IInputsFields} from '../type.d'
import { COMPONENT_TYPES } from "../constants/environment";
import {getPrograms, getIndicatorQuestions} from '../actions/form';
import { toastify } from "../helpers";



export const FormBuild = () => {
    const {Footer}= Layout;
    const dispatch =useDispatch();
    const { user } = useSelector((state: IAuthenticate) => state.auth);
    const {programs, indicatorQuestions}= useSelector((state: IForms) => state.form)

    useEffect(()=>{
      dispatch(getPrograms())
      // eslint-disable-next-line 
  },[])

    //defining all states found in component
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

    const [inputs, setInputs]=useState<IInputsFields>({
      title: '',
      display: 'form',
      type: 'form',
      name: '',
      program: '',
      organisationId: 0,
      instructions: '',
      buttonType: 'submit',
      buttonValue: 'Submit',
      components: []
  })
    const [componentBuild, setComponentBuild] = useState<any>([]);

    const addBuilderTypes = (value: string )=> {
      setComponentBuild([
    ...componentBuild,
          {
            question: '',
            targetValue: null,
            targetType: 'Percentage',
            inputType: value,
            input: true,
            placeholder: '',
            linkedIndicator: null,
            indicatorquestion: '',
            value: 'number',
          },
    ]);
    console.log('hello')
    }

 
  console.log(componentBuild)
  const menu=(
      <Menu>
          {builderTypes.map((builderType: IBuildType)=>{
             return  <Menu.Item
              key={builderType.value}
              onClick={()=>{if(inputs.program ===""){
                toastify.alertWarning('Kindly choose a program', 3000)
              }else{
                addBuilderTypes(builderType.value)
              }
              }}
              >
                  {builderType.name}
              </Menu.Item>
          })}
          
      </Menu>
  )


  //get linkedindicator 
    const handleLinkedIndicator=(value: string)=>{
      let ind: string[]=[]
      // eslint-disable-next-line
     programs.filter((program: any)=>{
        if(value===program.id){
         return program.sdgs.map((sdg: any)=>{
           return sdg.indicators.map((indicator: any)=>{
              
           return ind.push(indicator)
            
            })
          })
        }
        
      })
     
      setLinkedIndicator(ind)
      console.log(LinkedIndicator)
  }

  
  const handleIndicatorQuestion=(value: string)=>{
   dispatch(getIndicatorQuestions(value))
  }
 

  // update state on change of inputs
  const OnchangeOfInputs= (e: any)=>{
    const value=e.target.value;

    setInputs({
        ...inputs,
        [e.target.name]: value
    })
    
}

//update state on change of select fields
  const onChangeSelectDropdown=(value: string)=>{
    setInputs({
      ...inputs,
      program : value,
    })
}

  //delete object in component array
  const removeComponents = (index: number) => {
  const component_build = componentBuild.filter((e: any, idx: number) => 
  idx !== index
  );
  setComponentBuild( component_build );
  
  }

  //handle input type change for component
  const handleChange= (event: any, name: string, index: number) => {
    componentBuild[index][name] = event.target.value;
    setComponentBuild(componentBuild);
    };
    
  //handle select dropdown change for component
  const handleSelect = (value: any, name: string, index: number) => {
    if(index !==-1){
      const tempComp=[...componentBuild]
      tempComp[index][name] = value;
      setComponentBuild(tempComp);
    }
    
    };
  console.log(inputs)
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
                    OnchangeOfInputs={OnchangeOfInputs}
                    inputs={inputs}
                    onChangeSelectDropdown={onChangeSelectDropdown}

                    componentBuild={componentBuild}
                    removeComponents={removeComponents}
                    handleChange={handleChange}
                    handleSelect={handleSelect}
                    
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
