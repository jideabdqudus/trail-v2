import React, {useState} from 'react'
import {Row, Col} from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

//Imports
import {assets} from "../assets/assets"
import {SignUpForm} from "../components"
import { ISignUp, IAuthenticate } from '../type.d'
import {register} from "../redux/actions/auth"
import {toastify, validatePassword, validateString} from "../helpers/index.js"

export const SignUp: React.FC= () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {loading, isAuthenticated} = useSelector((state: IAuthenticate) => state.auth);
  const [stepOne, setStepOne] = useState<boolean>(true)
  const [stepTwo, setStepTwo] = useState<boolean>(false)
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [isDisabled, setIsDisabled]= useState(true)
  const [checked, setchecked] = useState(false)
  const [formData, setFormData]= useState<ISignUp>({
    firstName:"",
    lastName:"",
    email:'',
    phone:0,
    password:"",
    password2:"",
    accountType:"",
    organization:"",
    organizationType:"",
    terms: false
  })
  const {firstName, lastName, email, phone, password, password2, terms, accountType} = formData
  const canBeSubmitted=()=>{
    return checked ? setIsDisabled(true) :setIsDisabled(false)
  }
  const onChangeForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onTickTerms = (e: any)=>{
    setFormData({ ...formData, terms: e.target.checked});
    setchecked(!checked)
    canBeSubmitted()
  }
  const onOrganizationChange=(value: string)=>{
    setFormData({ ...formData, organizationType: value});
  }
  const accountTypeChange = (e: any)=>{
    setFormData({...formData, accountType: e.target.value})
  }
  const onSubmitForm = ()=>{
    if ( terms === false || accountType === "" ) {
      toastify.alertError("All fields are compulsory", 5000);
    }else if(accountType==='personal' && (formData.organization !=="" || formData.organizationType !=="")) {
      setFormData({...formData, organization:"", organizationType:""})
    }else {
      dispatch(register(formData, history));
    }
  }
  const onChangeStep = ()=>{
    //validate
    let phonePattern=/^\d{11}$/;
    if (
      firstName === "" ||
      email === "" ||
      lastName === "" ||
      password === "" ||
      password2 === "" ||
      phone === 0 
      
    ) {
      toastify.alertError("All fields are compulsory", 5000);
    } else if (password !== formData.password2) {
      toastify.alertWarning("The passwords need to be the same", 5000);
    } else if (password.length < 8) {
      toastify.alertWarning("Password Length must be more than 8", 5000);
    }else if (!phone.toString().match(phonePattern)) {
      toastify.alertWarning("Invalid phone number", 5000);
    }else if(!email.includes('@')){
      toastify.alertWarning("Not a valid email address", 5000);
    }else if (validateString(firstName) || validateString(lastName)) {
      toastify.alertWarning("Names can't start with special characters, numbers or spaces",5000)
  } else if (validatePassword(password) === false) {
      toastify.alertWarning(
        "Passwords must contain at least 1 Capital letter, 1 small letter and a special character",
        5000
      );
    }else{
      setStepOne(false)
      setStepTwo(true)
      setStepNumber(2)
    }
  }
  const onPrevStep = ()=>{
    setStepOne(true)
    setStepTwo(false)
    setStepNumber(1)
  }
  if(isAuthenticated){
    return <Redirect to="/app/dashboard" />
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
          <SignUpForm 
            stepOne={stepOne} 
            stepTwo={stepTwo} 
            onChangeStep={onChangeStep} 
            onPrevStep={onPrevStep} 
            stepNumber={stepNumber} 
            formData={formData} 
            onChangeForm={onChangeForm} 
            onTickTerms={onTickTerms} 
            onSubmitForm={onSubmitForm} 
            onOrganizationChange={onOrganizationChange} 
            accountTypeChange={accountTypeChange}
            loading={loading} 
            isDisabled={isDisabled}
            />
        </Col>
      </Row>
    </div>
  )
}
