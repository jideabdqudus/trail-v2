import React from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {  useDispatch } from "react-redux";


export const SideBar = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    localStorage.clear();
    // props.history.push("/login");
  };

  return (
    <div>
      <nav
        className="sidebar sidebar-offcanvas"
        id="sidebar"
        style={{ position: "fixed", height: "100%" }}
      >
        <br />
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/app/dashboard" key="1">
              <i className="menu-icon typcn typcn-document-text"></i>
              <span className="menu-title">
                {" "}
                <AppstoreOutlined style={{ paddingRight: "10px" }} />
                Overview
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app/dashboard/projects" key="2">
              <i className="menu-icon typcn typcn-document-text"></i>
              <span className="menu-title">
                <FileDoneOutlined style={{ paddingRight: "10px" }} />
                Programme Report
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app/dashboard/form" key="3">
              <i className="menu-icon typcn typcn-document-text"></i>
              <span className="menu-title">
                <SolutionOutlined style={{ paddingRight: "10px" }} />
                Forms Management
              </span>
            </Link>
          </li>
          <li className="nav-item" style={{ marginTop: "300px" }}>
            <p onClick={onLogout} className="nav-link">
              <i className="menu-icon typcn typcn-document-text"></i>
              <span className="menu-title">
                <LogoutOutlined style={{ paddingRight: "10px" }} />
                Logout
              </span>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

