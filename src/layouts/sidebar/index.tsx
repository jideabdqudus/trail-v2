import React from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

export const SideBar = () => {
  const onLogout = () => {
    localStorage.clear();
    // props.history.push("/login");
  };

  return (
    <div>
      <nav
        className="sidebar sidebar-offcanvas"
        id="sidebar"
      >
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/app/dashboard" key="1">
              <span className="menu-title">
                <AppstoreOutlined className="sidebar-icon" />
                Overview
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app/dashboard/projects" key="2">
              <span className="menu-title">
                <FileDoneOutlined className="sidebar-icon" />
                Programme Report
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app/dashboard/form" key="3">
              <span className="menu-title">
                <SolutionOutlined className="sidebar-icon" />
                Forms Management
              </span>
            </Link>
          </li>
          <li className="nav-item sidebar-logout">
            <p onClick={onLogout} className="nav-link">
              <span className="menu-title">
                <LogoutOutlined className="sidebar-icon" />
                Logout
              </span>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

