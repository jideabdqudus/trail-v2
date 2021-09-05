import {Row,Col,Card,Form,Input,Button,Select,InputNumber,Dropdown} from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'


// imports 
import { IProgramForm ,IInputsFields} from '../type.d'
import { isEmpty } from 'lodash'


interface Props{
    programs: [],
    handleIndicator: (value: string)=>void,
    menu: any
    indicator: any
    handleIndicatorQuestion: (value: string)=>void
    indicatorQuestions: string[]
    components: string[]//define an interface for it
    delete_a_component: (id:number)=>void
    OnchangeOfInputs:(e: any)=>void
    inputs:IInputsFields
    onChangeSelectDropdown: (value: string)=>void
    changeComponent:(value: any)=>void
    
}
export const CreateForm = ({programs, handleIndicator,menu, indicator, handleIndicatorQuestion, indicatorQuestions, components, delete_a_component,OnchangeOfInputs, inputs, onChangeSelectDropdown, changeComponent}: Props) => {
    const { Option } = Select
   
    
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
                                        value={inputs.name}
                                        onChange={OnchangeOfInputs}
                                        
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
                                    // name="program"
                                    >
                                        <Select 
                                        placeholder="Select"
                                        className="form-builder-input"
                                        
                                        onSelect={handleIndicator}
                                        onChange={onChangeSelectDropdown}
                                        value={inputs.program }
                                        >
                                            
                                            {programs.map((program: IProgramForm)=>{
                                                
                                                return <Option key={program.id} value={program.id}>{program.name}</Option>
                                            })}
                                            
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                
                                    <Form.Item label="Instructions (Optional)"name="instructions">
                                        <Input.TextArea
                                            rows={6}
                                            className="form-builder-input"
                                            placeholder="Instructions"
                                            name="instructions"
                                            onChange={OnchangeOfInputs}
                                            value={inputs.instructions}
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

                            
                           {/* {inputFields && <div> */}
                            {components.map((component:any, idx)=>{

                            
                               return <Row gutter={[16,16]} key={idx}>
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
                                        name="linkedIndicator"
                                        >
                                            <Select placeholder="select" 
                                            
                                            onSelect={handleIndicatorQuestion}
                                            
                                            onChange={changeComponent} //not working
                                            
                                             >
                                               
                                                {indicator && indicator.map((ind: any)=>{
                                                  return  <Option key={ind.indicatorId} value={ind.indicatorId}>{ind.description}</Option>
                                                })}
                                                
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
                                            name="custom"
                                            >
                                            <Select placeholder="select" 
                                            onChange={OnchangeOfInputs}
                                            // value={component.indicatorquestion}
                                            // defaultValue={component.indicatorquestion}
                                            >
                                                <Option value="custom">Custom Question</Option>
                                                {indicatorQuestions.map((questions: any)=>{
                                                    return <Option key={questions.id} value={questions.id}>{questions.question}</Option>
                                                })}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                     <Col span={6}>
                                        <Form.Item
                                           style={{marginBottom: 0}}
                                           name="question"
                                        >
                                            <Input
                                                type="text"
                                                name="question"
                                                placeholder="--Type Question--"
                                                value={component.question}
                                                onChange={OnchangeOfInputs}
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
                                            name="indicator metric"
                                        >
                                            <Select
                                                placeholder="Select indicator metric"
                                            //   value={component.targetType}  
                                            //   defaultValue={component.targetType} 
                                              onChange={OnchangeOfInputs}
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
                                            style={{marginBottom: "20px"}}
                                            name="targetType"
                                        >
                                            <InputNumber
                                               value={component.targetValue}
                                               min={0}
                                               max={
                                                component.targetType ===
                                                   'percentage'
                                                       ? 99
                                                       : 1000000
                                               }
                                                style={{width: '100%'}}                              
                                                placeholder="--Target Value--"
                                                onChange={OnchangeOfInputs}
                                                name="targetType"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}>
                                        <Button
                                            type={"primary"}
                                            danger
                                            onClick={() =>
                                                delete_a_component(idx)
                                            }
                                            icon={
                                                <MinusCircleOutlined />
                                            }
                                            size={"middle"}
                                        />
                                    </Col>
                                </Row>
                            })}
                            {!isEmpty(components) && <Row>
                                <Row gutter={[16, 16]}>
                                    <Col span={3}>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                className="forgetBtn"
                                                
                                            >
                                                Create Form
                                                {/* {id
                                                    ? 'Update Form'
                                                    : 'Create Form'} */}
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Row>}
                        {/* </div>} */}
                        </Card>
                    </Form>
                </Col>
            </Row>
            
        </div>
    )
}
