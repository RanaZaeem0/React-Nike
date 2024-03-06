import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

export default function Swiper1({img1,img2,img3,img4}) {
  let weth = window.innerWidth.valueOf(Boolean)

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
  

//   window.addEventListener("load" ,()=>{
// // alert("hi")
// console.log(weth);
// console.log(swpImg);
//  if(weth <= 786){
//   setSwpImg(1)
//   console.log("equal");
//  }

// })




  return (
    <Swiper
      //  onChange={weithChange}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={swpImg}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='pb-10 ml-12'>
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
