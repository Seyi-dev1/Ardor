import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CButton from "../CButton/CButton";
import TemporaryDrawer from "./Drawer";
import LOGO from "../../Images/logobig.png";
import "./navbar.scss";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [scroll, setScroll] = React.useState(0);
  console.log(scroll);
  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  });
  const navigate = useNavigate();
  return (
    <div className={scroll > 0 ? `navbar color` : "navbar"}>
      <Link to="/" className="logo_con">
        <img src={LOGO} alt="logo" className="nav_logo" />
        Thompson's Central
      </Link>
      <div className="links">
        <a href="#plans" className="link">
          Plans
        </a>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/customers" className="link">
          Customers
        </Link>
        <a href="#contact" className="link">
          Contact
        </a>
        <div className="divider"></div>
        <div className="auth">
          <button onClick={() => navigate("/login")}>
            <div className="logIn">
              <span>
                <FaUserCircle className="icon" />
              </span>
              <span>Log in</span>
            </div>
          </button>

          <button className="signUp" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>

      <div className="mobile_menu">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
