import React from 'react'
import {Form, Radio } from 'antd'
import { useDispatch } from 'react-redux'

import {formBuildAnswer} from '../../../redux/actions/form'
import {Layout} from'./Layout'

const Mcq = ({content}) => {
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
                    {content?.question_answers.map((ans,i)=>{
                        return <Radio style={radioStyle} value={ans.text} key={i}>{ans.text}</Radio>
                    })}
                 </Radio.Group>
            </Form.Item>
        </Layout>
    )
   
}

export default Mcq
