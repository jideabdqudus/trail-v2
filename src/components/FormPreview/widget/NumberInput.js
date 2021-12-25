import React from 'react'
import { Form, InputNumber} from 'antd'
import { useDispatch } from 'react-redux'

import {formBuildAnswer} from '../../../redux/actions/form'
import {Layout} from'./Layout'

const NumberInput = ({content}) => {
     const dispatch = useDispatch()
    const handleChange = (value) => dispatch(formBuildAnswer({
        value: content?.inputType,
        answer: value?.toString(),
        questionId: content?.questionId
    }))
    return (
        <Layout indicatorquestion={content?.indicatorquestion || ''}  formId={content?.programForm} isPreview={content?.isPreview} id={content?.id} question={content?.question} >
            <Form.Item rules={[
                      { required: true, message: "This field is required" },
                    ]}>
                <InputNumber onChange={handleChange} style={{width:'100%'}} name={(content?.key)} placeholder={`Answer should only be in ${content?.inputType}`} type="number" />
            </Form.Item>
        </Layout>
    )
}

export default NumberInput
