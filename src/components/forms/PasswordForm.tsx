import React from 'react'

import { Form, Input, Button, Row, Col } from "antd";

//Imports
import {IForgotPassword} from "../../type.d"

interface Props {
  formData: IForgotPassword ;
  onChangeForm: (e: any) => void;
  onSubmitForm: ()=> void
}

export const PasswordForm:React.FC <Props> = ({formData, onChangeForm, onSubmitForm}) => {
  return (
    <div className="login">
      <h3>Forgot Password.</h3>
      <h5>
      Enter your email to recover your password.
      </h5>
      <div>
        <Form  name="normal_login" onFinish={onSubmitForm}>
          <span>Email</span> 
          <Form.Item name="email" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter email" type="email" name="email" value={formData.email} onChange={onChangeForm} />
          </Form.Item>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login__btn" >
                  Recover Password
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>

  )
}
