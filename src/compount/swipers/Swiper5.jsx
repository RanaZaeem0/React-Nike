import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import img1 from "./swp/nike-just-do-it (8).jpg";
import img2 from "./swp/nike-just-do-it (9).jpg";
import img3 from "./swp/nike-just-do-it (10).jpg";
import img4 from "./swp/nike-just-do-it (11).jpg";
import img5 from "./swp/nike-just-do-it (28).jpg";
import img6 from "./swp/nike-just-do-it (12).jpg";
import img7 from "./swp/nike-just-do-it (13).jpg";

export default function Swiper5() {
  let [swpImg, setSwpImg] = useState(3.2);
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      console.log("Window width changed:", entry.contentRect.width);
      if (entry.contentRect.width < 786) {
        setSwpImg(1.5);
      }
    }
  });

  observer.observe(document.documentElement); // Observing changes to the root element (HTML element)

  return (
    <Swiper
      className="mb-10  "
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={swpImg}
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="ml-12">
        <img src={img1} alt="" />
        <div
          className=" absolute  text-white bottom-2
pl-4"
        >
          <h3 className="font-semibold">The Best of Nike </h3>
          <h2 className="text-2xl font-semibold pb-8">
            Your Exclusive Access
          </h2>
          <button
            className="
    bg-white mb-5 text-black rounded-3xl p-2
    font-semibold  mb-5"
          >
            Sign up
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
        <div
          className=" absolute  text-white bottom-2
pl-4"
        >
          <h3 className="font-semibold">Member Product </h3>
          <h2 className="text-2xl font-semibold pb-8">
            Your Exclusive Access
          </h2>
          <button
            className="
    bg-white mb-5 text-black rounded-3xl p-2
    font-semibold "
          >
           Shop
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
        <div
          className=" absolute  text-white bottom-2
pl-4"
        >
          <h3 className="font-semibold">The Best of Nike </h3>
          <h2 className="text-2xl font-semibold pb-8">
            Your Exclusive Access
          </h2>
          <button
            className="
    bg-white mb-5 text-black rounded-3xl p-2
    font-semibold "
          >
           Celebrate
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
        <div
          className=" absolute  text-white bottom-2
pl-4"
        >
          <h3 className="font-semibold">The Best of Nike </h3>
          <h2 className="text-2xl font-semibold pb-8">
            Your Exclusive Access
          </h2>
          <button
            className="
    bg-white mb-5 text-black rounded-3xl p-2
    font-semibold "
          >
           Move
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={img5} alt="" />
        <div
          className=" absolute  text-white bottom-2
pl-4"
        >
          <h3 className="font-semibold">The Best of Nike </h3>
          <h2 className="text-2xl font-semibold pb-8">
            Your Exclusive Access
          </h2>
          <button
            className="
    bg-white mb-5 text-black rounded-3xl p-2
    font-semibold "
          >
           Customize
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="" />
        <div
          className=" absolute  text-white bottom-2
pl-4"
        >
          <h3 className="font-semibold">The Best of Nike </h3>
          <h2 className="text-2xl font-semibold pb-8">
            Your Exclusive Access
          </h2>
          <button
            className="
    bg-white mb-5 text-black rounded-3xl p-2
    font-semibold "
          >
Explore          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} alt="" />
        <div
          className=" absolute  text-white bottom-2
pl-4"
        >
          <h3 className="font-semibold">The Best of Nike </h3>
          <h2 className="text-2xl font-semibold pb-8">
            Your Exclusive Access
          </h2>
          <button
            className="
    bg-white mb-5 text-black rounded-3xl p-2
    font-semibold "
          >
            Add interests
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
