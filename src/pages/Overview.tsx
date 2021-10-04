import React, {useEffect, useState} from "react";
import { Layout, Row, Col, Spin } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { flatten, uniqBy } from "lodash";

//Imports
import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { OverviewStat, DoughnutChart } from "../components";
import Map from "../components/Map/index.js";
import { IAuthenticate, IPrograms} from '../type.d'
import {getBudgetAndBeneficiaries, getPrograms} from "../redux/actions/program"

export const Overview = () => {
  const { Footer } = Layout;
  const dispatch = useDispatch()
  const {user} = useSelector((state: IAuthenticate) => state.auth);
  const {budgetAndBeneficiaries, programs, loading} = useSelector((state: IPrograms) => state.program);
  const [watch] = useState<any>(programs)
  useEffect(() => {
    dispatch(getBudgetAndBeneficiaries())
    dispatch(getPrograms())
  },[watch, dispatch])
  const calculateSize = (programs: []) => {
    const sdgs = uniqBy(flatten(programs?.map(({ sdgs }: any) => sdgs)), "sdgId");
    return sdgs || [];
  };

  const sdgNames=(programs:[]) =>{
    const sdgNames=calculateSize(programs).map(({name}: any)=>name)
    return sdgNames;
  }
  const displayOccurence=(programs:any)=>{
    const sdgs = flatten(programs.map(( {sdgs}:any ) => sdgs));
    const sdgsNames = sdgs.map(( {name} :any) => name);

    const countOccurence=(arr:any)=>(
      arr.reduce((prev:any, val:any)=>{
        if(prev[val]){
          prev[val]++
        }else{
          prev[val]=1
        }
        return prev
      },{})
    )
    const counts=countOccurence(sdgsNames);
    return Object.values(counts);
  }
  const pairArrays = (arr1:any, arr2:any) => {
    const res = [];
    const size = arr1.length;
    for (let i = 0; i < size; i++) {
      res.push({ x: arr2[i], y: arr1[i] });
    }
    return res;
  };
  
  return (
    <div className="container-scroller">
      {
        loading ? <div className="loading-overlay">
          <Spin size="large" />
        </div> : null 
      }
      <Header user={user} />
      <div className="page-body-wrapper" style={{marginTop:"60px"}}>
        <SideBar  />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                  <h1 className="view-title">Overview</h1>
                   <div className="dashboard-card">
                      <OverviewStat budgetAndBeneficiaries={budgetAndBeneficiaries} programs={programs} calculateSize={calculateSize} />
                      <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 17 }}>
                          <Map/>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 1 }}></Col>
                        <Col xs={{ span: 24 }} lg={{span:6}}>
                          <DoughnutChart
                            sdgNames={sdgNames}
                            displayOccurence={displayOccurence}
                            pairArrays={pairArrays}
                            programs={programs}
                          />
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