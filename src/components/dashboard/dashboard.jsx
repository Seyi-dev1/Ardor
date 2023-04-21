// import { useRef } from "react";
import Navigation from "./navigation/Navigation";
import { Outlet } from "react-router-dom";
import "./dashboard.scss";
// import { FaBars } from "react-icons/fa";
import { selectModalState } from "../../redux/modal/modalSelector";
import { useSelector } from "react-redux";
import LOGO from '../../Images/Nav_logo.png'
import Modal from "./modal/Modal";
import MobileNav from "../mobile-nav/MobileNav";
const Dashboard = () => {
  // const navRef = useRef();
  // const toggleNav = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  const modal = useSelector((state) => selectModalState(state));

  return (
    <div className="con">
      {modal ? (
        <Modal />
      ) : (
        <div className="dashboard">
          <div className="header">
            {/* <FaBars className="nav_icon" onClick={toggleNav} /> */}
            <img src={LOGO} alt="logo" className="logo" />
          </div>
          <div className="dashboard_content">
            <Navigation
              className="navigation"
            />
            <Outlet className="flow" />
            <div className="mobile_nav">
            <MobileNav/>
          </div>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Dashboard;
