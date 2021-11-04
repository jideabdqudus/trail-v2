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
                  <Bar data={rep.questionType === "radio" ? generateRadioData(rep) : generateNumberData(rep)} options={options} />
                </Card>
              </Col>
            ))
          )}
        </Row>
    </div>
  )
}