import React from 'react'
import { Row, Col, Card } from "antd";
import { size } from "lodash";

import {IBudgetAndBeneficiaries} from "../type.d"

interface Props{
  budgetAndBeneficiaries?: IBudgetAndBeneficiaries
  programs?: []
  calculateSize: any
}

export const OverviewStat:React.FC<Props> = ({budgetAndBeneficiaries, programs, calculateSize}) => {
  return (
    <Col span={24} className="overview-stat">
        <div>
          <Row gutter={[32, 8]}>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>No of Programmes</span>
                <p>{programs?.length}</p>
              </Card>
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Impact Targets</span>
                <p>
                {programs && size(calculateSize(programs))}
                </p>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Total Beneficiaries</span>
                <p>
                  {budgetAndBeneficiaries?.totalbeneficiaries}
                </p>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Card className="action">
                <span>Budget</span>
                <p>
                  ₦{programs && `${budgetAndBeneficiaries?.totalbudget}`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
