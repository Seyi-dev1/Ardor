import React from "react";
import "./whyus.scss";
import { BiSupport } from "react-icons/bi";
import { BsShieldLockFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrCloudSoftware } from "react-icons/gr";
import { motion } from "framer-motion";
const WhyUs = () => {
  return (
    <motion.div className="whyus" 
   initial={{ opacity: 0 }}
    viewport={{ once: true }}
    whileInView={{ y: [-70, 0], opacity: 1 }}>
      <span className="whyus_title">
        Benefits of Joining and Investing with Us
      </span>
      <div className="benefits">
        <div className="benefit">
          <GrCloudSoftware className="benefit_icon" />
          <div className="benefit_info">
            <span className="benefit_title">Seamless Experience</span>
            <span className="benefit_subtitle">
              Earning has never been this easy. Whether you are making payments
              or making payouts or you are simply checking up on your
              investments, navigating the platform is seamless and easy.
            </span>
          </div>
        </div>
        <div className="benefit">
          <BsShieldLockFill className="benefit_icon" />
          <div className="benefit_info">
            <span className="benefit_title">100% Secure Platform</span>
            <span className="benefit_subtitle">
              Using state-of-the art servers, we have guarded our servers with
              high-end SSL technology and the latest DDoS Guard to protect
              against attacks.
            </span>
          </div>
        </div>
        <div className="benefit">
          <BiSupport className="benefit_icon" />
          <div className="benefit_info">
            <span className="benefit_title">Experienced Support</span>
            <span className="benefit_subtitle">
              With trained and experienced support staffs, all your queries are
              just one click away from getting answered. Our support team
              provides 24/7 support and assistance to customers.
            </span>
          </div>
        </div>
        <div className="benefit">
          <RiSecurePaymentFill className="benefit_icon" />
          <div className="benefit_info">
            <span className="benefit_title">Multiple Payment Methods</span>
            <span className="benefit_subtitle">
              With an array of payment methods provided by the platform, you get
              multiple options to make payments and receive payouts.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
