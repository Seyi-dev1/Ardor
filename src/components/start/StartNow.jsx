import React from "react";
import CREATE from "./create.png";
import VERIFY from "./verified.png";
import DEPOSIT from "./deposit.png";
import EARN from "./earning.png";
import "./startnow.scss";
import CButton from "../CButton/CButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const StartNow = () => {
  const navigate = useNavigate();
  return (
    <div className="startnow" id="getstarted">
      <span className="startnow_title">Let's Begin</span>
      <span className="startnow_subtitle">4 easy steps to start earning.</span>
      <div className="steps">
        <motion.div initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: [-100, 0], opacity: 1 }} className="step">
          <img src={CREATE} alt="steps" className="step_icon" />
          <div className="step_info">
            <div className="step_title">Create an Account</div>
            <div className="step_text">
              Creating an account is a free and painless process. Complete the
              registration form and get one step closer to earning.
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: [-100, 0], opacity: 1 }} className="step">
          <img src={VERIFY} alt="steps" className="step_icon" />
          <div className="step_info">
            <div className="step_title">Get Verified</div>
            <div className="step_text">
              Once we have verified your details and you have passed our
              screening process, your account will be activated and provisioned
              for trading.
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: [-100, 0], opacity: 1 }} className="step">
          <img src={DEPOSIT} alt="steps" className="step_icon" />
          <div className="step_info">
            <div className="step_title">Create New Deposit</div>
            <div className="step_text">
              Continue to make deposits on a range of plans available on your
              account - as provided by the platform.
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: [-100, 0], opacity: 1 }} className="step">
          <img src={EARN} alt="steps" className="step_icon" />
          <div className="step_info">
            <div className="step_title">Start Earning</div>
            <div className="step_text">
              Start earning with a return on investment by the percentage of the
              plans you made investments on. You also earn referral bonuses and
              commissions.
            </div>
          </div>
        </motion.div>
      </div>

      <CButton handleClick={() => navigate("/signup")} text="START NOW" />
    </div>
  );
};

export default StartNow;
