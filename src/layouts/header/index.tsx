import React, { useState } from "react";
import { Drawer, Menu, Dropdown, Avatar } from "antd";
import { MenuFoldOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

//Imports
import { assets } from "../../assets/assets";
import {IUser, IProfile} from "../../type.d"
import {logout} from "../../actions/authActions"

//Imports

interface Props {
  user: IUser
}

export const Header:React.FC<Props> = ({user}) => {
  const {profile}=useSelector((state:IProfile)=>state.profile)
  const { firstName, lastName, image }=profile
  const [visible, setVisible] = useState<boolean>(false);
  const history = useHistory()
  const dispatch = useDispatch()
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onLogout = () => {
    dispatch(logout(history))
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
        <Link to="/app/profile" onClick={onProfile}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="setting:5">
        <p onClick={onLogout} className="logout_p" style={{fontSize:"13px"}}>Logout</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <nav className="navbar default-layout fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <div className="navbar-brand brand-logo">
            <img src={assets.logo} alt="logo" />
          </div>
          <div className="navbar-brand brand-logo-mini">
            <img src={assets.logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <ul className="navbar-nav ml-auto navbar-ul">
            <li>
              <Dropdown overlay={menu} className="dropDownHidden">
                <a className="nav-link dropdown-toggle" id="UserDropdown" href="!#" data-toggle="dropdown"
                  aria-expanded="false">
                    {image ? <Avatar size={34} src={image} style={{marginRight:"10px"}} /> : 
                  <Avatar size={"small"} icon={<UserOutlined />} style={{marginRight:"10px"}} /> }
                  {`${user && firstName} ${user && lastName}`}
                </a>
              </Dropdown>
              <Drawer title={`${user && user.firstName} ${user && user.lastName}`} placement="right" closable={false} onClose={onClose} visible={visible}
                style={{ zIndex: 9999 }}>
                <div className="drawerMenu">
                  <Link to="/app/dashboard" onClick={onDashboardClick}>
                    <span className="drawerMenu-span">
                      Dashboard
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/programs" onClick={onProgramClick}>
                    <span className="drawerMenu-span">
                      Program Report
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/dashboard/manager" onClick={onManagerClick}>
                    <span className="drawerMenu-span">
                      Programme Manager
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link to="/app/forms" onClick={onFormClick}>
                    <span className="drawerMenu-span">
                      Forms
                    </span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <p onClick={onLogout} className="logout_p">Logout</p>
                </div>
              </Drawer>
            </li>
          </ul>
          <button className="folderHidden" type="button" data-toggle="offcanvas" onClick={showDrawer}>
            <MenuFoldOutlined className="menu-fold" />
          </button>
        </div>
      </nav>
    </div>
  );
};

