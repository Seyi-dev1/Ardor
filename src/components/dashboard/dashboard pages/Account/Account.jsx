import React from "react";
import "./Account.scss";
import AccountActions from "./Account-actions/accountActions";
import Carousel from "../../../carousel/Carousel";
import Summary from "../../../Account-summary/Summary";
import { summaryData } from "../../../data";
const Account = () => {
  return (
    <div className="Account_page">
      <div className="pages_actions">
        <AccountActions />

        <div className="summary_container">
          <span className="section_info">Account Summary</span>
          {summaryData.map((data) => (
            <Summary key={data.id} {...data} />
          ))}
        </div>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default Account;
