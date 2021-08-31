import React, { useState } from 'react'
import {Row,Col,Card,Form,Input,Button,Select,InputNumber,Dropdown,Menu} from 'antd'

// imports 
import { IBuildType, IProgramForm } from '../type.d'


interface Props{
    builderTypes: IBuildType[],
    programs: []
}
export const CreateForm = ({builderTypes, programs}: Props) => {
    const { Option } = Select
    const [inputFields, setInputFields]=useState(false)
    console.log(programs)

    const handleBuildTypeChange=(builderType_value: string)=>{
        setInputFields(true)
    }

    const menu=(
        <Menu>
            {builderTypes.map((builderType: IBuildType)=>{
               return  <Menu.Item
                key={builderType.value}
                onClick={()=>{handleBuildTypeChange(builderType.value)}}
                >
                    {builderType.name}
                </Menu.Item>
            })}
            
        </Menu>
    )
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ }}
                    layout={'vertical'}
                    >
                        <Card title={'Form Details'}>
                            <Row gutter={[16,24]}>
                                <Col span={8}>
                                    <Form.Item
                                    label="Form Name"
                                    rules={[{
                                        required: true,
                                        message: "Form name is required"
                                    }]}
                                    >
                                        <Input
                                        type="text"
                                        placeholder="Form Name"
                                        name="name"
                                        className="form-builder-input"
                                        
                                        />

                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                    label="Link to Programme"
                                    rules={[{
                                        required: true,
                                        message: "Select a programme"
                                    }]}
                                    >
                                        <Select 
                                        placeholder="Select"
                                        className="form-builder-input"
                                        >
                                            {programs.map((program: IProgramForm)=>{
                                                
                                                console.log(program.sdgs)
                                                return <Option key={program.id} value={program.name}>{program.name}</Option>
                                            })}
                                            
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                
                                    <Form.Item label="Instructions (Optional)">
                                        <Input.TextArea
                                            rows={6}
                                            className="form-builder-input"
                                            placeholder="Instructions"
                                            name="instructions"
                                            
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Dropdown
                                trigger={['hover', 'click']}
                                overlay={menu}
                            >
                                <Button
                                    style={{ marginBottom: 20 }}
                                    type="primary"
                                    
                                >
                                    Create Question
                                </Button>
                            </Dropdown>

                            {/* inputs field  */}
                            {inputFields && <div>
                                <Row gutter={[16,16]}>
                                    <Col span={7}>
                                        <Form.Item label=""
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please select a question indicator',
                                            },
                                        ]}
                                        style={{marginBottom: 0}}
                                        >
                                            <Select placeholder="select">
                                                <Option value="">choose</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label=""
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Please select a Custom Question',
                                                },
                                            ]}
                                            style={{marginBottom: 0}}
                                            >
                                            <Select placeholder="select">
                                                <Option value="">choose</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                           style={{marginBottom: 0}}
                                        >
                                            <Input
                                                type="text"
                                                name="question"
                                                placeholder="--Type Question--"
                                                // value={}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={4}>
                                        <Form.Item
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Please select a metric',
                                                },
                                            ]}
                                            style={{marginBottom: 0}}
                                        >
                                            <Select
                                                placeholder="Select indicator metric"
                                                
                                            >
                                                <Option value="number">
                                                    Number
                                                </Option>
                                                <Option value="percentage">
                                                    Percentage
                                                </Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={4}>
                                        <Form.Item
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Target Value is required',
                                                },
                                            ]}
                                            style={{marginBottom: 0}}
                                        >
                                            <InputNumber
                                               
                                                style={{width: '100%'}}                              
                                                placeholder="--Target Value--"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>}
                        </Card>
                    </Form>
                </Col>
            </Row>
            
        </div>
    )
}
