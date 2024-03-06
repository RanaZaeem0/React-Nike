import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

export default function Swiper3({img1,img2,img3,img4
,img5,img6,img7}) {

  let [swpImg,setSwpImg] = useState(3.2)
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
    className=' pb-10'
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
      <SwiperSlide className='pb-10 ml-12'>
        <img src={img1} alt="" />
        <h2 className='pl-6 text-xl font-semibold'>Basketball</h2>
      
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      <h2 className='pl-6 text-lg font-semibold'>Running</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      <h2 className='pl-6 text-lg font-semibold'>Training</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
        <h2 className='pl-6 text-lg font-semibold'>Soccer</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" />
        <h2 className='pl-6 text-lg font-semibold'>Golf</h2>
      </SwiperSlide>

    
      <SwiperSlide>
        <img src={img6} alt="" />
        <h2 className='pl-6 text-lg font-semibold'>Tennis</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} alt="" />
        <h2 className='pl-6 text-lg font-semibold'>Football</h2>
      </SwiperSlide>
    
    
    </Swiper>
  )
}
