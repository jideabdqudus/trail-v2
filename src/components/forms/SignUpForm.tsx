import React from 'react'
import { Form, Input, Button, Select, Row, Col, Checkbox, Spin } from "antd";
import { Link } from "react-router-dom";

//Imports
import {ISignUp} from "../../type.d"


interface Props{
  stepOne: boolean,
  stepTwo: boolean,
  onChangeStep: () => void,
  onPrevStep: ()=> void,
  stepNumber: number
  formData: ISignUp,
  onChangeForm: (e: any)=> void,
  onTickTerms: (e: any)=> void,
  onSubmitForm: ()=> void,
  onOrganizationChange?:(e: any)=>void,
  loading?: boolean
}


export const SignUpForm: React.FC<Props> = ({stepOne, stepTwo, onChangeStep, onPrevStep, stepNumber, formData, onChangeForm, onTickTerms, onSubmitForm, onOrganizationChange, loading}) => {
  const { Option } = Select;
  const { firstName, lastName, email, phone, password, password2, terms, organization, organizationType } = formData;
  return (
    <div className="sign-up">
      {
        loading ? <div className="loading-overlay">
          <Spin size="large" />
        </div> : null 
      }
      <h3>Welcome to Trail.</h3>
      <h5>
         Fill in your details to get started.  
      </h5>
      <div>
        <Form name="normal_login" onFinish={onSubmitForm}>
          {stepOne && <div>
            <h6> Step {stepNumber} of 2: Personal Details </h6>
             <Row gutter={[30, 10]}>
            <Col xs={{span: 24}} lg={{span: 12}}>
            <span>First Name</span>
          <Form.Item name="firstName" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" autoFocus={true} placeholder="Enter First Name" type="text" name="firstName" value={firstName} onChange={onChangeForm} />
          </Form.Item>
            </Col>
            <Col xs={{span: 24}} lg={{span: 12}}>
            <span>Last Name</span>
          <Form.Item name="lastName" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter Last Name" type="text" name="lastName" value={lastName} onChange={onChangeForm} />
          </Form.Item>
            </Col>
          </Row>
          <span>Email</span>
          <Form.Item name="email" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter email" type="email" name="email" value={email} onChange={onChangeForm} />
          </Form.Item>
          <span>Phone Number</span>
          <Form.Item name="phone" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter phone number" type="number" name="phone" value={phone} onChange={onChangeForm} />
          </Form.Item>
          <span>Password</span>
          <Form.Item name="password" rules={[
              { required: true, message: "Confirm your Input" },
            ]}
          >
            <Input.Password 
              className="login__input" type="password" name="password" placeholder="Enter password" value={password} onChange={onChangeForm} />
          </Form.Item>
          <span>Confirm Password</span>
          <Form.Item name="password2" rules={[
              { required: true, message: "Confirm your Input" },
            ]}
          >
            <Input.Password 
              className="login__input" type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={onChangeForm} />
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
              className="login__input" autoFocus={true} type="text" name="organization" placeholder="Enter Organization" value={organization} onChange={onChangeForm} />
          </Form.Item>
          <span>Organization Type</span>
          <Form.Item name="organizationType"
          >
        <Select
            placeholder="Select an organization type"
            allowClear
            value={organizationType} onChange={onOrganizationChange}
          >
            <Option value="agriculture">Agriculture</Option>
            <Option value="medicine">Medicine</Option>
            <Option value="charity">Charity</Option>
          </Select>
          </Form.Item>
          <Checkbox name="terms" value={terms} onChange={onTickTerms}>
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
