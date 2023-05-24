import React from "react";
import { useNavigate } from "react-router-dom";
import CButton from "../CButton/CButton";
import "./banner.scss";
import { motion } from "framer-motion";
import SERVER from './server.png'
import BLOCKCHAIN from './blockchain.png'
import LAPTOP from './laptopserver.png'
import { Swiper, SwiperSlide } from "swiper/react";
import {  A11y, Autoplay } from "swiper";
import "swiper/css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[A11y, Autoplay]}
        className="swiper"
        autoplay={{ delay: 10000}}
      >
      <SwiperSlide className="swiper_slide">
      <div className="banner">
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }} 
          className="banner_info">
        <span className="big">Get Started Today,</span>
        <span className="medium">
          Harness the power of blockchain technology and tap into the lucrative world of stocks and blockchain mining with Ardor Finances.
        </span>
        <span className="small">
          We are your gateway to profitable investments in digital and financial markets.
        </span>
        <CButton
          handleClick={() => navigate("/signup")}
          className="banner_btn"
          background="black"
          text="GET STARTED"
        />
      </motion.div>
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }} className="banner_image">
        <img src={LAPTOP} alt="bitcoin" className="bitcoin" />
      </motion.div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="swiper_slide">
      <div className="banner">
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }} 
          className="banner_info">
        <span className="big">24/7 Mine-athon</span>
        <span className="medium">
          We are fully committed to helping our clients reach their maximum financial potential and that's why our mining servers are working 24/7.
        </span>
        <span className="small">
          Our servers are maintained by top industry professionals.
        </span>
        <CButton
          handleClick={() => navigate("/signup")}
          className="banner_btn"
          background="black"
          text="GET STARTED"
        />
      </motion.div>
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }} className="banner_image">
        <img src={SERVER} alt="bitcoin" className="bitcoin" />
      </motion.div></div>
      </SwiperSlide>
      <SwiperSlide className="swiper_slide">
      <div className="banner">
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }} 
          className="banner_info">
        <span className="big">High Reliability</span>
        <span className="medium">
       Trusted by clients to deliver. We are constantly working hard to improve our security architecture and minimize possible risks.        </span>
        <span className="small">
          With Comodo Essential-SSL Security encryption, DDoS Protection and mitigation provider, we are rated among the top 5% in the industry.
        </span>
        <CButton
          handleClick={() => navigate("/signup")}
          className="banner_btn"
          background="black"
          text="GET STARTED"
        />
      </motion.div>
      <motion.div 
      initial={{ x: 0, opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }} className="banner_image">
        <img src={BLOCKCHAIN} alt="blockchain" className="bitcoin blockchain" />
      </motion.div></div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Banner;
