import { useState, Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";

// import 
import { Header } from "../layouts/header";
import { SideBar } from '../layouts/sidebar';
import {CreateForm} from '../components/CreateForm'
import { IAuthenticate} from '../type.d'
import { COMPONENT_TYPES } from "../constants/environment";
import { IForms, IBuildType } from "../type.d";
import {getPrograms} from '../actions/form'

export const FormBuild = () => {
    const {Footer}= Layout;
    const dispatch =useDispatch();
    const { user } = useSelector((state: IAuthenticate) => state.auth);
    const {programs}= useSelector((state: IForms) => state.form)
    const [builderTypes, ]=useState <IBuildType[]>([
        {
            name: 'Text Input',
            value: COMPONENT_TYPES.text,
        },
        {
            name: 'Radio Input',
            value: COMPONENT_TYPES.radio,
        },
        {
            name: 'Number Input',
            value: COMPONENT_TYPES.number,
        },
    ])

    useEffect(()=>{
        dispatch(getPrograms());
    },[dispatch])
    
    return (
        <div className="container-scroller">
        <Header user={ user }/>
        <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
          <SideBar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row page-title-header">
                <div className="col-12">
                  
                  <Fragment>
                    <CreateForm 
                    builderTypes={builderTypes}
                    programs={programs}
                    />
                  </Fragment>
                </div>
              </div>
            </div>
            <Footer style={{ textAlign: "center" }}>Trail ©2021 by GSV</Footer>
          </div>
        </div>
      </div>
    )
}
