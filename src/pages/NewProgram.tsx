import React, {useState} from "react";
import { Layout } from 'antd';
import {useSelector} from 'react-redux';


import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { ProgramData } from "../components";
import { IAuthenticate,IProgramEach  } from '../type.d'

export const NewProgram = () => {
  const { Footer } = Layout;
  const {user} = useSelector((state: IAuthenticate) => state.auth)
  const [formData, setFormData] = useState<IProgramEach>({
    name:"",
    description:"",
    code:"",
    totalNumberOfBeneficiaries: 0,
    budget: 0,
    locations:{},
    activeMarker:{},
    image:"",
    sdgs:[]
  })
  return (
    <div className="container-scroller">
      <Header user={user} />
      <div className="page-body-wrapper" style={{marginTop:"60px"}}>
        <SideBar  />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                <div className="top-header">
                  <h1 className="view-title">Create New Programme</h1>
                </div>
                   <div className="dashboard-card">
                      <ProgramData/>
                   </div>
              </div>
            </div>
          </div>
           <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </div>
      </div>
    </div>
  );
};