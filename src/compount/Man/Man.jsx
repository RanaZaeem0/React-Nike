import { useState,useEffect } from "react";
import index from "./index";
import Swiper6 from "../swipers/Swiper6"


export default function Man() {

let swp1Img1 = index.man4
let swp1Img2 = index.man5
let swp1Img3 = index.man6

let swp2Img1  =  index.man1
let swp2Img2  =  index.man2
let swp2Img3  =  index.man3






  const [view,setView] = useState(3.2)
    let [homeImg,setHomeImg] = useState(index.dHome)
  const [storeWeith,setstoreWeith] = useState(window.innerWidth)

  const detectSize = ()=>{
     setstoreWeith(window.innerWidth)
               if(window.innerWidth < 960){
                setHomeImg(index.mHome)
                setView(1.3)

               }else{
                setHomeImg(index.dHome)
                setView(3.2)
               }
 
    }
  useEffect(() => {
    window.addEventListener("resize", detectSize)
  
    return () => {
    window.removeEventListener("resize", detectSize)
      
    }
  }, [storeWeith])


  return (
    <>
      <div className="w-100%">
        <div
          className="w-100%  flex items-center
      justify-center"
        >
          <img className="w-[90%]" src={homeImg} alt="" />
        </div>
        <div className="w-100%  pb-10  text-center max-sm:pl-4">
          <h1 className="max-sm:text-start max-sm:w-3/4 text-6xl max-sm:text-4xl font-black">
            YOUR TRAIL GUIDE AWAITS
          </h1>
          <p className="pt-4 pb-4">
            Explore the outside world world in our latest trail running & hiking
            styles
          </p>
          <div className="flex max-sm:items-start w-100% items-center max-sm:justify-start justify-center">
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
        {
         storeWeith > 900 ?  
         <div className="w-100% flex items-center justify-evenly gap-10 ">
      
         <div className="pl-10">
           <img src={index.man4} alt="" />
           <h2 className="font-semibold text-xl">Clothing</h2>
         </div>
         <div className="">
           <img src={index.man5} alt="" />
           <h2 className="font-semibold text-xl">Shoes</h2>
 
         </div>
         <div className="pr-10">
           <img src={index.man6} alt="" />
           <h2 className="font-semibold text-xl">Accessories</h2>
 
         </div>
 
       </div>
         :         <Swiper6  view={view} img1={swp1Img1}  img2={swp1Img2}img3={swp1Img3}/>
        }
  


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
       
      </div>
      <h2
        className="
    p-10 font-semibold text-2xl cursor-pointer h-full"
      >
        More to Explore
      </h2>
      {storeWeith > 1000 ? 
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
      : 
      <Swiper6 view=
      {view}  img1={swp2Img1}
      img2={swp2Img2}
      img3={swp2Img3}/>
}
   
      <div className="w-100% pl-2">
        <h2 className="font-semibold text-[26px] p-10">Popular Right Now </h2>
        <index.Swiper4 view={view}/>
        <h2 className="font-semibold text-[26px] p-10">Member Benefits</h2>
        <index.Swiper5 view={view} />
      </div>
    </>
  );
}
