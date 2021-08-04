import React from "react";
import { Layout, Row, Col } from 'antd';

import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { OverviewStat } from "../components";

export const Overview = () => {
  const { Footer } = Layout;
  return (
    <div className="container-scroller">
      <Header />
      <div className="page-body-wrapper" style={{marginTop:"60px"}}>
        <SideBar  />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                  <h1 className="view-title">Profile</h1>
                   <div className="dashboard-card">
                      <OverviewStat/>
                      <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 17 }}>
                          
                        </Col>
                      </Row>
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