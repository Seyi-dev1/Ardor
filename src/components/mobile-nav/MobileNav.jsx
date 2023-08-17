import React from "react";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./mobileNav.scss";
import { BsPersonCircle } from "react-icons/bs";

const MobileNav = () => {
  return (
    <div className="nav_mobile">
      <NavLink
        className={({ isActive }) =>
          isActive ? "Link-active link" : "Link-inactive link"
        }
        to="/dashboard/Account"
      >
        <TfiWallet className="icon" />
        <span className="link_name">Overview</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "Link-active link" : "Link-inactive link"
        }
        to="/dashboard/Overview"
      >
        <RiExchangeDollarFill className="icon" />
        <span className="link_name">Accounts</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "Link-active link" : "Link-inactive link"
        }
        to="/dashboard/Transactions"
      >
        <FaHistory className="icon" />
        <span className="link_name">History</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "Link-active link" : "Link-inactive link"
        }
        to="/dashboard/profile"
      >
        <BsPersonCircle className="icon" />
        <span className="link_name">Me</span>
      </NavLink>
    </div>
  );
};

export default MobileNav;
