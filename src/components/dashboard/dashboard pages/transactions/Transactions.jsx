import React from "react";
import "./transactions.scss";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MdCurrencyExchange } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactionsNav">
        <NavLink
          to={"/dashboard/transactions/overall"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <div className="lynk">
            <MdCurrencyExchange className="icon" />
            <span>Transations</span>
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/transactions/deposits"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <div className="lynk">
            <AiFillBank className="icon" />
            <span>Deposits</span>
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/transactions/withdrawals"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <div className="lynk">
            <BiMoneyWithdraw className="icon" />
            <span>Withdrawals</span>
          </div>
        </NavLink>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Transactions;
