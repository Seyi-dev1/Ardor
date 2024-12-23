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
import image4 from "../../Images/pexels-anna-nekrashevich-7552568.jpg";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={2000}
        effect="slide"
        className="swiper"
      >
        <SwiperSlide className="swiperSlide">
          <img src={image2} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="line"></div>
              <div className="heading">
                <h1>Award-winning Analytical Mining and Trading platform</h1>
              </div>
              <div className="desc">
                <p>
                  Tap into the world's best mining technology and explore
                  endless trading opportunities with tight spreads and no
                  commission.
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => navigate("/signup")}>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image4} alt="carousel" />
          <div className="swiperText">
            <div className="text">
              <div className="line"></div>
              <div className="heading">
                <h1>Rebranded Website for Improved Performance</h1>
              </div>
              <div className="desc">
                <p>
                  We are excited to introduce you to our newly rebranded
                  website, designed with you in mind. We have meticulously
                  revamped our online presence to offer an even better
                  experience.
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => navigate("/signup")}>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
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
                  lucrative world of mining and analytic trading with Fervor
                  Finance.
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
