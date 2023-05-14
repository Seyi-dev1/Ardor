import React from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import "./transactions.scss";

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="title">
        {" "}
        <h2>Daily Technical Analysis</h2>
      </div>
      <TechnicalAnalysis colorTheme="dark" width="100%"></TechnicalAnalysis>
    </div>
  );
};

export default Transactions;
