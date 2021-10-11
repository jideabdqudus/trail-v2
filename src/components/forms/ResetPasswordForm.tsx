import React from 'react'

import { Form, Input, Button, Row, Col } from "antd";

//Imports
import {IResetPassword} from "../../type.d"

interface Props {
  formData: IResetPassword ;
  onChangeForm: (e: any) => void;
  onSubmitForm: ()=> void;
  loading?: boolean;
}

export const ResetPasswordForm:React.FC <Props> = ({formData, onChangeForm, onSubmitForm, loading}) => {
  if (loading){
    return <div className="loader">Loading...</div>
  }
  const {password2, password} = formData
  return (
    <div className="login">
      <h3>Reset Password.</h3>
      <h5>
      Enter your new password to login.
      </h5>
      <div>
        <Form  name="normal_login" onFinish={onSubmitForm}>
          <span>Password</span> 
          <Form.Item name="password" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input.Password className="login__input" placeholder="Enter new password" type="password" name="password" autoFocus={true} value={password} onChange={onChangeForm} />
          </Form.Item>
          <span>Confirm Password</span> 
          <Form.Item name="password2" rules={[
              { required: true, message: "Confirm your Input" },
            ]}
          >
            <Input.Password 
              className="login__input" type="password" name="password2" placeholder="Confirm new password" value={password2} onChange={onChangeForm} />
          </Form.Item>

          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login__btn" >
                  Confirm new Password
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>

  )
}
