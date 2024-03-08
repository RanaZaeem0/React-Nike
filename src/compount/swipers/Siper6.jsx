import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import es1  from "./swp/man (3).jpg"
import es2  from "./swp/man (4).jpg"
import es3  from "./swp/man (2).jpg"


export default function Swiper1() {

 


  




  return (
    <Swiper
      //  onChange={weithChange}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3.2}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className=''>
        <img src={es1} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={es2} alt="" />
      
      </SwiperSlide>
      <SwiperSlide className="" >
        <img src={es3} alt="" />
      </SwiperSlide>
 
    
    </Swiper>
  )
}
