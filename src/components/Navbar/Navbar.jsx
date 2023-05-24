import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CButton from "../CButton/CButton";
import TemporaryDrawer from "./Drawer";
import LOGO from '../../Images/logobig.png'
import "./navbar.scss";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/" className="logo_con">
      <img src={LOGO} alt="logo" className="nav_logo"/>
      ARDOR FINANCES
      </Link>
      <div className="links">
        <a href="#plans" className="link">
          PLANS
        </a>
        <a href="#getstarted" className="link">
          GET STARTED
        </a>
        <Link to="/about" className="link">
          ABOUT US
        </Link>
        <a href="#contact" className="link">
          CONTACT US
        </a>
      </div>
      <div className="auth">
        <CButton handleClick={() => navigate("/signup")} text="REGISTER NOW" />
      </div>

      <div className="mobile_menu">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
