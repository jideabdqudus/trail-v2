import React from 'react'
import { Row, Col, Card } from "antd";

interface Props{
  program: any
  indicatorNumber: number
}

export const ProgramStat:React.FC<Props> = ({program, indicatorNumber}) => {
  const {budget, totalNumberOfBeneficiaries, sdgs} = program  
  return (
    <Col span={24} className="overview-stat">
        <div>
          <Row gutter={[32, 8]}>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>No of SDGs</span>
                <p>{sdgs?.length}</p>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Indicators</span>
                <p>
                {sdgs && indicatorNumber}
                </p>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>No. of Beneficiaries</span>
                <p>
                  {totalNumberOfBeneficiaries}
                </p>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Budget</span>
                <p>
                  ₦{program && `${budget}`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
