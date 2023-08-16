import React from "react";
import "./accountActions.scss";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";

const AccountActions = () => {
  const user = window.localStorage.getItem("user");

  const { firstName, investmentBalance, createdAt, plan } = JSON.parse(user);

  const date1 = createdAt;
  const date2 = new Date().getTime();

  const difference = date2 - date1;
  const days = difference / 86400000;

  const profitBalance = (plan / 100) * investmentBalance * days;

  return (
    <div>
      <div className="account_controls">
        <div className="cash_container">
          <div className="total_balance">
            <FaChartPie className="icon" />
            <div className="balance">
              <h3 className="title">Total portfolio</h3>
              <h3 className="cash">
                ${(Number(investmentBalance) + profitBalance).toFixed(2)}
              </h3>
            </div>
          </div>
          <div className="total_balance">
            <FiPieChart className="icon" />
            <div className="balance">
              <h3 className="title">Investment portfolio</h3>
              <h3 className="cash">${investmentBalance}</h3>
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Profits</h3>
              <h3 className="cash">${profitBalance.toFixed(2)}</h3>
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Total Bonus</h3>
              <h3 className="cash">$0.00</h3>
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Account Charge</h3>
              <h3 className="cash">$0.00</h3>
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Total Withdrawal</h3>
              <h3 className="cash">$0.00</h3>
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Pending Withdrawal</h3>
              <h3 className="cash">$0.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
