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



  let sp1data = [ 
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    },
    {
      img: img4
    },
  ]




  return (
    <Swiper
      //  onChange={weithChange}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={view}
      className='pb-10 !pl-2 max-sm:ml-4'
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        sp1data.map((item,index) =>{
          index 
          return <SwiperSlide
          key={index}
          className=''
          >
          <img
          className='h-[64vh]'
           src={item.img} alt="" />
        </SwiperSlide>
        })
      }

      {/* <SwiperSlide className='pb-10 ml-12 max-sm:ml-4 ' >
        <img  className='h-[62vh]'  src={img1} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img  className='h-[62vh]' src={img2} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[62vh]'  src={img3} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[62vh]'  src={img4} alt="" />
      </SwiperSlide> */}
    
    </Swiper>
  )
}
