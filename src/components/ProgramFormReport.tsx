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
  const generateMCQData=(rep: any)=>{
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
    const data = {
      labels: isArr,
      datasets:[
        {
          label: 'Sum Total',
          data: isArrSubmissionAnswer,
          backgroundColor: '#FFD04D',
          stack: 'Stack 0',
        },
        {
          label: 'Average',
          data: isArrSubmissionPercentage,
          backgroundColor: '#8273D9',
          stack: 'Stack 1',
        },
      ]
    }
    return data

  }

  console.log(report)
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
        stack: 'Stack 0',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 1',
      },
      
    ],
  };
  
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
                  {/* <Bar data={data} options={options} /> */}
                  <Bar data={generateMCQData(rep)} options={options} />
                  {/* <Bar data={rep.questionType === "radio" ? generateRadioData(rep) : generateNumberData(rep)} options={options} /> */}
                </Card>
              </Col>
            ))
          )}
        </Row>
    </div>
  )
}