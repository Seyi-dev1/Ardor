import React from "react";
import "./modal.scss";
import CButton from "../../CButton/CButton";
import { startSignOut } from "../../../redux/user/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeVisibility } from "../../../redux/modal/modalReducer";
import { motion } from "framer-motion";
import LOGO from '../../../Images/Nav_logo.png'
const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(startSignOut());
    setTimeout(() => navigate("/"), 4000);
    setTimeout(() => dispatch(changeVisibility()), 5000);
  };

  const cancleLogout = () => {
    dispatch(changeVisibility());
  };

  return (
    <div className="modal">
      <motion.div
        className="modal_content"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={LOGO} alt="logo" className="logo" />
        <div className="content">
          <span className="text">Are you sure you want to logout?</span>
          <div className="buttons">
            <CButton
              text="Logout"
              background="black"
              className="button"
              handleClick={signOut}
            />
            <CButton
              text="Cancel"
              className="button"
              handleClick={cancleLogout}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
