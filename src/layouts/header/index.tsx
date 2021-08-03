import React, { useState } from "react";
// import Logo from "../../../assets/Trail2.svg";
// import LogoMini from "../../../assets/Trail2.svg";
import { Drawer, Menu, Dropdown } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import {  useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onLogout = () => {
    localStorage.clear();
    // props.history.push("/login");
  };

  const onDashboardClick = () => {
    console.log("Clicked")
    // props.history.push("/app/dashboard");
  };

  const onProgramClick = () => {
    console.log("Clicked")
    // props.history.push("/app/dashboard/projects");
  };

  const onManagerClick = () => {
    console.log("Clicked")
    // props.history.push("/app/dashboard/manager");
  };

  const onFormClick = () => {
    console.log("Clicked")
    // props.history.push("/app/dashboard/form");
  };

  const onProfile = () => {
    console.log("Clicked")
    // props.history.push("/app/profile");
  };

  const menu = (
    <Menu>
      <Menu.Item key="setting:4">
        <p onClick={onProfile}>Profile</p>
      </Menu.Item>
      <br />
      <Menu.Item key="setting:5">
        <p onClick={onLogout}>Logout</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <div className="navbar-brand brand-logo">
            YES
            {/* <img src={Logo} alt="logo" />{" "} */}
          </div>
          <div className="navbar-brand brand-logo-mini">
            NO
            {/* <img src={LogoMini} alt="logo" />{" "} */}
          </div>
        </div>

        <div className="navbar-menu-wrapper d-flex align-items-center">
          <ul className="navbar-nav ml-auto">
            
            <li>
              <Dropdown overlay={menu} className="dropDownHidden">
                <a
                  className="nav-link dropdown-toggle"
                  id="UserDropdown"
                  href="!#"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jide
                </a>
              </Dropdown>

              <Drawer
                title={"Qudus"}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                style={{ zIndex: 9999 }}
              >
                <div className="drawerMenu">
                  <Link to="/app/dashboard" onClick={onDashboardClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Dashboard
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/dashboard/projects" onClick={onProgramClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Program Report
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/dashboard/manager" onClick={onManagerClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Programme Manager
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/dashboard/form" onClick={onFormClick}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      Forms
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <p onClick={onLogout}>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Logout
                    </span>
                  </p>
                </div>
              </Drawer>
            </li>
          </ul>
          <button
            className="folderHidden"
            type="button"
            data-toggle="offcanvas"
            onClick={showDrawer}
          >
            <MenuFoldOutlined />
          </button>
        </div>
      </nav>
    </div>
  );
};

