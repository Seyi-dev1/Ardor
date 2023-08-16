import React from "react";
import "./Account.scss";
import AccountActions from "./Account-actions/accountActions";
import { TickerTape } from "react-ts-tradingview-widgets";
import Charts from "../../../charts/Charts";
const Account = () => {
  return (
    <div className="Account_page">
      <div className="pages_actions">
        <TickerTape
          isTransparent="true"
          colorTheme="light"
          displayMode="adaptive"
        ></TickerTape>
        <AccountActions />
        <Charts />
      </div>
    </div>
  );
};

export default Account;
