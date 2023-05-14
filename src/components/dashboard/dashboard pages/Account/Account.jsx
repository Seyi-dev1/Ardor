import React from "react";
import "./Account.scss";
import AccountActions from "./Account-actions/accountActions";
import CSFTab from "../../../CSF tab/CSFTab";
import Payments from "../../../Payments/Payments";
import { SymbolInfo } from "react-ts-tradingview-widgets";
const Account = () => {
  return (
    <div className="Account_page">
      <div className="pages_actions">
        <AccountActions />
        <Payments />
        <SymbolInfo
          colorTheme="light"
          isTransparent="true"
          autosize
        ></SymbolInfo>
        <div className="summary_container">
          <CSFTab />
        </div>
      </div>
    </div>
  );
};

export default Account;
