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
        <div className='swiper-content'>
        <Swiper
        speed={1000}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
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
      <img src={PNG1} alt="png1" />
      <h1>Experts in Assets Management</h1>
      <span>With years of experience and the talents on our team, 
      we make those returns from trading with technical 
      analysis in the stock market.</span>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
      <img src={PNG2} alt="png2" />
      <h1>Best Investment plans</h1>
      <span>At Colette Rocks, 
      we provide the best investment plans to grow wealth for our clients.
       We have the best services world wide.</span>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
      <img src={PNG3} alt="png3" />
      <h1>Registered and Insured</h1>
      <span>Colette Rocks is a fully registered company in Delaware USA.
       We are more than qualified to provide our clients with 50% return per annum.</span>
      </div>
      </SwiperSlide>
      
    </Swiper>
        </div>
    )
}
export default Carousel