import React from "react";
import "./testimonial.scss";
import { motion } from "framer-motion";
import { MdLeaderboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <div id="testimonials" className="testimonial_main_container">
      <span className="testimonial_title">What Our Clients Think About Us</span>
      <div className="testimonial_container container_testimonials">
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: [-100, 0], opacity: 1 }}
          className="testimonial"
        >
          <p className="testimonial__text mb-25">
            I started investing in stocks and forex through this company, and
            I've seen tremendous growth in my portfolio. It's easy to use and
            provides great investment opportunities. Highly recommended!
          </p>

          <div className="testimonial__details">
            <div className="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Timmy Dicki"
                className="testimonial_image"
              />
            </div>
            <div className="testimonial__info">
              <h4 className="testimonial__name">Timmy Dicki</h4>
              <h5 className="testimonial__job">Railroad Engineer</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: [-100, 0], opacity: 1 }}
          className="testimonial"
        >
          <p className="testimonial__text mb-25">
            If you're serious about stocks and forex investment, look no
            further. This team offers a seamless trading experience and a wide
            range of investment options. I've been able to diversify my
            portfolio and boost my earnings significantly!
          </p>

          <div className="testimonial__details">
            <div className="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1583664426440-daef00e4ad6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Valerie King"
                className="testimonial_image"
              />
            </div>
            <div className="testimonial__info">
              <h4 className="testimonial__name">Valerie King</h4>
              <h5 className="testimonial__job">
                Customer Service Representative
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: [-100, 0], opacity: 1 }}
          className="testimonial"
        >
          <p className="testimonial__text mb-25">
            I'm impressed with the professionalism and expertise of this trading
            team. The platform is secure, and their support team is always
            available to address my queries. It's a reliable platform for both
            experienced and novice investors!
          </p>

          <div className="testimonial__details">
            <div className="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Terrell O'Keefe"
                className="testimonial_image"
              />
            </div>
            <div className="testimonial__info">
              <h4 className="testimonial__name">Terrell O'Keefe</h4>
              <h5 className="testimonial__job">Marketing Professional</h5>
            </div>
          </div>
        </motion.div>
      </div>
      <button
        onClick={() => navigate("/customers")}
        className="link_leaderboard"
      >
        See the leaderboard <MdLeaderboard />
      </button>
    </div>
  );
};

export default Testimonials;
