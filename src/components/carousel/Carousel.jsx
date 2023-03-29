import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <Swiper
      speed={1000}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //     clickable:true,
      //     bulletClass:'swiper-bullet',
      //     bulletActiveClass:'swiper-bullet-active'
      // }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <h1>Experts in Assets Management</h1>
          <span>
            With years of experience and the talents on our team, we make those
            returns from trading with technical analysis in the stock market.
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Best Investment plans</h1>
          <span>
            At Blue Horizon, we provide the best investment plans to grow wealth
            for our clients. We have the best services world wide.
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Registered and Insured</h1>
          <span>
            Blue Horizon is a fully registered company in Delaware USA. We are
            more than qualified to provide our clients with 50% return per
            annum.
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
