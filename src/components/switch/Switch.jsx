import React from "react";
import "./switch.css";

const Switch = ({ checked }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} />
      <span className="slider rounded" />
    </label>
  );
};

export default Switch;
