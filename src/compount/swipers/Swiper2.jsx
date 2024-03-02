import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import swpImg5 from "./swp/swp5.jpg"
import swpImg6 from "./swp/swp6.jpg"
import swpImg7 from "./swp/swp7.jpg"
import swpImg8 from "./swp/swp8.jpg"
import swpImg9 from "./swp/swp9.jpg"
import swpImg11 from "./swp/swp11.jpg"








export default function Swiper2() {
  return (
    <Swiper
    className='cursor-pointer'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={swpImg8} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg7} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg5} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg6} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg9} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg11} alt="" />
      
      </SwiperSlide>
      
    </Swiper>
  )
}
