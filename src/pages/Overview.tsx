import React, {useEffect} from "react";
import { Layout, Row, Col } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { flatten, uniqBy } from "lodash";

//Imports
import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { OverviewStat } from "../components";
import Map from "../components/Map/index.js";
import { IAuthenticate, IPrograms } from '../type.d'
import {getBudgetAndBeneficiaries, getPrograms} from "../actions/program.js"

export const Overview = () => {
  const { Footer } = Layout;
  const dispatch = useDispatch()
  const {user} = useSelector((state: IAuthenticate) => state.auth);
  const {budgetAndBeneficiaries, programs, loading} = useSelector((state: IPrograms) => state.program);
  useEffect(() => {
    dispatch(getBudgetAndBeneficiaries())
    dispatch(getPrograms())
    // eslint-disable-next-line
  },[])
  const calculateSize = (programs: any) => {
    const sdgs = uniqBy(flatten(programs?.map(({ sdgs }: any) => sdgs)), "sdgId");
    return sdgs || [];
  };
  if (loading){
    return <div className="loader">Loading...</div>
  }
  return (
    <div className="container-scroller">
      <Header user={user} />
      <div className="page-body-wrapper" style={{marginTop:"60px"}}>
        <SideBar  />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                  <h1 className="view-title">Profile</h1>
                   <div className="dashboard-card">
                      <OverviewStat budgetAndBeneficiaries={budgetAndBeneficiaries} programs={programs} calculateSize={calculateSize} />
                      <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 17 }}>
                          <Map/>
                        </Col>
                      </Row>
                   </div>
              </div>
            </div>
          </div>
           <Footer style={{ textAlign: 'center' }}>Trail ©2021 by GSV</Footer>
        </div>
      </div>
    </div>
  );
};