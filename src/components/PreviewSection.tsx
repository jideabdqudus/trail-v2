import React from "react"
import { Col, Row, Typography, Form, Skeleton } from "antd";
import {  Link } from 'react-router-dom';

import { ProgrammeSummary } from './FormPreview/ProgrammeSummary';
import { PreviewQuestions } from './FormPreview/PreviewQuestions';

interface Props{
    form: any
    loading: boolean
}
export const PreviewSection: React.FC<Props> = ({form, loading}) => {    
const removeSpace=(text: string)=>{
    if(text){
        const newName=text.split(' ').join('')
        return newName;
    }
}
if (loading) return <Skeleton />;
    return (
            <section className="form-preview-section">
                <Form>
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                    <Typography.Paragraph className="form-preview-section-link">
                        Generated Link:
                         <Link target="_blank" rel="noreferrer" to={`/form/${removeSpace(form.name)}-${form.formid}`}>
                            {form.formlink}
                        </Link>
                    </Typography.Paragraph>
                    </Col>
                    <Col span={24}>
                        <ProgrammeSummary form={form}/>
                    </Col>
                    <Col span={24}>
                    <Typography.Text className="form-preview-section-title">
                        Preview Questions
                    </Typography.Text>
                    </Col>
                    <Col span={24}>
                        <PreviewQuestions form={form}/>
                    </Col>
                </Row>
                </Form>
            </section>
    )
}