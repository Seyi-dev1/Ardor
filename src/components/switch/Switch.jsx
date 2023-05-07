import React from "react";
import "./switch.css";

const Switch = ({ checked }) => {
  return (
    <label className="switch">
      <input type="checkbox" readOnly={checked} checked={checked} />
      <span className="slider rounded" />
    </label>
  );
};

export default Switch;
