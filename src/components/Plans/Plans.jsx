import React from "react";
import "./plans.css";
import { useNavigate } from "react-router-dom";
const Plans = () => {
  const navigate = useNavigate();
  return (
    <div className="plans_con" id="plans">
      <span className="plans_title">PLANS & PRICING</span>
      <span className="plans_subtitle">choose a plan that works for you.</span>
      <div className="con-items ">
        <div className="item item1">
          <header>
            <h3>Starter plan</h3>
          </header>
          <span></span>
          <ul>
            <li>
              <i className="bx bx-check"></i>
              24/7 live <b>support</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              Portfolio <b>weekly breifing.</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>1.3% - 2.3%</b>
              Daily ROI
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Min: </b>
              $1,000
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Max: </b>
              $9,999
            </li>
          </ul>
          <button onClick={() => navigate("/login")}>Choose Plan</button>
        </div>
        <div className="item item2">
          <header>
            <h3>Premium plan</h3>
          </header>
          <span></span>
          <ul>
            <li>
              <i className="bx bx-check"></i>
              24/7 live <b>support</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              Portfolio <b>weekly breifing.</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>2.3% - 3.3%</b>
              Daily ROI
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Min: </b>
              $10,000
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Max: </b>
              $49,999
            </li>
          </ul>
          <button onClick={() => navigate("/login")}>Choose Plan</button>
        </div>
        <div className="item item3">
          <header>
            <h3>Platinum plan</h3>
          </header>
          <span></span>
          <ul>
            <li>
              <i className="bx bx-check"></i>
              24/7 live <b>support</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              Portfolio <b>weekly breifing.</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>3.3% - 4.3%</b>
              Daily ROI
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Min: </b>
              $50,000
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Max: </b>
              $199,999
            </li>
          </ul>
          <button onClick={() => navigate("/login")}>Choose Plan</button>
        </div>
        <div className="item item4">
          <header>
            <h3>Diamond plan</h3>
          </header>
          <span></span>
          <ul>
            <li>
              <i className="bx bx-check"></i>
              Partnership <b>portfolio.</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Unlimited</b> commissions.
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>5.3% - 6.5%</b>
              Daily ROI
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Min: </b>
              $200,000
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Max: </b>
              $1,000,000
            </li>
          </ul>
          <button onClick={() => navigate("/login")}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
