import React from 'react'
import { Button, Col, Row, Typography } from "antd";
// import { useSelector, useDispatch } from 'react-redux';

// import 
import { ProgrammeSummary } from '../components/FormPreview/ProgrammeSummary';
import { PreviewQuestions } from '../components/FormPreview/PreviewQuestions';

export const PreviewSection = () => {
    return (
        <div>
            <section className="form-preview-section">
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                    <Typography.Paragraph className="form-preview-section-link">
                        Generated Link:{" "}
                        {/* <a target="_blank" rel="noreferrer" href="google.com"></a> */}
                    </Typography.Paragraph>
                    </Col>
                    <Col span={24}>
                    <ProgrammeSummary  />
                    </Col>
                    <Col span={24}>
                    <Typography.Text className="form-preview-section-title">
                        Preview Questions
                    </Typography.Text>
                    </Col>
                    <Col span={24}>
                    <PreviewQuestions  />
                    </Col>
                    <Col span={12}>
                    <Button
                        type="primary"
                        size="large"
                        shape="round"
                        
                    >
                        Submit
                    </Button>
                    </Col>
                </Row>
            </section>
            
        </div>
    )
}
