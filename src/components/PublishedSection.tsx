import React from "react"
import { Button, Col, Row, Typography, Skeleton, Form } from "antd";

import { ProgrammeSummary } from './FormPreview/ProgrammeSummary';
import { PreviewQuestions } from './FormPreview/PreviewQuestions';

interface Props {
    loading: boolean;
    onSubmit: ()=>void;
    form: any
}
export const PublishedSection = ({loading, onSubmit, form}: Props) => {
    if (loading) return <Skeleton />;
    return (
        <section className="form-preview-section">
            <Form onFinish={onSubmit}>
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <ProgrammeSummary  form={form}/>
                    </Col>
                    <Col span={24}>
                        <Typography.Text className="form-preview-section-title">
                            Preview Questions
                        </Typography.Text>
                    </Col>
                    <Col span={24}>
                        <PreviewQuestions  form={form}/>
                    </Col>
                    <Col span={12}>
                    <Button type="primary" size="large" shape="round" htmlType="submit">
                        Submit
                    </Button>
                    </Col>
                </Row>
            </Form>
        </section>
            
        
    )
}
