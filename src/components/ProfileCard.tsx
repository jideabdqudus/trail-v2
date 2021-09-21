import React from 'react'
import { Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

import { IUserDetails } from '../type.d'

interface Props{
    profile: IUserDetails
}
export const ProfileCard:React.FC<Props> = ({profile}) => {
    const {firstName, lastName, email,organizationName, organizationType,image} = profile
    return (
    <div className="dashboard-card" style={{ minHeight: "400px" }}>
      <h3 className="profile_h3">Personal Information</h3>
      <Button className="profile_btn">
        <Link to="/app/profile/edit">
          <EditOutlined />
          <span style={{ marginLeft: "5px" }}>Edit</span>
        </Link>
      </Button>
      <Divider />
      <Row>
        <Col span={8}>
          <div className="profile_div">
            <h3 className="profile_sub">First name</h3>
            <span className="profile_span">{firstName}</span>
          </div>
          <div className="profile_div">
            <h3 className="profile_sub">Email address</h3>
            <span>{email}</span>
          </div>
        </Col>
        <Col span={8}>
          <div className="profile_div">
            <h3 className="profile_sub">Last name</h3>
            <span>{lastName}</span>
          </div>
          <div className="profile_div">
            <h3 className="profile_sub">Organization name</h3>
            {organizationName && <span>{organizationName}</span>}
          </div>
        </Col>
        <Col span={8}>
          <div className="profile_div">
            <h3 className="profile_sub">Organization Type</h3>
            {organizationType && <span>{organizationType}</span>}
          </div>
          <div className="profile_div">
            <h3 className="profile_sub">Image</h3>
            {image && <img src={image} alt="Profile" width="100" height="100" />}
          </div>
        </Col>
      </Row>
    </div>
    )
}
