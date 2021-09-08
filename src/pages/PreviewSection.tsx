import {useEffect} from 'react'
import { Button, Col, Row, Typography, Skeleton } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// import 
import { ProgrammeSummary } from '../components/FormPreview/ProgrammeSummary';
import { PreviewQuestions } from '../components/FormPreview/PreviewQuestions';
import { IForms } from '../type.d';
import { getForm } from '../actions/form';


export const PreviewSection = () => {
    const {form, loading} = useSelector((state: IForms) => state.form)
    const {id}= useParams<any>()
   const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getForm(id))
        // eslint-disable-next-line
    },[])
    console.log(form)
    console.log(id, 'this is id')

    if (loading) return <Skeleton />;
    return (
        <div>
            <section className="form-preview-section">
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                    <Typography.Paragraph className="form-preview-section-link">
                        Generated Link:{" "}
                        <a target="_blank" rel="noreferrer" href={form.formlink}>
                        {" "}
                        {form.formlink}
                        </a>
                    </Typography.Paragraph>
                    </Col>
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
