import React,{useState} from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router'
import { useSelector } from 'react-redux'


//Imports
import {assets} from "../assets/assets"
import {PasswordForm} from "../components"
import { IForgotPassword, IAuthenticate } from '../type.d'


export const ForgotPassword: React.FC= () => {
  const { isAuthenticated, loading} = useSelector((state: IAuthenticate) => state.auth);

  const [formData, setFormData] = useState<IForgotPassword>({
    email: "",
  })
  const onChangeForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = ()=>{
    console.log(formData)
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
          <PasswordForm formData={formData} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} loading={loading} />
        </Col>
      </Row>
    </div>
  )
}
