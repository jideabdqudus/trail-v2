import React, {useState} from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//Imports
import {assets} from "../assets/assets"
import {LoginForm} from "../components"
import { ILogin, IAuthenticate } from '../type.d'
import {loginUser} from "../actions/authActions.js"

export const Login: React.FC= () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state: IAuthenticate) => state.auth);
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password:""
  })
  const onChangeForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = ()=>{
    dispatch(loginUser(formData))
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
          <LoginForm formData={formData} loading={loading} onChangeForm={onChangeForm} onSubmitForm={onSubmitForm} />
        </Col>
      </Row>
    </div>
  )
}
