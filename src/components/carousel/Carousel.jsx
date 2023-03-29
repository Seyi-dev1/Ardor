import './Carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper';
import PNG1 from '../../pngs/business-3d-bitcoin.png'
import PNG2 from '../../pngs/bloom-girl.png'
import PNG3 from '../../pngs/forex.png'

const Carousel = ()=>{
    return(
      
        <Swiper
        height={300}
        speed={1000}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable:true,
            bulletClass:'swiper-bullet',
            bulletActiveClass:'swiper-bullet-active'
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
    <SwiperSlide><h1>test1</h1></SwiperSlide>
    <SwiperSlide><h1>test2</h1></SwiperSlide>
    <SwiperSlide><h1>test1</h1></SwiperSlide>
    </Swiper>
    )
}
export default Carousel