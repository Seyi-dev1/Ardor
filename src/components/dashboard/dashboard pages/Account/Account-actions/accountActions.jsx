import React from "react";
import "./accountActions.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Coins from "../../../../coins/Coins";
import { FaBitcoin } from "react-icons/fa";

const AccountActions = () => {
  const [balanceShown, setBalanceShown] = React.useState(false);
  const user = window.localStorage.getItem("user");

  const { firstName, balance } = JSON.parse(user);
  return (
    <div>
      <div className="account_controls">
        <span className="greeting">Welcome {firstName}!</span>
        <div className="cash_container">
          <div className="total_balance">
            <FaBitcoin className="icon" />
            <div className="balance">
              <h3 className="title">Balance</h3>
              <h3 className="cash">
                BTC: {balanceShown ? balance : "***********"}
              </h3>
              {balanceShown ? (
                <div
                  className="show"
                  onClick={() => setBalanceShown(!balanceShown)}
                >
                  <span>hide</span>
                  <AiOutlineEyeInvisible />
                </div>
              ) : (
                <div
                  className="show"
                  onClick={() => setBalanceShown(!balanceShown)}
                >
                  <span>show</span>
                  <AiOutlineEye />
                </div>
              )}
            </div>
          </div>
        </div>

        <Coins />
      </div>
    </div>
  );
};

export default AccountActions;
