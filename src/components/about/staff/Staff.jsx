import "./staff.scss";
import React from "react";
import ceo from "../images/in-team-1.png";

const Staff = ({ image, position, name }) => {
  return (
    <div className="staff">
      <div className="image">
        <img src={image} alt="staff" />
      </div>
      <div className="desc">
        <div className="position">
          <p>{position}</p>
        </div>
        <div className="name">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Staff;
