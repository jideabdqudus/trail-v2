import React, {useState, useEffect} from "react";
import { Divider, Layout, Spin } from 'antd';
import {useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import {clearReport,getFormReportforProgram} from "../redux/actions/program"
import { IAuthenticate, IPrograms } from '../type.d'
import { ProgramFormReport, ProgramForms, ProgramStat } from "../components";

export const ProgramReport = () => {
  const { Footer } = Layout;
  const {user} = useSelector((state: IAuthenticate) => state.auth);
  const dispatch = useDispatch()
  const { id } = useParams<{id: string}>();
  const {loading, programs, report} = useSelector((state: IPrograms) => state.program);
  const [program, setProgram] = useState<any>({})
  const [indicatorNumber, setIndicatorNumber] = useState<number>(0)
  useEffect(() => {
   getProgram(id)
   dispatch(clearReport())
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
  function onChange(value: any) {
    dispatch(getFormReportforProgram(id, value))
  }
  const generateDataObject = (report: any) => {
    const data = {
      labels: [report?.submissions[0]?.date || null],
      datasets: [
        {
          label: "Yes",
          data: [report?.submissions[0]?.positive || 0],
          backgroundColor: "#1a1aff",
          maxBarThickness: 20,
        },
        {
          label: "No",
          data: [report?.submissions[0]?.negative || 0],
          backgroundColor: "#b0b0fc",
          maxBarThickness: 20,
        },
      ],
    };
    return data;
  };
  
  const options:object = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className="container-scroller">
      {
        loading ? <div className="loading-overlay">
          <Spin size="large"/>
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
                      <ProgramForms program={program} onChange={onChange} />
                      <br/>
                      {report && report?.length > 0 ? <ProgramFormReport report={report} generateDataObject={generateDataObject} options={options} />: null}
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