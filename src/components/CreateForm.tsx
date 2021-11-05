import { MinusCircleOutlined } from '@ant-design/icons'
import {Row,Col,Card,Form,Input,Button,Select,InputNumber,Dropdown} from 'antd'
import { WithContext as ReactTags } from 'react-tag-input';

import { IProgramForm ,IInputsFields} from '../type.d'
import { isEmpty } from 'lodash'
interface Props{
    programs: [],
    handleLinkedIndicator: (value: string)=>void,
    menu: any
    LinkedIndicator: any
    handleIndicatorQuestion: (value: string)=>void
    indicatorQuestions: string[]
    onChangeofInputs:(e: any)=>void
    inputs:IInputsFields
    onChangeSelectDropdown: (value: string)=>void
    componentBuild: any
    removeComponents: (index: number)=>void
    handleChangeQuestion: (event: any, attribute: string, index: number)=>void
    handleSelect: (value: any, attribute: string, index: number)=>void
    onFinish: ()=>void,
    handleOptionAddition:(tag:any,compIndex:any, name:string)=>void,
    handleOptionDelete:(i:number,compIndex:any)=>void,
    onOptionUpdate:(i:number, newOption:any,)=>void,
    tags:any
    tag2:any
}
export const CreateForm = ({
    programs, 
    handleLinkedIndicator,
    menu, 
    LinkedIndicator,
    handleIndicatorQuestion, 
    indicatorQuestions, 
    onChangeofInputs,
    inputs, 
    onChangeSelectDropdown, 
    componentBuild, 
    removeComponents,
    handleChangeQuestion, 
    handleSelect,
    onFinish,
    handleOptionAddition,
    handleOptionDelete,
    onOptionUpdate,
    tags,
    tag2
    }: Props) => {
    const { Option } = Select
    //react tags props
    const KeyCodes = {
        comma: 188,
        enter: 13,
      };
      
      const delimiters = [KeyCodes.comma, KeyCodes.enter];
   // Destructure inputs
   const {title, name, program, organisationId,instructions} = inputs
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Form name="create_form" className="login-form" layout={'vertical'} onFinish={onFinish}
                        initialValues={ {title, instructions, name, program, organisationId}}>
                        <Card title={'Form Details'}>
                            <Row gutter={[16,24]}>
                                <Col span={8}>
                                    <Form.Item label="Form Name" rules={[{required: true, message: "Form name is required"}]}>
                                        <Input 
                                            type="text"
                                            placeholder="Form Name"
                                            name="name"
                                            className="form-builder-input"
                                            value={inputs.name}
                                            onChange={onChangeofInputs}
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
                                        onSelect={handleLinkedIndicator}
                                        onChange={onChangeSelectDropdown}
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
                                            onChange={onChangeofInputs}
                                            value={inputs.instructions}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Dropdown trigger={['hover', 'click']} overlay={menu}>
                                <Button style={{ marginBottom: 20 }} type="primary" >
                                    Create Question
                                </Button>
                            </Dropdown>
                            {componentBuild && componentBuild.map((component:any, idx: number)=>{
                               const { targetType, linkedIndicator, question, targetValue, indicatorquestion, inputType} = component
                               return (
                                <Row gutter={[16,16]} key={idx}>
                                <Col span={7}>
                                    <Form.Item rules={[
                                        {
                                            required: true,
                                            message: 'Please select a question indicator',
                                        },
                                    ]}
                                        style={{marginBottom: 0}}
                                        name={`linkedIndicator${idx}`}
                                    >
                                        <Select placeholder="select"
                                            onSelect={handleIndicatorQuestion}
                                            value={linkedIndicator || ""}
                                            onChange={(value)=>handleSelect(value, "linkedIndicator",idx )} >
                                            {LinkedIndicator && LinkedIndicator.map((ind: any, index: number)=>{
                                              return  <Option key={index} value={ind.programIndicatorId}>{ind.description}</Option>
                                            })}
                                            
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please select a Custom Question',
                                            },
                                        ]}
                                        style={{marginBottom: 0}}
                                        name={`indicatorquestion${idx}`}
                                        >
                                        <Select placeholder="select" 
                                        onChange={(value)=>handleSelect(value, "indicatorquestion",idx )} 
                                        value={indicatorquestion || ""}
                                        // defaultValue={indicatorquestion || ""}
                                        >
                                            <Option value={0}>{inputType==='mcradio' ? 'Multiple choice Question': 'Custom Question'}</Option>
                                            {indicatorQuestions.map((questions: any, index: any)=>{
                                                return inputType==='mcradio'
                                                ? ''
                                                :
                                                <Option key={index+1} value={questions.id}>{questions.question}</Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                 {(indicatorquestion ===0) && <Col span={6}>
                                    <Form.Item
                                       style={{marginBottom: 0}}
                                       name={`question${idx}`}
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
                                        name={`targetType${idx}`}
                                    >
                                        <Select
                                            placeholder="Select indicator metric"
                                            
                                        value={targetType}  
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
                                        name={`targetValue${idx}`}
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
                                {(indicatorquestion ===0 && inputType==='mcradio') &&
                                <ReactTags
                                delimiters={delimiters}
                                handleAddition={(tag:any)=>handleOptionAddition(tag,idx, "current")}
                                handleDelete={(i:number)=>handleOptionDelete(i,idx)}
                                tags={tag2[idx].option}
                                name={`current${idx}`}
                                placeholder="Press enter for new Options"
                                maxLength={30}
                                />
                                }
                                <Col span={1}>
                                    <Button
                                        type={"primary"}
                                        danger
                                        onClick={() =>removeComponents(idx) }
                                        icon={
                                            <MinusCircleOutlined />
                                        }
                                        size={"middle"}
                                    />
                                </Col>
                            </Row>
                               )})}
                            
                             {!isEmpty(componentBuild) &&   <Row gutter={[16, 16]}>
                                <Col span={3}>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="forgetBtn"
                               
                                        >
                                            Create Form
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>}
                        </Card>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
