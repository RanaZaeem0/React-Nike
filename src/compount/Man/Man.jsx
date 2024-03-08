import { useState } from "react";
import index from "./index";
import Siper6 from "../swipers/Siper6"
import { SwapCalls } from "@mui/icons-material";

export default function Man() {
  let [homemg, setHomeImg] = useState(index.dHome);
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      console.log("Window width changed:", entry.contentRect.width);
      if (entry.contentRect.width < 786) {
        setHomeImg(index.manImg);
      }
    }
  });

  observer.observe(document.documentElement);

  return (
    <>
      <div className="w-100%">
        <div
          className="w-100% pt-20 flex items-center
      justify-center"
        >
          <img className="w-[90%]" src={homemg} alt="" />
        </div>
        <div className="w-100%  pb-10  text-center max-sm:pl-4">
          <h1 className=" max-sm:w-3/4 text-6xl max-sm:text-4xl font-black">
            YOUR TRAIL GUIDE AWAITS
          </h1>
          <p className="pt-4 pb-4">
            Explore the outside world world in our latest trail running & hiking
            styles
          </p>
          <div className="flex max-sm:items-start w-100% items-center justify-center ">
            <button
              className="bg-black text-white 
            font-bold p-2 pr-4 pl-4 rounded-full mr-3 "
            >
              Shop Trail Running
            </button>
            <button
              className="bg-black text-white 
            font-bold p-2 pr-4 pl-4 rounded-full "
            >
              Shop Hiking
            </button>
          </div>
        </div>
      </div>
      <h2
          className="p-10
        text-2xl font-semibold"
        >
          Shop the Essentails{" "}
        </h2>
      {/* <div className="w-100% flex items-center justify-evenly gap-10 ">
      
        <div className="pl-10">
          <img src={index.es1} alt="" />
          <h2 className="font-semibold text-xl">Clothing</h2>
        </div>
        <div className="">
          <img src={index.es2} alt="" />
          <h2 className="font-semibold text-xl">Shoes</h2>

        </div>
        <div className="pr-10">
          <img src={index.es3} alt="" />
          <h2 className="font-semibold text-xl">Accessories</h2>

        </div>
<Siper6/>
      </div> */}
      {/* <Siper6/> */}

      <h1 className="text-3xl p-5 font-semibold ">Just In</h1>
      <div className="w-100%   relative flex max-sm:flex-col  items-center justify-evenly pb-10">
        <div
          className="w-[48%] 
        max-sm:w-[90%] h-3/4  relative "
        >
          <img className="max-sm:h-[100%] h-3/4" src={index.mbox2} alt="" />
          <div
            className="flex flex-col
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="font-semibold">Score Em While You Can </h3>
            <h2 className="text-2xl font-semibold">Nike Dunks</h2>
            <div className="pt-6">
              <button
                className="rounded-full    font-semibold  bg-black mb-7 text-white
              p-2 pr-4 pl-4  mr-2 "
              >
                Shop
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[48%] 
        max-sm:w-[90%]
        h-3/4  relative "
        >
          <img src={index.mbox1} alt="" />
          <div
            className="flex flex-col  
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="font-semibold">New Arrivals</h3>
            <h2 className="text-2xl font-semibold">jorden Essentails</h2>
            <div className="pt-6">
              <button
                className="rounded-full font-semibold  bg-black mb-7 text-white
          p-2 pr-4 pl-4 "
              >
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100% pl-2">
        {/* <index.Swiper2 /> */}
      </div>
      <h2
        className="
    p-10 font-semibold text-2xl cursor-pointer h-full"
      >
        More to Explore
      </h2>
      <div className=" flex items-center justify-evenly  gap-8 w-100% pb-10">
        <div className="pl-10 cursor-pointer ">
          <img className="" src={index.man1} alt="" />
          <h2 className="font-semibold text-xl">Air Force 107</h2>
          <h4 className="font-semibold pt-8 underline cursor-pointer">Shop</h4>
        </div>
        <div className=" cursor-pointer">
          <img className="" src={index.man2} alt="" />
          <h2 className="font-semibold text-xl">Workout Essenials </h2>
          <h4 className="font-semibold pt-8 underline cursor-pointer">Shop</h4>
        </div>
        <div className="pr-10 cursor-pointer">
          <img className="" src={index.man3} alt="" />
          <h2 className="font-semibold text-xl">Gear Up for Baseball</h2>
          <h4 className="font-semibold pt-8 underline cursor-pointer">Shop</h4>
        </div>
      </div>
      <div className="w-100% pl-2">
        <h2 className="font-semibold text-[26px] p-10">Popular Right Now </h2>
        {/* <index.Swiper4 /> */}
        <h2 className="font-semibold text-[26px] p-10">Member Benefits</h2>
        {/* <index.Swiper5 /> */}
      </div>
    </>
  );
}
