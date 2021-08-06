import React from "react";
import { Layout, Button } from 'antd';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom"


import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { Program } from "../components";
import { IAuthenticate, IPrograms } from '../type.d'

export const Programs = () => {
  const { Footer } = Layout;
  const {user} = useSelector((state: IAuthenticate) => state.auth)
  const {programs} = useSelector((state: IPrograms) => state.program);
  const renderSdgs = (sdgs: any) => {
    let sdgElems = [];
    for (let i in sdgs) {
      sdgElems.push(
        <>
          <label className="p-0 m-0">
            SDG {`${sdgs[i].sdgId} `} 
            {/* {i !== sdgs.length - 1 ? ", " : ""} */}
          </label>
        </>
      );
    }
    return sdgElems;
  };
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
                  <h1 className="view-title">Profile</h1>
                  <Button className="new-programme-btn">
                      <Link to="/app/new-program"> New Programme</Link>
                    </Button>
                  </div>
                   <div className="dashboard-card">
                      <Program programs={programs} renderSdgs={renderSdgs} />
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