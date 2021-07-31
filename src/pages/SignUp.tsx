import React, {useState} from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'

//Imports
import {assets} from "../assets/assets"
import {SignUpForm} from "../components"

export const SignUp: React.FC= () => {
  const [stepOne, setStepOne] = useState<boolean>(true)
  const [stepTwo, setStepTwo] = useState<boolean>(false)
  const [stepNumber, setStepNumber] = useState<number>(1)
  
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
          <SignUpForm stepOne={stepOne} stepTwo={stepTwo} onChangeStep={onChangeStep} onPrevStep={onPrevStep} stepNumber={stepNumber} />
        </Col>
      </Row>
    </div>
  )
}
