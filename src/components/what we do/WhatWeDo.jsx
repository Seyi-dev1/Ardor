import React from "react";
import "./what-we-do.scss";
import { RiStockFill } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";
import { motion } from "framer-motion";
const WhatWeDo = () => {
  return (
    <div className="whatwedo">
      <span className="whatwedo_title">What We Do</span>
      <div className="whatwedos">
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }} 
      className="whatwedo">
        <SiHiveBlockchain className="whatwedo_icon" />
        <div className="whatwedo_info">
          <span className="whatwedosmall_title">Blockchain Mining</span>
          <span className="whatwedo_subtitle">
          Join the revolution of decentralized transactions with our cutting-edge mining solutions. Maximize your earnings by mining popular cryptocurrencies like Bitcoin, Ethereum, and more. Our state-of-the-art mining infrastructure ensures optimal performance and efficiency, giving you a competitive edge in the ever-evolving blockchain industry.
          </span>
        </div>
      </motion.div>
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
      className="whatwedo">
        <RiStockFill className="whatwedo_icon" />
        <div className="whatwedo_info">
          <span className="whatwedosmall_title">Stocks and Forex Trading</span>
          <span className="whatwedo_subtitle">
          Explore the exciting realm of stocks and forex trading with our expert guidance and comprehensive tools. Take advantage of our advanced trading platform to access a wide range of financial instruments and seize profitable opportunities in global markets. Our experienced team will provide you with valuable insights and strategies to navigate the complexities of trading, helping you achieve your investment goals.
          </span>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default WhatWeDo;
