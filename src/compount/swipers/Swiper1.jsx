import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

export default function Swiper1({img1,img2,img3,img4,view}) {

  // let [storeWeith,setstoreWeith] = useState(window.innerWidth)
  let storeWeith  = window.innerWidth







  return (
    <Swiper
      //  onChange={weithChange}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={view}
    
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='pb-10 ml-12 max-sm:ml-4 ' >
        <img src={img1} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
    
    </Swiper>
  )
}
