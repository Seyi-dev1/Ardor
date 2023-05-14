import React from "react";
import { useNavigate } from "react-router-dom";
import CButton from "../CButton/CButton";
import "./banner.scss";
import BANNERLOGO from "./bitcoin.png";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner_info">
        <span className="big">Get Started Today,</span>
        <span className="medium">
          Build your future with Forex Trading and Investments in Stocks.
        </span>
        <span className="small">
          Discover the power of earning in an increasing cryptocurrency
          ecosystem.
        </span>
        <CButton
          handleClick={() => navigate("/signup")}
          className="banner_btn"
          background="black"
          text="GET STARTED"
        />
      </div>
      <div className="banner_image">
        <img src={BANNERLOGO} alt="bitcoin" className="bitcoin" />
      </div>
    </div>
  );
};

export default Banner;
