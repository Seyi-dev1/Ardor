import React from "react";
import "./accountActions.scss";
import { IoIosCash } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { SiMoneygram } from "react-icons/si";
import { Link } from "react-router-dom";

const AccountActions = () => {
  const [balanceShown, setBalanceShown] = React.useState(false);
  const user = window.localStorage.getItem("user");

  const { firstName, balance } = JSON.parse(user);
  return (
    <div>
      <div className="account_controls">
        <span className="greeting">Welcome back {firstName}!</span>
        <div className="cash_container">
          <div className="total_balance">
            <IoIosCash className="icon" />
            <div className="balance">
              <h3 className="title">Available balance</h3>
              <h3 className="cash">{balanceShown ? balance : "***********"}</h3>
              {balanceShown ? (
                <div
                  className="show"
                  onClick={() => setBalanceShown(!balanceShown)}
                >
                  <span>hide</span>
                  <AiOutlineEyeInvisible class />
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
        <div className="action">
          <Link to="/dashboard/deposit" className="action_option">
            Add cash <RiMoneyDollarBoxFill className="option_icon" />
          </Link>
          <Link to="/dashboard/withdraw" className="action_option">
            Send funds <SiMoneygram className="option_icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
