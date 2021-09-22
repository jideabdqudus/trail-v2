import { Form, Input, Button, Row, Col } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Dropzone from 'react-dropzone'

import { IUser ,IUserDetails} from '../type.d'

interface Props{
    user: IUser
    formData: IUserDetails
    handleInputChange:(e:any)=>void
    onFinish: ()=>void
    loading: boolean
    handleDrop:(file:any)=>void
    fileForm:any
}

export const ProfileForm = ({formData, handleInputChange, onFinish, loading, handleDrop,fileForm}: Props) => {
    
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
                <Col span={8}>
                    <Dropzone onDrop={handleDrop} multiple={false} accept={['image/png', 'image/jpeg']} maxSize={600000}>
                    {({ getRootProps, getInputProps }) => (<>
                        <span>Profile Image</span>
                      <div {...getRootProps({ className:"drop-zone" })}>
                        <input {...getInputProps()}/>
                        <p style={{textAlign:"center", color:"#1354D3", paddingTop:"8px"}}>Upload program image</p>
                        {fileForm.name === undefined ? <span>PNG or JPEG format only. Maximum size is 600kb</span> :<span>{fileForm.name}</span> }
                      </div>
                    </>
                  )}
                    </Dropzone>
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
