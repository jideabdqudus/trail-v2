import React from 'react'
import { Row, Col, Card } from "antd";


export const OverviewStat:React.FC = () => {
  return (
    <Col span={24} className="overview-stat">
        <div>
          <Row gutter={[32, 8]}>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>No of Programmes</span>
                <p>12</p>
              </Card>
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Impact Targets</span>
                <p>
                  12
                </p>{" "}
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Total Beneficiaries</span>
                <p>
                  12
                </p>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Budget</span>
                <p>
                  ₦{`${131111}`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
