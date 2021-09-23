import React from 'react'
import { Row, Col, Card, Empty } from "antd";
import { Bar } from "react-chartjs-2";
import { isEmpty } from "lodash";

interface Props {
  report: any
  generateDataObject: (report: any)=> any
  options?: object
}

export const ProgramFormReport: React.FC<Props> = ({report, generateDataObject, options}) => {
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
                  <Bar data={generateDataObject(rep)} width={100} height={60} options={options}/>
                </Card>
              </Col>
            ))
          )}
        </Row>
    </div>
  )
}