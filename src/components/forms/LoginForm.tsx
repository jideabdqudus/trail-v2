import React from 'react'
import { Form, Input, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";



export const LoginForm: React.FC = () => {
  return (
    <div className="login">
      <h3>Welcome Back.</h3>
      <h5>
        Login with your details below.
      </h5>
      <div>
        <Form  name="normal_login">
          <span>Email</span>
          <Form.Item name="email" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter email" type="email" name="email" />
          </Form.Item>
          <span>Password</span>
          <Form.Item name="password" rules={[
              { required: true, message: "Confirm your Input" },
            ]}
          >
            <Input.Password 
              className="login__input" type="password" name="password" placeholder="Enter password" />
          </Form.Item>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login__btn" >
                  Login
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <p>
          Don't have an account? <Link to="/sign-up"> Sign Up</Link>
        </p>
        <p>
          Forgot your <Link to="/forgot-password"> Password?</Link>
        </p>
      </div>
    </div>
  )
}
