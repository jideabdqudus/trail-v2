import React, {useState} from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'

//Imports
import {assets} from "../assets/assets"
import {SignUpForm} from "../components"
import { ISignUp } from '../type.d'

export const SignUp: React.FC= () => {
  const [stepOne, setStepOne] = useState<boolean>(true)
  const [stepTwo, setStepTwo] = useState<boolean>(false)
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [formData, setFormData]= useState<ISignUp>({
    firstName:"",
    lastName:"",
    email:'',
    phone:0,
    password:"",
    password2:"",
    organization:"",
    organizationType:"",
    terms: false
  })
  const onChangeForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onTickTerms = (e: any)=>{
    setFormData({ ...formData, terms: e.target.checked});
  }
  const onOrganizationChange=(value: string)=>{
    setFormData({ ...formData, organizationType: value});
  }
  const onSubmitForm = ()=>{
    console.log(formData)
  }
  const onChangeStep = ()=>{
    setStepOne(false)
    setStepTwo(true)
    setStepNumber(2)
  }
  const onPrevStep = ()=>{
    setStepOne(true)
    setStepTwo(false)
    setStepNumber(1)
  }

  return (
    <div className="auth">
      <Row className="auth__row">
        <Col xs={{ span: 0 }} lg={{ span: 10 }} className="auth__bg">
        <Link to="/">
          <img src={assets.logo} alt="Logo" width="100" />
        </Link>
        </Col>
        <Col xs={{ span: 20 }} lg={{ span: 14 }}>
          <SignUpForm stepOne={stepOne} stepTwo={stepTwo} onChangeStep={onChangeStep} onPrevStep={onPrevStep} stepNumber={stepNumber} formData={formData} onChangeForm={onChangeForm} onTickTerms={onTickTerms} onSubmitForm={onSubmitForm} onOrganizationChange={onOrganizationChange} />
        </Col>
      </Row>
    </div>
  )
}
