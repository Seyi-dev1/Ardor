import React from "react";
import { MdMailOutline } from "react-icons/md";
import LOGO from "../../Images/logobig.png";
import { useNavigate } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="top">
        <div className="first">
          <div className="title_con">
            <img src={LOGO} alt="FOOTER LOGO" className="footer_logo" />
            <span className="title">ARDOR FINANCE</span>
          </div>
          <span className="address">
            San Francisco <br />
            CA, USA.
          </span>
        </div>
        <div className="second">
          <span className="footer_title">Account</span>
          <div className="links">
            <span onClick={() => navigate("/login")} className="footer_link">
              My Account
            </span>
            <span onClick={() => navigate("/signup")} className="footer_link">
              Get started
            </span>
          </div>
        </div>
        <div className="second">
          <span className="footer_title">Newsletter</span>
          <div className="links">
            <span className="footer_link">
              Subscribe to our newsletter <br /> now to get latest news from us.
            </span>
            <div className="subscribe_con">
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe"
              />
              <MdMailOutline className="sub_icon" />
            </div>
            <span className="sub_btn">Subscribe Now!{" >"}</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span className="copyright">
          ©2023 Ardor Finances co. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
