import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { TfiWallet } from "react-icons/tfi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import Pic from "../../../pngs/profile3.png";
import { FaTimes } from "react-icons/fa";
import { createSelector } from "@reduxjs/toolkit";
import { selectCurrentUser } from "../../../redux/user/userSelector";
import { changeVisibility } from "../../../redux/modal/modalReducer";
import { useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";

import { useDispatch } from "react-redux";

const Navigation = ({ navRef, toggleNav }) => {
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser
  );

  const dispatch = useDispatch();
  const user = useSelector((state) => userSelector(state));

  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   user == null && navigate("/");
  // }, [user, navigate]);

  const { email, firstName, lastName } = user;

  return (
    <div className="navigation" ref={navRef}>
      <div className="profile">
        <img src={Pic} alt="pic" className="pic" />
        <h2 className="name">
          {firstName} {lastName}
        </h2>
        <h3 className="email">{email}</h3>
      </div>
      <div className="links" onClick={toggleNav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-active link" : "Link-inactive link"
          }
          to="/dashboard/Account"
        >
          <TfiWallet className="icon" />
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-active link" : "Link-inactive link"
          }
          to="/dashboard/Transactions"
        >
          <RiExchangeDollarFill className="icon" />
          Transactions
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-active link" : "Link-inactive link"
          }
          to="/dashboard/Profile"
        >
          <CgProfile className="icon" />
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-active link" : "Link-inactive link"
          }
          to="/dashboard/settings"
        >
          <FiSettings className="icon" />
          Settings
        </NavLink>
      </div>
      <div className="logout" onClick={() => dispatch(changeVisibility())}>
        <BiLogOut className="logout_logo" />
        <span className="logout_text">Logout</span>
      </div>
      <FaTimes className="close_btn" onClick={toggleNav} />
    </div>
  );
};

export default Navigation;
