import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"

export const Overview = () => {
  return (
    <div className="container-scroller">
      <Header />
      <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
        <SideBar  />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                <div>
                  <h4 className="view-title">Profile</h4>
                </div>
                  HELLO
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};