import { useRef } from "react";
import Navigation from "./navigation/Navigation";
import { Outlet } from "react-router-dom";
import "./dashboard.scss";
import { FaBars } from "react-icons/fa";
import { selectModalState } from "../../redux/modal/modalSelector";
import { useSelector } from "react-redux";
import Modal from "./modal/Modal";
const Dashboard = () => {
  const navRef = useRef();
  const toggleNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const modal = useSelector((state) => selectModalState(state));

  return (
    <div className="con">
      {modal ? (
        <Modal />
      ) : (
        <div className="dashboard">
          <div className="header">
            <FaBars className="nav_icon" onClick={toggleNav} />
            <span className="logo">LOGO</span>
          </div>
          <div className="dashboard_content">
            <Navigation
              className="navigation"
              toggleNav={toggleNav}
              navRef={navRef}
            />
            <Outlet className="flow" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
