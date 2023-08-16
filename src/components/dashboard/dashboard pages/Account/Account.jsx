import React from "react";
import "./Account.scss";
import AccountActions from "./Account-actions/accountActions";
import CSFTab from "../../../CSF tab/CSFTab";
import Payments from "../../../Payments/Payments";
import { TickerTape } from "react-ts-tradingview-widgets";
import Charts from "../../../charts/Charts";
const Account = () => {
  return (
    <div className="Account_page">
      <div className="pages_actions">
        <TickerTape colorTheme="light" displayMode="adaptive"></TickerTape>
        <AccountActions />
        <Charts />
        <Payments />
      </div>
    </div>
  );
};

export default Account;
