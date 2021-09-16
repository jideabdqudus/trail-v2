import { Form, Input, Button, Row, Col } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { IUser ,IUserDetails} from '../type.d'

interface Props{
    user: IUser
    formData: IUserDetails
    handleInputChange:(e:any)=>void
    onChange:(e:any)=>void
    onFinish: ()=>void
    loading: boolean
}

export const ProfileForm = ({formData, handleInputChange, onChange, onFinish, loading}: Props) => {
    
    const {firstName, lastName, email,organizationName, organizationType} =formData
    return (
        <div className="dashboard-card">
           <Form layout="vertical" onFinish={onFinish}>
            <Row gutter={[30,6]}>
                <Col span={8}>
                    <Form.Item label="FirstName">
                        <Input type="text" style={inputStyle} name="firstName" value={firstName} onChange={handleInputChange}/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="LastName">
                        <Input type="text" style={inputStyle} name="lastName" value={lastName} onChange={handleInputChange}/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Email">
                        <Input type="email" style={inputStyle} name="email" value={email} disabled/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[30,6]}>
                <Col span={8}>
                    <Form.Item label="Organization Name">
                        <Input type="text" style={inputStyle} name="organizationName" value={organizationName} onChange={handleInputChange}/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Organization Type">
                        <Input type="text" style={inputStyle} name="organizationType" value={organizationType} onChange={handleInputChange}/>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item style={{marginTop: '34px'}}>
                        <Input type="file" onChange={onChange}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <Form.Item>
                    {loading && <LoadingOutlined />}<Button type="primary" htmlType="submit" className="loginBtn"> Update</Button>
                    </Form.Item>
                </Col>
            </Row>
           </Form>
        </div>
    )
}
const inputStyle={
    height: '40px',
    fontSize: '0.9rem',
    borderColor: '#D7DCE0',
    border: '1px solid #D7DCE0'
}
