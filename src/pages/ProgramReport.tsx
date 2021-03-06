import React, {useState, useEffect} from "react";
import { Divider, Layout, Spin } from 'antd';
import {useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import {clearReport,getFormReportforProgram} from "../redux/actions/program"
import { IAuthenticate, IPrograms } from '../type.d'
import { ProgramFormReport, ProgramForms, ProgramStat } from "../components";

export const ProgramReport = () => {
  let docToPrint:any = React.createRef();
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
  const generateNumberData =(rep: any)=>{
    let isArr:any = []
    let isArrSubmissionAverage:any = []
    let isArrSubmissionSum:any = []
    rep?.submissions?.map((r: any)=>{
      isArr.push(r?.date)
      isArrSubmissionAverage.push(r?.average)
      isArrSubmissionSum.push(r?.total)
      return null
    })
    const data = {
      labels: isArr,
      datasets:[
        {
          label: 'Sum Total',
          data: isArrSubmissionSum,
          backgroundColor: '#FFD04D',
          stack: 'Stack 0',
        },
        {
          label: 'Average',
          data: isArrSubmissionAverage,
          backgroundColor: '#8273D9',
          stack: 'Stack 1',
        },
      ]
    }
    return data
  }

  const generateRadioData =(rep: any)=>{
    let isArr:any = []
    let isArrSubmissionNo:any = []
    let isArrSubmissionYes:any = []
    rep?.submissions?.map((r: any)=>{
      isArr.push(r?.date)
      isArrSubmissionNo.push(r?.negative)
      isArrSubmissionYes.push(r?.positive)
      return null
    })
    const data = {
      labels: isArr,
      datasets:[
        {
          label: 'Yes',
          data: isArrSubmissionYes,
          backgroundColor: '#FFD04D',
          stack: 'Stack 0',
        },
        {
          label: 'No',
          data: isArrSubmissionNo,
          backgroundColor: '#8273D9',
          stack: 'Stack 1',
        },
      ]
    }
    return data
  }

  const generateMCQData=(rep: any)=>{
    let obj: any = []
    let isArr:any = []
    let isArrSubmissionAnswer:any = []
    let isArrSubmissionPercentage:any = []
    rep?.submissions?.map((r: any)=>{
      for ( let val in r ) {
        isArr.push(val)
      }
      r[Object.keys(r)[0]].map((v: any)=>{
        isArrSubmissionAnswer.push(v.answer)
        isArrSubmissionPercentage.push(v.percentage? v.percentage: v.count)
        return null
      })
      return null
    })
    function getRandomRgb() {
      var num = Math.round(0xffffff * Math.random());
      var r = num >> 16;
      // eslint-disable-next-line no-mixed-operators
      var g = num >> 8 & 255;
      var b = num & 255;
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    isArrSubmissionAnswer.map((val: any, id: number)=>{
      obj.push({label: val, data: [isArrSubmissionPercentage[id]], backgroundColor: getRandomRgb() })
      return null
    })
    const data = {
      labels: isArr,
      datasets: obj
    };
    return data
  }

  const determineData =(rep: any)=>{
    if (rep.questionType === "radio"){
      return generateRadioData(rep)
    }else if(rep.questionType === "mcradio"){
     return generateMCQData(rep)
    }else{
      return generateNumberData(rep)
    }
  }
  
  const options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
 

  const printDocument = () => {
    const input: any = docToPrint.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1000, 1000]
      });
      pdf.addImage(imgData, 0, 0, 0, 0) ;
      pdf.save("program-pdf-details");
    });
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
              <div className="col-12" ref={docToPrint}>
                  <h1 className="view-title">{program && program.name}</h1>
                   <div className="dashboard-card">
                      <ProgramStat program = {program} indicatorNumber={indicatorNumber} />
                      <h2 className="program-report__sub">Performance Indicators</h2>
                      <Divider/>
                      <ProgramForms program={program} printDocument={printDocument} onChange={onChange} reportValue={report?.length} />
                      <br/>
                      {report && report?.length > 0 ? <ProgramFormReport report={report} determineData={determineData}
                       options={options} />: null}
                  </div>
                      <Footer style={{ textAlign: 'center' }}>Trail ??2021 by GSV</Footer>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};