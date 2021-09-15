import React from 'react'
import {Form, Radio } from 'antd'
import { useDispatch } from 'react-redux'

import {formBuildAnswer} from '../../../actions/form'
import {Layout} from'./Layout'

const RadioInput = ({content}) => {
    const dispatch=useDispatch()

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    const handleChange = (e) => dispatch(formBuildAnswer({
        value: content?.inputType,
        answer: e.target?.value,
        questionId: content?.questionId
    }))
    
    return (
        <Layout indicatorquestion={content?.indicatorQuestion || ''} formId={content?.programForm} isPreview={content?.isPreview} id={content?.id} question={content?.question} >
            <Form.Item>
                <Radio.Group onChange={handleChange}>
                    <Radio style={radioStyle} value={'1'}>Yes</Radio>
                    <Radio style={radioStyle} value={'2'}>No</Radio>
                 </Radio.Group>
            </Form.Item>
        </Layout>
    )
}

export default RadioInput
