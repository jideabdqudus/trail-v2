import React,{useState} from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'


//Imports
import {assets} from "../assets/assets"
import {ResetPasswordForm} from "../components"
import { IResetPassword, IAuthenticate } from '../type.d'
import { resetPassword } from '../redux/actions/auth'
import {toastify, validatePassword,} from "../helpers/index.js"



export const ResetPassword: React.FC= () => {
  const { isAuthenticated, loading} = useSelector((state: IAuthenticate) => state.auth);
  const dispatch=useDispatch()
  const [formData, setFormData] = useState<IResetPassword>({
    password: "",
    password2: ""
  })
  const onChangeForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const {password, password2} = formData
  const onSubmitForm = ()=>{
    if (password === "") {
      toastify.alertError("All fields are compulsory", 5000);
    } else if (password !== password2) {
      toastify.alertWarning("The passwords need to be the same", 5000);
    } else if (password.length < 8) {
      toastify.alertWarning("Password Length must be more than 8", 5000);
    } else if (validatePassword(password) === false) {
      toastify.alertWarning(
        "Passwords must contain at least 1 Capital letter, 1 small letter and a special character",
        5000
      );
    } else {
      let token = "asas"
      const payload = {
        token,
        password
      }
      // console.log(payload)
      // console.log(password, token)
      dispatch(resetPassword(payload))
    }
   
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
          <ResetPasswordForm formData={formData} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} loading={loading} />
        </Col>
      </Row>
    </div>
  )
}
