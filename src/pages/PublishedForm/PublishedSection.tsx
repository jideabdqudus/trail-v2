
import {useEffect} from 'react'
import { Button, Col, Row, Typography, Skeleton, Form } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// import 
import { ProgrammeSummary } from '../../components/FormPreview/ProgrammeSummary';
import { PreviewQuestions } from '../../components/FormPreview/PreviewQuestions';
import { IForms } from '../../type.d';
import { getForm, createSubmission } from '../../actions/form';
import { toastify } from '../../helpers';


export const PublishedSection = () => {
    const {form, loading, answers} = useSelector((state: IForms) => state.form)
    const {id}= useParams<any>()
   const dispatch = useDispatch()
   const history=useHistory()

    useEffect(()=>{
        dispatch(getForm(id))
        // eslint-disable-next-line
    },[])


    const onSubmit=()=>{
        const answerArray:any=Object.values(answers)
        for( const ans of answerArray){
            if(ans.answer===''|| ans.value==='' || ans.questionId.toString()===''){
                toastify.alertWarning('You have one or more empty fields',2000)
            }
        }
        if(answerArray.length !== form.components.length){
            toastify.alertWarning('You have one or more empty fields',2000)
        }else if(answerArray.length === 0){
            toastify.alertWarning('Answers cannot be empty',2000)
        }else{
            dispatch(createSubmission(form.formid,{ answers: answerArray }))
            
        }
        
        
        
    }

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
                    <Button
                        type="primary"
                        size="large"
                        shape="round"
                        htmlType="submit"
                        
                    >
                        Submit
                    </Button>
                    </Col>
                </Row>
                </Form>
            </section>
            
        
    )
}
