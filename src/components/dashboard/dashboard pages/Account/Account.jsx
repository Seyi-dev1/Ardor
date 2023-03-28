import React from "react";
import "./Account.scss";
import AccountActions from "./Account-actions/accountActions";
import Carousel from "../../../carousel/Carousel";
import AccountTable from "../../../account-table/AccountTable";

const Account = () => {
  return (
    <div className="Account_page">
      <div className="pages_actions">
        <AccountActions />
        <AccountTable/>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default Account;
