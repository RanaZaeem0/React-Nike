import homeImg from "./hImg/home.jpg";
import Button from "@mui/material/Button";
import Swiper1 from "../swipers/Swiper1";
import hImg1 from "./hImg/item1.jpg";
import hImg2 from "./hImg/item2.jpg";
import Swiper2 from "../swipers/Swiper2";
import swpImg1 from "../swipers/swp/swp1.jpg"
import swpImg2 from "../swipers/swp/swp2.jpg"
import swpImg4 from "../swipers/swp/swp3.jpg"
import swpImg3 from "../swipers/swp/swp4.png"
import swpImg5 from "../swipers/swp/nike-just-do-it (18).jpg"
import swpImg6 from "../swipers/swp/nike-just-do-it (19).jpg"
import swpImg7 from "../swipers/swp/nike-just-do-it (20).jpg"
import swpImg8 from "../swipers/swp/nike-just-do-it (21).jpg"
import swpImg9 from "../swipers/swp/nike-just-do-it (22).jpg"
import swpImg10 from "../swipers/swp/nike-just-do-it (23).jpg"
import swpImg11 from "../swipers/swp/nike-just-do-it (24).jpg"
import swpImg12 from "../swipers/swp/nike-just-do-it (25).jpg"

import Swiper3 from "../swipers/Swiper3";
import Swiper4 from "../swipers/Swiper4";
import mHome from "./hImg/m-home.jpg"
import { useState } from "react";
import Swiper5 from "../swipers/Swiper5";

export default function Home() {

  let img1 = swpImg1
  let img2 = swpImg2
  let img3 = swpImg3
  let img4 = swpImg4
  let img5 = swpImg5
  let img6 = swpImg6
  let img7 = swpImg7
  let img8 = swpImg8
  let img9 = swpImg9
  let img10 = swpImg10
  let img11 = swpImg11
  let img12 = swpImg12

  let [homemg,setHomeImg] = useState(homeImg)
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      console.log('Window width changed:', entry.contentRect.width);
      if(entry.contentRect.width < 786){
  setHomeImg(mHome)
    }
    }
  });
  
  observer.observe(document.documentElement); // Observing changes to the root element (HTML element)
  

  return (
    <>
      <div className="w-100% flex flex-col items-center max-sm:items-start  ">
        <div className="">
          <img  src={homemg} alt="" />
        </div>
        <div className="w-1/2  h-96 text-center max-sm:pl-4d:\web\Saylkani new\nike\nike\img\logo.png">
          <h1 className=" text-6xl max-sm:text-4xl font-black">JORDAN EVERDAY STAPLES</h1>
          <p className="pt-4 pb-4">
            Style and legacy come together in the latest collection
          </p>
          <button
            className="bg-black text-white 
          font-bold p-2 pr-4 pl-4 rounded-full "
          >
            Shop
          </button>
        </div>
      </div>
      <div className="w-100%">
        <Swiper1 img1={img1} img2={img2}
        img3={img3} img4={img4}/>
      </div>
      <h1 className="text-3xl p-5 font-semibold ">Featured</h1>
      <div className="w-100%  h-[100vh] max-sm:gap-10 relative flex max-sm:flex-col  items-center justify-evenly">
        <div className="w-[48%]  
        max-sm:w-[90%] h-3/4  relative ">
          <img className="max-sm:h-[100%]" src={hImg1} alt="" />
          <div
            className="flex flex-col
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="font-semibold">Feel the Unreal </h3>
            <h2 className="text-2xl font-semibold">Air Max Dn</h2>
            <div className="pt-6">
              <button className="rounded-full    font-semibold  bg-black text-white
              p-2 pr-4 pl-4  mr-2 " >Get Notified</button>
              <button className="rounded-full font-semibold  bg-black text-white
             p-2 pr-4 pl-4 ">Find Your Max</button>
            </div>
          </div>
        </div>
        <div className="w-[48%] 
        max-sm:w-[90%]
        h-3/4  relative ">
          <img src={hImg2} alt="" />
          <div
            className="flex flex-col  
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="font-semibold">Nike Basketball</h3>
            <h2 className="text-2xl font-semibold">G.t. Cut 3 Sisterhood 
             <h2 className="text-2xl font-semibold">& More New Releases</h2>
            </h2>
            <div className="pt-6">
              <button className="rounded-full font-semibold  bg-black text-white
          p-2 pr-4 pl-4 ">Shop</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100% ">
        <h2 className="font-semibold text-3xl p-10">Always Iconic</h2>
        <Swiper2/>
        <h2 className="font-semibold text-[26px] p-10">Shop by Sport </h2>
        <Swiper3 img1={img5} img2={img6}
        img3={img7} img4={img8} img5={img9} img6={img10} img7={img12}/>
                <h2 className="font-semibold text-[26px] p-10">Popular Right Now </h2>
                <Swiper4  />
      </div>
      <div className="pt-12 pb-10 pl-1">
      <h2 className="font-semibold text-[26px] p-10">Member Benefits</h2>
        <Swiper5/>
      </div>

    </>
  );
}
