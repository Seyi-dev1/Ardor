import React from "react";
import "./error.scss";
import Logo from "../../images/logo_black.png";
import PicError from "../../pngs/error.png";
import CButton from "../CButton/CButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Error = () => {
  const navigate = useNavigate();

  const returnToSignUp = () => {
    navigate("/");
  };
  return (
    <div className="error_page">
      <motion.div
        className="error_container"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={Logo} alt="logo" className="logo" />
        <img src={PicError} alt="error_pic" className="error_pic" />
        <div className="content">
          <span className="text">
            Error!!! check your internet connection and try again!
          </span>
          <CButton
            text="Go back"
            className="button"
            handleClick={returnToSignUp}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Error;
