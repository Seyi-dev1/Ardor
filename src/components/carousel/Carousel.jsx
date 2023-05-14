import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import SECURE from "../../Images/secure.png";
import BANK from "../../Images/bank.png";
import BANK2 from "../../Images/bank2.png";

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
          <img src={SECURE} alt="secure" />
          <h1>Security, Fidelity & Insurance</h1>
          <span>
            Providing peace of mind through secure transactions and
            comprehensive insurance options. Your trusted financial partner for
            all your needs.
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={BANK} alt="secure" />
          <h1>Super-fast Transactions</h1>
          <span>
            Experience lightning-fast banking with us! Our secure and reliable
            platform ensures quick transactions that fit your fast-paced
            lifestyle.
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={BANK2} alt="secure" />
          <h1>Automated Payments</h1>
          <span>
            Revolutionizing payments with cutting-edge automation technology.
            Your trusted partner for seamless, secure transactions.
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
