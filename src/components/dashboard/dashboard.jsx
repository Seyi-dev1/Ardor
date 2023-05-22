// import { useRef } from "react";
import Navigation from "./navigation/Navigation";
import { Outlet, useNavigate } from "react-router-dom";
import "./dashboard.scss";
// import { FaBars } from "react-icons/fa";
import { selectModalState } from "../../redux/modal/modalSelector";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./modal/Modal";
import MobileNav from "../mobile-nav/MobileNav";
import { startSignOut } from "../../redux/user/userReducer";
const Dashboard = () => {
  // const navRef = useRef();
  // const toggleNav = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };
  const navigate = useNavigate();
  const modal = useSelector((state) => selectModalState(state));
  const dispatch = useDispatch();
  return (
    <div className="con">
      {modal ? (
        <Modal />
      ) : (
        <div className="dashboard">
          <div className="header">
            {/* <FaBars className="nav_icon" onClick={toggleNav} /> */}
            <span className="logo">My Dashboard</span>
            <span
              className="out"
              onClick={() => {
                dispatch(startSignOut());
                setTimeout(() => {
                  window.localStorage.clear();
                  navigate("/");
                }, 3000);
              }}
            >
              Sign out
            </span>
          </div>
          <div className="dashboard_content">
            <Navigation className="navigation" />
            <Outlet className="flow" />
            <div className="mobile_nav">
              <MobileNav />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
