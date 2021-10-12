import React, { useEffect } from "react";
import { Layout} from "antd";
import {Content} from "antd/lib/layout/layout";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IForms } from '../type.d';
import { toastify } from '../helpers';
import { getForm, createSubmission } from '../redux/actions/form';
import {PublishedSection} from '../components/PublishedSection'

export const PublishedForm: React.FC = () => {
    const {Footer}= Layout;
    const {form, loading, answers} = useSelector((state: IForms) => state.form)
    const {id}= useParams<any>()
   const dispatch = useDispatch()
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
    return (
    <Layout style={{ minHeight: "100vh" }}>
        <Content className="published-section-container">
          <PublishedSection form={form} loading={loading} onSubmit={onSubmit} />
        </Content>
      <Footer style={{ textAlign: 'center' }} >Trail ©2021 by GSV</Footer>
    </Layout>
    )
}
