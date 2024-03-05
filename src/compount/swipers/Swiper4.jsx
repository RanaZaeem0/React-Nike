import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import swpImg2 from "./swp/swp4 (1).png"
import swpImg3 from "./swp/swp4 (2).png"
import swpImg6 from "./swp/swp4 (3).png"
import swpImg1 from "./swp/swp4 (8).png"
import swpImg9 from "./swp/swp4 (5).png"
import swpImg11 from "./swp/swp4 (6).png"
import swpImg12 from "./swp/swp4 (7).png"
import { useState } from 'react';








export default function Swiper4() {
  let [swpImg,setSwpImg] = useState(3)
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      console.log('Window width changed:', entry.contentRect.width);
      if(entry.contentRect.width < 786){
  setSwpImg(1.5)
    }
    }
  });
  
  observer.observe(document.documentElement); // Observing changes to the root element (HTML element)
  return (
    <Swiper
    className=' cursor-pointer'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={swpImg}
      
      navigation
    //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='pb-10'>
        <img src={swpImg1} alt="" />
        <div className="pl-1">
        <h2 className='font-semibold'>Nike Dunk Low Retro</h2>
        <h3 className='text-slate-400'>Mens Shoes</h3>
        <h2 className='font-semibold'>$115</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg2} alt="" />
        <div className="pl-1">
        <h2 className='font-semibold'>Air Jorden % Retro Lucy Green</h2>
        <h3 className='text-slate-400'>Womans Shoes</h3>
        <h2 className='font-semibold'>$210</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg3} alt="" />
        <div className="pl-1">
        <h2 className='font-semibold'>Sabrina 1 BKYLNs Finest</h2>
        <h3 className='text-slate-400'>Basketball Shoes</h3>
        <h2 className='font-semibold'>$115</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg6} alt="" />
        <div className="pl-1">
        <h2 className='font-semibold'>Nike Zoom Vomero 5</h2>
        <h3 className='text-slate-400'>Mens Shoes</h3>
        <h2 className='font-semibold'>$155</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg9} alt="" />
        <div className="pl-1">
        <h2 className='font-semibold'>Nike V2K Run</h2>
        <h3 className='text-slate-400'> Shoes</h3>
        <h2 className='font-semibold'>$110</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg11} alt="" />
        <div className="pl-1">
        <h2 className='font-semibold'>Nike Air Mac Plus Drift</h2>
        <h3 className='text-slate-400'>Mens Shoes</h3>
        <h2 className='font-semibold'>$185</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swpImg12} alt="" />
        <div className="pl-1">
        <h2 className='font-semibold'>Nike Jorden 9 G</h2>
        <h3 className='text-slate-400'>Golf Shoes</h3>
        <h2 className='font-semibold'>$185</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
