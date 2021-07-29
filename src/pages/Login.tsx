import React from 'react'
import {Row, Col} from 'antd'

//Imports
import {assets} from "../assets/assets"

export const Login: React.FC= () => {
  return (
    <div className="auth">
      <Row className="auth__row">
        <Col span={12} className="auth__bg">
          <img src={assets.logo} alt="Logo" width="100" />
        </Col>
        <Col span={12}>
          Hi
        </Col>
      </Row>
    </div>
  )
}
