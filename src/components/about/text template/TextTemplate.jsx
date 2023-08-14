import "./textTemplate.scss";
import { FaFlag } from "react-icons/fa";

import React from "react";

const TextTemplate = ({ icon, heading, text }) => {
  return (
    <div className="textTemplate">
      <div className="icon">
        {/* <FaFlag className="pic" /> */}
        {icon}
      </div>
      <div className="text">
        <div className="header">
          <h2>{heading}</h2>
        </div>
        <div className="desc">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextTemplate;
