import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  faHome,
  faHashtag,
  faUser,
  faInbox,
  faBell,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import "./sidebar.css";
import { sign_out } from "../../stores/actions/loginAction";
import SidebarMenu from "./SidebarMenu";
import tweetcon from "../../assets/images/twitter-icon.png";
import Button from "../Button/Button";

function SideBar() {
  const dispatch = useDispatch();
  
  const logOut = () => {
    window.localStorage.clear();
    dispatch(sign_out());
  };

  return (
    <div className="sidebar">
      <img src={tweetcon} className="sidebar-icon" alt="" />

      <Link to="/home">
        <SidebarMenu icon={faHome} text="Home" />
      </Link>
      <SidebarMenu icon={faHashtag} text="Explore" />
      <SidebarMenu icon={faBell} text="Notification" />
      <SidebarMenu icon={faInbox} text="Message" />
      <Link to="/profil">
        <SidebarMenu icon={faUser} text="Profile" />
      </Link>
      <SidebarMenu icon={faSignOutAlt} onClickHandler={logOut} text="Log Out" />

      <Button text="Tweet" classname="btn-sidebar" />
    </div>
  );
}

export default SideBar;
