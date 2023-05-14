import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CButton from "../CButton/CButton";
import TemporaryDrawer from "./Drawer";
import "./navbar.scss";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/" className="logo_con">
        WEBSITE NAME
      </Link>
      <div className="links">
        <a href="#plans" className="link">
          PLANS
        </a>
        <a href="#getstarted" className="link">
          GET STARTED
        </a>
        <a href="#faq" className="link">
          FAQ
        </a>
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
