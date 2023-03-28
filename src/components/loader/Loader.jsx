import "./loader.scss";
import React from "react";
import Logo from "../../images/logo_black.png";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="loader"
    >
      <motion.img
        src={Logo}
        alt="logo"
        className="loader_logo"
        initial={{ opacity: 1.0 }}
        animate={{ opacity: 1.0 }}
        transition={{ yoyo: Infinity, duration: 5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Loader;
