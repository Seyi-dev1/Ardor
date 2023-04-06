import React from "react";
import "./Account.scss";
import AccountActions from "./Account-actions/accountActions";
import Carousel from "../../../carousel/Carousel";
import Summary from "../../../Account-summary/Summary";
import { summaryData } from "../../../data";
import ZELLE from "../../../../Images/Zelle.png";
import GOLDMAN from "../../../../Images/Goldman.png";
import FDIC from "../../../../Images/Member-FDIC.png";
import GEICO from "../../../../Images/geico.png";
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
        <div className="partners">
          <img src={FDIC} alt="partner" className="partner_logos" />
          <img src={ZELLE} alt="partner" className="partner_logos" />
          <img src={GOLDMAN} alt="partner" className="partner_logos" />
          <img src={GEICO} alt="partner" className="partner_logos" />
        </div>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default Account;
