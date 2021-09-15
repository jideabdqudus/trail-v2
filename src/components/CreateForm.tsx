import {Row,Col,Card,Form,Input,Button,Select,InputNumber,Dropdown} from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'


// imports 
import { IProgramForm ,IInputsFields} from '../type.d'
import { isEmpty } from 'lodash'


interface Props{
    programs: [],
    handleLinkedIndicator: (value: string)=>void,
    menu: any
    LinkedIndicator: any
    handleIndicatorQuestion: (value: string)=>void
    indicatorQuestions: string[]
    OnchangeOfInputs:(e: any)=>void
    inputs:IInputsFields
    onChangeSelectDropdown: (value: string)=>void

    componentBuild: any
    removeComponents: (index: number)=>void
    handleChangeQuestion: (event: any, attribute: string, index: number)=>void
    handleSelect: (value: any, attribute: string, index: number)=>void
    onFinish: ()=>void
    
}
export const CreateForm = ({
    programs, 
    handleLinkedIndicator,
    menu, 
    LinkedIndicator,
    handleIndicatorQuestion, 
    indicatorQuestions, 
    OnchangeOfInputs,
    inputs, 
    onChangeSelectDropdown, 
    componentBuild, 
    removeComponents,
    handleChangeQuestion, 
    handleSelect,
    onFinish}: Props) => {
    const { Option } = Select
    
   //destructure inputs
   const {
    title,
    name,
    program,
    organisationId,
    instructions,
    // components
    
    
} = inputs
    
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={ {title, instructions, name, program, organisationId} }
                    layout={'vertical'}
                    onFinish={onFinish}
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
                                        
                                        onSelect={handleLinkedIndicator}
                                        onChange={onChangeSelectDropdown}
                                        // value={inputs.program }
                                        >
                                            
                                            {programs.map((program: IProgramForm)=>{
                                                
                                                return <Option key={program.id} value={program.id}>{program.name}</Option>
                                            })}
                                            
                                        </Select>
                                    </Form.Item>
                                    <Input type="hidden" value={organisationId} />
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
                            {componentBuild && componentBuild.map((component:any, idx: number)=>{
                                const {
                                    targetType,
                                    linkedIndicator,
                                    question,
                                    //placeholder,
                                    targetValue,
                                    indicatorquestion,
                                } = component
                            
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
                                            value={linkedIndicator || ""}
                                            onChange={(value)=>handleSelect(value, "linkedIndicator",idx )} 
                                            
                                             >
                                               
                                                {LinkedIndicator && LinkedIndicator.map((ind: any, index: number)=>{
                                                  return  <Option key={index} value={ind.programIndicatorId}>{ind.description}</Option>
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
                                            name="indicatorquestion"
                                            
                                            >
                                            <Select placeholder="select" 
                                            onChange={(value)=>handleSelect(value, "indicatorquestion",idx )} 
                                            value={indicatorquestion || ""}
                                            defaultValue={indicatorquestion || ""}
                                            >
                                                <Option value={0}>Custom Question</Option>
                                                {indicatorQuestions.map((questions: any, index: any)=>{
                                                    return <Option key={index} value={questions.id}>{questions.question}</Option>
                                                })}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                     {(indicatorquestion ===0) && <Col span={6}>
                                        <Form.Item
                                           style={{marginBottom: 0}}
                                           name="question"
                                        >
                                            <Input
                                                type="text"
                                                name="question"
                                                
                                                placeholder="--Type Question--"
                                                value={question || ""}
                                                onChange={(e)=>handleChangeQuestion(e, "question",idx )} 
                                            />
                                        </Form.Item>
                                    </Col>}
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
                                            name="targetType"
                                        >
                                            <Select
                                                placeholder="Select indicator metric"
                                                
                                              value={targetType || ""}  
                                              defaultValue={targetType || ""} 
                                            onChange={(value)=>handleSelect(value, "targetType",idx )} 
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
                                            name="targetValue"
                                        >
                                            <InputNumber
                                               value={targetValue}
                                               
                                            
                                               min={0}
                                               max={
                                                component.targetType ===
                                                   'percentage'
                                                       ? 99
                                                       : 1000000
                                               }
                                                style={{width: '100%'}}                              
                                                placeholder="--Target Value--"
                                                onChange={(value)=>handleSelect(value, "targetValue",idx )} 
                                                
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}>
                                        <Button
                                            type={"primary"}
                                            danger
                                            onClick={() =>
                                                // delete_a_component(idx)
                                                removeComponents(idx)
                                            }
                                            icon={
                                                <MinusCircleOutlined />
                                            }
                                            size={"middle"}
                                        />
                                    </Col>
                                </Row>
                            })}
                            {!isEmpty(componentBuild) && <Row>
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
