import React from "react";
import "./accountActions.scss";
import { IoIosCash } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { createSelector } from "@reduxjs/toolkit";
import { selectCurrentUser } from "../../../../../redux/user/userSelector";
import { useSelector } from "react-redux";

const AccountActions = () => {
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser
  );
  const user = useSelector((state) => userSelector(state));
  const [balanceShown, setBalanceShown] = React.useState(false);

  const { balance } = user;
  return (
    <div>
      <div className="account_controls">
        <div className="cash_container">
          <div className="total_balance">
            <IoIosCash className="icon" />
            <div className="balance">
              <h3 className="title">Available balance</h3>
              <h3 className="cash">
                ${balanceShown ? balance : "********.***"}
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
      </div>
    </div>
  );
};

export default AccountActions;
