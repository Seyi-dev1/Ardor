import "./accountSummary.scss";
import React from "react";
import { MdEmail } from "react-icons/md";

const AccountSummary = () => {
  const user = window.localStorage.getItem("user");

  const {
    email,
    firstName,
    lastName,
    accountCharge,
    profit,
    totalDeposit,
    balance,
    bonus,
  } = JSON.parse(user);
  return (
    <div className="summary">
      <div className="child first">
        <div className="personal">
          <div className="initials">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </div>
          <div className="details">
            <div className="name">
              {firstName} {lastName}
            </div>
            <div className="email">
              <div>
                <MdEmail className="icon" />
              </div>
              <div>{email}</div>
            </div>
          </div>
        </div>
        <div className="bonus">
          <div className="title">Total Bonus</div>
          <div className="value">{bonus} USD</div>
        </div>
        <div className="bonus">
          <div className="title">Pending Deposits</div>
          <div className="value">0 USD</div>
        </div>
        <div className="bonus">
          <div className="title">Pending withdrawals</div>
          <div className="value">0 USD</div>
        </div>
      </div>
      <div className="child second">
        <div className="heading">
          <h3>Wallet</h3>
        </div>
        <div className="balance">
          <div className="text">Available Balance</div>
          <div className="value">{balance} USD</div>
        </div>
        <div className="balance">
          <div className="text">Total Deposits</div>
          <div className="value">{totalDeposit} USD</div>
        </div>
        <div className="balance">
          <div className="text">Total Withdrawal</div>
          <div className="value">0 USD</div>
        </div>
        <div className="buttons">
          <button className="btn one">Buy Package</button>
          <button className="btn two">Withdraw Funds</button>
        </div>
      </div>
      <div className="child third">
        <div className="balance">
          <div className="text">Total Profit</div>
          <div className="value">{profit} USD</div>
        </div>
      </div>
      <div className="child fourth">
        <div className="balance">
          <div className="text">Total Charge</div>
          <div className="value">{accountCharge} USD</div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
