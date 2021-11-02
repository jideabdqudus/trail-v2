import React from 'react'
import { Row, Col, Card, Empty } from "antd";
import { isEmpty } from "lodash";
import { Bar } from 'react-chartjs-2'

interface Props {
  report: any
  generateDataObject: (report: any)=> any
  options?: object
}

export const ProgramFormReport: React.FC<Props> = ({report, generateDataObject, options}) => {
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
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 1',
      },
    ],
  };

  const generateTheData:any =(rep: any)=>{
    let isArr:any = []
    let isArrSubmissionAverage:any = []
    let isArrSubmissionSum:any = []
    rep?.submissions?.map((r: any)=>{
      isArr.push(r?.date)
      isArrSubmissionAverage.push(r?.average)
      isArrSubmissionSum.push(r?.total)
    })
    const data = {
      labels: isArr,
      datasets:[
        {
          label: 'Sum Total',
          data: isArrSubmissionSum,
          backgroundColor: 'rgb(255, 99, 132)',
          stack: 'Stack 0',
        },
        {
          label: 'Average',
          data: isArrSubmissionAverage,
          backgroundColor: 'rgb(75, 192, 192)',
          stack: 'Stack 1',
        },
      ]
    }
    return data
  }
  
  const optionsAgain: any = {
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
                  <Bar data={generateTheData(rep)} options={optionsAgain} />
                  {/* <Bar data={generateDataObject(rep)} width={100} height={60} options={options}/> */}
                </Card>
              </Col>
            ))
          )}
        </Row>
    </div>
  )
}