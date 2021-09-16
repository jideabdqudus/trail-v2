import React from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  FileDoneOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

export const SideBar:React.FC = () => {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
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
            <Link className="nav-link" to="/app/programs" key="2">
              <span className="menu-title">
                <FileDoneOutlined className="sidebar-icon" />
                Programme Report
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app/forms" key="3">
              <span className="menu-title">
                <SolutionOutlined className="sidebar-icon" />
                Forms Management
              </span>
            </Link>
          </li>
          {/* <li className="nav-item sidebar-logout">
            <Link to="#!" onClick={onLogout} className="nav-link">
              <span className="menu-title">
                <LogoutOutlined className="sidebar-icon" />
                Logout
              </span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

