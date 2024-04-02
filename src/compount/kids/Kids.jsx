import React from "react";
import index from "./index.js";
import Swiper4 from "../swipers/Swiper4.jsx";
import { useState,useEffect } from "react";
import Swiper6 from "../swipers/Swiper6.jsx" 
import Swiper2 from "../swipers/Swiper2.jsx";

export default function Kids() {
  let [view, setView] = useState(3.2);

  let [homemg, setHomeImg] = useState(index.homeImg);
  const [storeWeith, setstoreWeith] = useState(window.innerWidth);

  const detectSize = () => {
    setstoreWeith(window.innerWidth);
    if (window.innerWidth < 960) {
      setHomeImg(index.mHome);
      setView(1.4);
    } else {
      setHomeImg(index.homeImg);
      setView(3.2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [storeWeith]);

  return (
    <>
      <div className="w-100% flex flex-col items-center max-sm:items-start   ">
        <div className="w-100% flex items-center justify-center">
          <img
            className={`
          `}
            src={index.dhome}
            alt=""
          />
        </div>
        <div className="w-10/12   h-56 text-center max-sm:pl-4">
          <h1 className=" text-7xl max-sm:text-5xl  max-sm:text-start font-black">
            AIR MAX DN
          </h1>
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
      <div className="w-100% items-center justify-center h-[1200px]">
        <div className="h-screen w-[95%] pl-[5%]  grid grid-cols-2 items-center justify-center  ">
          <div className="w-[98%]  relative  ">
            <img className="h-5/6" src={index.img1} alt="" />
            <div
            className="flex flex-col
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="text-2xl font-semibold">Big Kids </h3>
            <h2 className="text-1xl font-semibold">Explore apparel (XS_XL) and Shoes (3.5-7y) </h2>
            <div className="pt-6 pb-4">
             
              <button
                className="rounded-full font-semibold  bg-black text-white
             p-2 pr-4 pl-4 "
              >
               Shop
              </button>
            </div>
          </div>
          </div>

          <div className="h-full  relative">
            <img className="h-5/6 " src={index.img2} alt="" />
            <div
            className="flex flex-col 
          items-start justify-end absolute pl-10   bottom-28 "
          >
            <h3 className="text-2xl font-semibold">Babies and Toddleres</h3>
            <h2 className="text-1xl font-semibold">Explore apparel (OM-C) and Shoes (3-C) </h2>
            <div className="pt-6 pb-4">
             
              <button
                className="rounded-full font-semibold  bg-black text-white
             p-2 pr-4 pl-4 "
              >
               Shop
              </button>
            </div>
          </div>
          </div>

          <div className="w-[98%]  relative ">
            <img className="h-5/6" src={index.img3} alt="" />
            <div
            className="flex flex-col
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="text-2xl font-semibold">Little Kids </h3>
            <h2 className="text-1xl font-semibold">Explore apparel (4-7Y) and Shoes (10y) </h2>
            <div className="pt-6 pb-4">
             
              <button
                className="rounded-full font-semibold  bg-black text-white
             p-2 pr-4 pl-4 "
              >
               Shop
              </button>
            </div>
          </div>
          </div>

          <div className="w-100% h-[90vh] relative -top-16 ">
            <img className="h-11/12 " src={index.img4} alt="" />
            <div
            className="flex flex-col
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="text-2xl font-semibold">Extended Sizes </h3>
            <h2 className="text-1xl font-semibold">Explore apparel Shoes (XL+ ) </h2>
            <div className="pt-6 pb-4">
             
              <button
                className="rounded-full font-semibold  bg-black text-white
             p-2 pr-4 pl-4 "
              >
               Shop
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Forth swiper */}

   <h2 className="font-semibold text-[26px] p-10">Popular Right Now </h2>
      <Swiper4 view={view} />
      <h2
          className="p-10
        text-2xl font-semibold"
        >
          Shop the Essentails{" "}
        </h2>

        {
                   storeWeith > 900 ?  
                   <div className="w-100% flex items-center justify-evenly gap-10 ">
                
                   <div className="pl-10">
                     <img src={index.img5} alt="" />
                     <h2 className="font-semibold text-xl">Clothing</h2>
                   </div>
                   <div className="">
                     <img src={index.img5} alt="" />
                     <h2 className="font-semibold text-xl">Shoes</h2>
           
                   </div>
                   <div className="pr-10">
                     <img src={index.img6} alt="" />
                     <h2 className="font-semibold text-xl">Accessories</h2>
           
                   </div>
           
                 </div>
                   :         <Swiper6  view={view} img1={index.img5}  img2={index.img5}img3={index.img6}/>

        }

<h2 className="font-semibold text-3xl p-10">Always Iconic</h2>
        
        <Swiper2  view={view}/>
    </>
  );
}
