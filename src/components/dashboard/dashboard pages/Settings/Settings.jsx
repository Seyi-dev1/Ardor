import React from "react";
import "./settings.scss";
import Switch from "../../../switch/Switch";
import { MdNotificationsActive } from "react-icons/md";
import { BsFillShieldLockFill, BsPenFill, BsSendFill } from "react-icons/bs";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="settings_page">
      <div className="settings_container">
        <h3 className="title">Settings</h3>
        <h3 className="subtitle">Security & Login</h3>
        <div className="security">
          <div className="security_action">
            <MdNotificationsActive className="icon" />
            <h3 className="text">Get alerts about unrecognized logins</h3>
            <Switch className="toggle" checked={true} />
          </div>
          <div className="security_action">
            <BsFillShieldLockFill className="icon" />
            <h3 className="text">Use two factor authentication (OTP)</h3>
            <Switch className="toggle" checked={true} />
          </div>
        </div>
        <h3 className="subtitle">Utility</h3>
        <div className="display_container">
          <div className="display_action">
            <FaFilePdf className="icon" />
            <h3 className="text">Request account statement</h3>
            <span className="toggle">
              Get now <FaDownload />
            </span>
          </div>
          <div className="display_action">
            <BsPenFill className="icon" />
            <h3 className="text">Request chequebook</h3>
            <span className="toggle">
              Apply
              <BsSendFill />
            </span>
          </div>
          <div className="display_action">
            <BsPenFill className="icon" />
            <h3 className="text">Request Fund transfer</h3>
            <span className="toggle">
              Apply
              <BsSendFill />
            </span>
          </div>
          <div className="display_action">
            <BsPenFill className="icon" />
            <h3 className="text">Request security report</h3>
            <span className="toggle">
              Apply
              <BsSendFill />
            </span>
          </div>
          <div className="display_action">
            <BsPenFill className="icon" />
            <h3 className="text">Request Loan</h3>
            <span className="toggle">
              Apply
              <BsSendFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
