import React from "react";
import "./summary.scss";

const Summary = ({ ...data }) => {
  return (
    <div className="summary">
      <div className="name">
        <span className="line"></span>
        {data.icon}
        <div className="summary_title">
          <div className="title">{data.name}</div>
          <div className="number">***{data.number}</div>
        </div>
      </div>
      <div className="value">
        <span className="amount">${data.amount}</span>
        <div className="info">{data.info}</div>
      </div>
    </div>
  );
};

export default Summary;
