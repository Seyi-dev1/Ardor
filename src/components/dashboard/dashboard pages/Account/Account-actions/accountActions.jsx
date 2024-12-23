import React from "react";
import "./accountActions.scss";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { BiTrendingDown } from "react-icons/bi";
const AccountActions = () => {
  const user = window.localStorage.getItem("user");
  let {
    investmentBalance,
    // createdAt,
    // plan,
    maintenanceFeeDue,
    maintenanceFeePaid,
    bonus,
    totalDeposit,
    profitBalance,
    totalWithrawal,
  } = JSON.parse(user);
  if (!totalWithrawal) {
    totalWithrawal = 0;
  }
  // const date1 = createdAt;
  // const date2 = new Date().getTime();

  // const difference = date2 - date1;
  // const days = difference / 86400000;

  // const profitBalance = (plan / 100) * investmentBalance * days;

  return (
    <div>
      <div className="account_controls">
        <div className="cash_container">
          <div className="total_balance">
            <FaChartPie className="icon" />
            <div className="balance">
              <h3 className="title">Total portfolio</h3>
              <h3 className="cash">
                ${(Number(totalDeposit) + profitBalance).toFixed(2)}
              </h3>
            </div>
          </div>
          <div className="total_balance">
            <BiTrendingDown className="icon" />
            <div className="balance">
              <h3 className="title">Total Deposits</h3>
              <h3 className="cash">${totalDeposit}</h3>
            </div>
          </div>
          <div className="total_balance">
            <FiPieChart className="icon" />
            <div className="balance">
              <h3 className="title">Trading Balance</h3>
              <h3 className="cash">${investmentBalance}</h3>
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Profits</h3>
              <h3 className="cash">${profitBalance}</h3>
            </div>
          </div>
          <div className="total_balance">
            <FaChartLine className="icon" />
            <div className="balance">
              <h3 className="title">Total Bonus</h3>
              <h3 className="cash">${bonus}</h3>
            </div>
          </div>
          <div className="total_balance">
            <BiTrendingDown className="icon" />
            <div className="balance">
              <h3 className="title">Maintenance Fee Due</h3>
              <h3 className="cash">${maintenanceFeeDue}</h3>
            </div>
          </div>
          <div className="total_balance">
            <BiTrendingDown className="icon" />
            <div className="balance">
              <h3 className="title">Maintenance Fee Paid</h3>
              <h3 className="cash">${maintenanceFeePaid}</h3>
            </div>
          </div>
          <div className="total_balance">
            <BiTrendingDown className="icon" />
            <div className="balance">
              <h3 className="title">Total Withdrawal</h3>
              <h3 className="cash">${totalWithrawal}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
