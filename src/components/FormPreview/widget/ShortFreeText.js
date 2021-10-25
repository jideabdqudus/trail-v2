import React from 'react'
import {Form, Input} from 'antd'
import { useDispatch } from 'react-redux'

import {formBuildAnswer} from '../../../redux/actions/form'
import {Layout} from'./Layout'

const ShortFreeText = ({content}) => {
    const dispatch=useDispatch()
    const handleChange = (e) => dispatch(formBuildAnswer({
        value: content?.inputType,
        answer: e.target.value.toString(),
        questionId: content?.questionId
    }))
    return (
        <Layout indicatorquestion={content?.indicatorQuestion || ''}  formId={content?.programForm} isPreview={content?.isPreview} id={content?.id} question={content?.question} >
            <Form.Item rules={[
                      { required: true, message: "This field is required" },
                    ]}>
                <Input onChange={handleChange} style={{width:'100%'}} name={(content?.key)} placeholder={`Answer should only be in ${content?.inputType}`}  />
            </Form.Item>
        </Layout>
    )
}

export default ShortFreeText
