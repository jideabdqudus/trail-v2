import React, {useState} from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'

//Imports
import {assets} from "../assets/assets"
import {LoginForm} from "../components"
import { ILogin } from '../type.d'

export const Login: React.FC= () => {
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password:""
  })
  const onChangeForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = ()=>{
    console.log(formData)
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
          <LoginForm formData={formData} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} />
        </Col>
      </Row>
    </div>
  )
}
