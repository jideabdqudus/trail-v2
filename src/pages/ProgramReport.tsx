import React, {useState, useEffect} from "react";
import { Divider, Layout, Spin } from 'antd';
import {useSelector} from 'react-redux';
import { useParams } from "react-router-dom";

//Imports
import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { ProgramForms, ProgramStat } from "../components";
import { IAuthenticate, IPrograms } from '../type.d'

export const ProgramReport = () => {
  const { Footer } = Layout;
  const {user} = useSelector((state: IAuthenticate) => state.auth);
  const { id } = useParams<{id: string}>();
  const {loading, programs} = useSelector((state: IPrograms) => state.program);
  const [program, setProgram] = useState<any>({})
  const [indicatorNumber, setIndicatorNumber] = useState<number>(0)
  useEffect(() => {
   getProgram(id)
    //eslint-disable-next-line
  }, [])
  let indicatorValue = 0  
  const getProgram = (id: any)=>{
    programs?.map((prog: any)=>{
      if (prog?.id.toString() === id){
        setProgram(prog)
        prog.sdgs.map((sdg: any)=>{
          indicatorValue +=sdg.indicators.length
          return setIndicatorNumber(indicatorValue)
        })
      }
      return null
    })
    return null
  }
  
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
                  <h1 className="view-title">{program && program.name}</h1>
                   <div className="dashboard-card">
                      <ProgramStat program = {program} indicatorNumber={indicatorNumber} />
                      <h2 className="program-report__sub">Performance Indicators</h2>
                      <Divider/>
                      <ProgramForms program={program}/>
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