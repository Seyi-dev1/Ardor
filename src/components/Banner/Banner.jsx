import React from "react";
import { useNavigate } from "react-router-dom";
import "./banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import image1 from "../../Images/carousel1.jpg";
import image2 from "../../Images/carousel2.jpg";
import image3 from "../../Images/carousel3.jpg";
import { FaScroll } from "react-icons/fa";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={400}
        effect="fade"
        className="swiper"
      >
        <SwiperSlide className="swiperSlide">
          <img src={image1} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="line"></div>
              <div className="heading">
                <h1>Get Started Today</h1>
              </div>
              <div className="desc">
                <p>
                  Harness the power of analytic technology and tap into the
                  lucrative world of stocks and analytic trading with Thompson's
                  Central.
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => navigate("/signup")}>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image2} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="line"></div>
              <div className="heading">
                <h1>Award-winning Products and Trading platforms</h1>
              </div>
              <div className="desc">
                <p>
                  Tap into the world's best markets and explore endless trading
                  opportunities with tight spreads and no commission.
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => navigate("/signup")}>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image3} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="line"></div>
              <div className="heading">
                <h1>Multi-regulated Global Forex and Shares Broker</h1>
              </div>
              <div className="desc">
                <p>
                  A range of cutting-edge educational tools designed to develop
                  your trading skills of the financial markets.
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => navigate("/signup")}>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Banner;
