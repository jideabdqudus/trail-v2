import React from 'react'
import {Row, Col} from 'antd'

//Imports
import {assets} from "../assets/assets"
import {LoginForm} from "../components"

export const Login: React.FC= () => {
  return (
    <div className="auth">
      <Row className="auth__row">
        <Col xs={{ span: 0 }} lg={{ span: 10 }} className="auth__bg">
          <img src={assets.logo} alt="Logo" width="100" />
        </Col>
        <Col xs={{ span: 20 }} lg={{ span: 14 }}>
          <LoginForm/>
        </Col>
      </Row>
    </div>
  )
}
