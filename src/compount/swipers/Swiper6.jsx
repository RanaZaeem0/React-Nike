import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Swiper1({view,img1,img2,img3}) {

 console.log(view);


  




  return (
    <Swiper
      //  onChange={weithChange}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={view}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className=''>
        <img src={img1} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      
      </SwiperSlide>
      <SwiperSlide className="" >
        <img src={img3} alt="" />
      </SwiperSlide>
 
    
    </Swiper>
  )
}
