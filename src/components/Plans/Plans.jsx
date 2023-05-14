import React from "react";
import "./plans.css";
const Plans = () => {
  return (
    <div className="plans_con" id="plans">
      <span className="plans_title">PLANS & PRICING</span>
      <span className="plans_subtitle">choose a plan that works for you.</span>
      <div className="con-items ">
        <div className="item item1">
          <header>
            <h3>Gold</h3>
            <p>
              <b>1 Trade/Day</b>
            </p>
          </header>
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
              <b>5%</b>
              ROI
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Min: </b>
              BTC 0.014200
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Max: </b>
              BTC 1.38
            </li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="item color item2">
          <span className="badge">Popular</span>
          <header>
            <h3>Diamond</h3>
            <p>
              <b>3+ Trades/Day</b>
            </p>
          </header>
          <ul>
            <li>
              <i className="bx bx-check"></i>
              All features in <b>Gold</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              Flexible <b>call support</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>10%</b>
              ROI
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Min: </b>
              BTC 1.380000
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Max: </b>
              BTC 4.15
            </li>
          </ul>
          <button className="border">Choose Plan</button>
        </div>
        <div className="item item3">
          <header>
            <h3>Platinum</h3>
            <p>
              <b>Unlimited Trades/Day</b>
            </p>
          </header>
          <ul>
            <li>
              <i className="bx bx-check"></i>
              All features in <b>Gold</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              All features in <b>Diamond</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              Partnership <b>trading.</b>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Unlimited</b> commissions.
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>15%</b>
              ROI
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Min: </b>
              BTC 2.770000
            </li>
            <li>
              <i className="bx bx-check"></i>
              <b>Max: </b>
              BTC 13.83
            </li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
