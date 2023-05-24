import React from "react";
import "./accountActions.scss";
import Coins from "../../../../coins/Coins";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import {FiPieChart} from 'react-icons/fi'

const AccountActions = () => {
  
  const user = window.localStorage.getItem("user");

  const { firstName, investmentBalance, profitBalance } = JSON.parse(user);
  return (
    <div>
      <div className="account_controls">
        <span className="greeting">Welcome {firstName}!</span>
        <div className="cash_container">
          <div className="total_balance">
            <FaChartPie className="icon" />
            <div className="balance">
              <h3 className="title">Total portfolio</h3>
              <h3 className="cash">
                ${investmentBalance + profitBalance}
              </h3>
              
            </div>
          </div>
          <div className="total_balance">
            <FiPieChart className="icon" />
            <div className="balance">
              <h3 className="title">Investment portfolio</h3>
              <h3 className="cash">
                ${investmentBalance}
              </h3>
              
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Profits</h3>
              <h3 className="cash">
                ${profitBalance}
              </h3>
              
            </div>
          </div>
        </div>
        <Coins />
      </div>
    </div>
  );
};

export default AccountActions;
