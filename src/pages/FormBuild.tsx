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
import {builderTypeNumber, builderTypeRadio, builderTypeText, deleteAComponent,onChangeComponent} from '../actions/builderType';


export const FormBuild = () => {
    const {Footer}= Layout;
    const dispatch =useDispatch();
    const { user } = useSelector((state: IAuthenticate) => state.auth);
    const {programs, indicatorQuestions}= useSelector((state: IForms) => state.form)
    const {components}=useSelector((state: any)=>state.builderType)

    //defining all states found in component
    const [indicator, setIndicator]=useState<string[]>()
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
      instructions: '',
      buttonType: 'submit',
      buttonValue: 'Submit',
      customQuestionInput: {},
      components: []
  })
    
    

   useEffect(()=>{
        dispatch(getPrograms())
    },[dispatch])

    const handleBuildTypeChange=(builderType_value: string)=>{
      if(builderType_value==='number'){
        dispatch(builderTypeNumber(builderType_value))
      }else if(builderType_value==='radio'){
        dispatch(builderTypeRadio(builderType_value))
      }else{
        dispatch(builderTypeText(builderType_value))
      }
      
      
  }
 
  
  const menu=(
      <Menu>
          {builderTypes.map((builderType: IBuildType)=>{
             return  <Menu.Item
              key={builderType.value}
              onClick={()=>{handleBuildTypeChange(builderType.value)}}
              >
                  {builderType.name}
              </Menu.Item>
          })}
          
      </Menu>
  )


    const handleIndicator=(value: string)=>{
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
     
     setIndicator(ind)
  }

  
  const handleIndicatorQuestion=(value: string)=>{
   dispatch(getIndicatorQuestions(value))
  }
 
  const delete_a_component=(id: number)=>{
    dispatch(deleteAComponent(id))
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

//handle change for component array
const changeComponent=(value: any)=>{
  
  dispatch(onChangeComponent(value))
  console.log(value)
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
                    handleIndicator={handleIndicator}
                    indicator={indicator}
                    handleIndicatorQuestion={handleIndicatorQuestion}
                    indicatorQuestions={indicatorQuestions}
                    components={components}
                    delete_a_component={delete_a_component}
                    OnchangeOfInputs={OnchangeOfInputs}
                    inputs={inputs}
                    onChangeSelectDropdown={onChangeSelectDropdown}
                    changeComponent={changeComponent}
                    
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
