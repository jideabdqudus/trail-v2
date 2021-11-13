import React from 'react'
import { Row, Col, Card, Empty } from "antd";
import { isEmpty } from "lodash";
import { Bar } from 'react-chartjs-2'

interface Props {
  report: any
  generateRadioData: (report: any)=> any
  generateNumberData: (report: any)=> any
  options?: object
}

export const ProgramFormReport: React.FC<Props> = ({report, generateRadioData, generateNumberData, options}) => { 
  // const generateMCQData=(rep: any)=>{
  //   let isArr:any = []
  //   let isArrSubmissionAnswer:any = []
  //   let isArrSubmissionPercentage:any = []
  //   rep?.submissions?.map((r: any)=>{
  //     for ( let val in r ) {
  //       isArr.push(val)
  //     }
  //     r[Object.keys(r)[0]].map((v: any)=>{
  //       isArrSubmissionAnswer.push(v.answer)
  //       isArrSubmissionPercentage.push(v.percentage? v.percentage: v.count)
  //       return null
  //     })
  //     return null
  //   })
  //   const data = {
  //     labels: isArr,
  //     datasets:[
  //       {
  //         label: 'Sum Total',
  //         data: isArrSubmissionAnswer,
  //         backgroundColor: '#FFD04D',
  //         stack: 'Stack 0',
  //       },
  //       {
  //         label: 'Average',
  //         data: isArrSubmissionPercentage,
  //         backgroundColor: '#8273D9',
  //         stack: 'Stack 1',
  //       },
  //     ]
  //   }
  //   console.log(data)
  //   return data

  // }
  return (
    <div>
      <Row gutter={[48, 48]}> 
          {isEmpty(report) ? (
            <Empty className="reportEmpty" />
          ) : (
            report?.map((rep: any, idx: any) => (
              <Col key={idx} xs={{ span: 24 }} lg={{ span: 12 }}>
                <Card className={"indicatorCard"}>
                  <div className="reportCard" >
                    <small>
                      {rep?.question || ""}
                    </small>
                    <small>
                      {`Target: ${rep?.targetValue || ""}`}
                    </small>
                  </div>
                  {/* <Bar data={generateMCQData(rep)} options={options} /> */}
                  <Bar data={rep.questionType === "radio" ? generateRadioData(rep) : generateNumberData(rep)} options={options} />
                </Card>
              </Col>
            ))
          )}
        </Row>
    </div>
  )
}