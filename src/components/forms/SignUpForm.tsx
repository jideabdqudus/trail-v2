import React from 'react'
import { Form, Input, Button, Select, Row, Col, Checkbox } from "antd";
import { Link } from "react-router-dom";


interface Props{
  stepOne: boolean,
  stepTwo: boolean,
  onChangeStep: () => void,
  onPrevStep: ()=> void,
  stepNumber: number
}


export const SignUpForm: React.FC<Props> = ({stepOne, stepTwo, onChangeStep, onPrevStep, stepNumber}) => {
  const { Option } = Select;
  return (
    <div className="sign-up">
      <h3>Welcome to Trail.</h3>
      <h5>
         Fill in your details to get started.  
      </h5>
      <div>
        <Form name="normal_login">

          {stepOne && <div>
            <h6> Step {stepNumber} of 2: Personal Details </h6>
             <Row gutter={[30, 10]}>
            <Col xs={{span: 24}} lg={{span: 12}}>
            <span>First Name</span>
          <Form.Item name="firstName" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter First Name" type="text" name="firstName" />
          </Form.Item>
            </Col>
            <Col xs={{span: 24}} lg={{span: 12}}>
            <span>Last Name</span>
          <Form.Item name="lastName" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter Last Name" type="text" name="lastName" />
          </Form.Item>
            </Col>
          </Row>
          <span>Email</span>
          <Form.Item name="email" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter email" type="email" name="email" />
          </Form.Item>
          <span>Phone Number</span>
          <Form.Item name="phone" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter phone number" type="number" name="phone" />
          </Form.Item>
          <span>Password</span>
          <Form.Item name="password" rules={[
              { required: true, message: "Confirm your Input" },
            ]}
          >
            <Input.Password 
              className="login__input" type="password" name="password" placeholder="Enter password" />
          </Form.Item>
          <span>Confirm Password</span>
          <Form.Item name="password2" rules={[
              { required: true, message: "Confirm your Input" },
            ]}
          >
            <Input.Password 
              className="login__input" type="password" name="password2" placeholder="Confirm Password" />
          </Form.Item>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
                <Button onClick={onChangeStep} className="login__btn"  >
                  Next
                </Button>
            </Col>
          </Row>
          </div>
        }
        {stepTwo && <div>
      <h6> Step {stepNumber} of 2: Organization Details </h6>
          <span>Organization</span>
          <Form.Item name="organization" 
          >
            <Input
              className="login__input" type="text" name="organization" placeholder="Enter Organization" />
          </Form.Item>
          <span>Organization Type</span>
          <Form.Item name="organizationType"
          >
        <Select
            placeholder="Select an organization type"
            allowClear
          >
            <Option value="agriculture">Agriculture</Option>
            <Option value="medicine">Medicine</Option>
            <Option value="charity">Charity</Option>
          </Select>
          </Form.Item>
          <Checkbox name="terms">
                      By clicking , you accept our <Link to="/privacy-policy">Terms & Conditions</Link> and our <Link to="/privacy-policy">Data 
                    Policy</Link></Checkbox>
          <Row>
          <Col xs={{ span: 12 }} lg={{ span: 24 }}>
                <h4 onClick={onPrevStep} >
                  Previous
                </h4>
            </Col>
            </Row>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login__btn" >
                  Sign Up
                </Button>
              </Form.Item>
            </Col>
          </Row>
          </div>
          }
        </Form>
        <p>
          Already have an account? <Link to="/"> Log In</Link>
        </p>
      </div>
    </div>
  )
}
