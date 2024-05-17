import index from "./index";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
export default function Home() {
  //  const [swiperview,setSwiperview] = useState('');

  //  const dispatch  =useDispatch()

  //  const viewChanger= ()=>{

  // dispatch(updatedview(swiperview))

  //  }
  let [view, setView] = useState(3.2);

  let img1 = index.swpImg1;
  let img2 = index.swpImg2;
  let img3 = index.swpImg3;
  let img4 = index.swpImg4;
  let img5 = index.swpImg5;
  let img6 = index.swpImg6;
  let img7 = index.swpImg7;
  let img8 = index.swpImg8;
  let img9 = index.swpImg9;
  let img10 = index.swpImg10;
  let img11 = index.swpImg11;
  let img12 = index.swpImg12;
  async function loadVideo() {
            
    try {
      const response = await (index.homeVideo)
      console.log(response);
      if(!response.ok){
      console.log("erroe in load");
      }
      return response;
    } catch (error) {
      console.log(`Errror loading data ${error}`)
      throw error;
    }
  }
 
  const navigate = useNavigate()
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
    window.addEventListener('DOMContentLoaded',detectSize)
    detectSize()
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  },[navigate,storeWeith]);

  // Observing changes to the root element (HTML element)

  return (
    <>
      <div className="w-100%  pt-4 flex flex-col items-center max-sm:items-center  ">
        <div className="w-11/12    flex items-center justify-center">
          {/* <img className={`h-full`} src={homemg} alt="" /> */}
          { storeWeith >900 ?  
        

            <video autoPlay loop muted className="h-full w-100%" src={index.homeVideo}></video>
            : <video autoPlay loop muted className="h-full w-100%"  src={index.hMobVi}></video>
          }
        </div>
        <div className="w-10/12 max-sm:text-start   h-[39vh] text-center max-sm:pl-4">
          <h1 className=" text-6xl max-sm:text-4xl  max-sm:text-start font-black">
            JORDAN EVERDAY STAPLES
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
      <div className="w-100%">
      <h2 className="font-black text-3xl pt-10 p-10 max-sm:p-3">Trending</h2>
        <index.Swiper1
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          view={view}
        />
      </div>
      <h1 className="text-3xl p-5 font-black max-sm:p-3 ">Featured</h1>
      <div className="w-100%   h-5/6  max-sm:gap-10 relative flex max-sm:flex-col  items-center justify-evenly">
        <div
          className="w-[48%]  
        max-sm:w-[100%] h-auto  relative "
        >
          <img className=" max-sm:w-100% w-100%  max-sm:h-80" src={index.hImg1} alt="" />
          <div
            className="flex flex-col
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="font-semibold">Feel the Unreal </h3>
            <h2 className="text-2xl font-semibold">Air Max Dn</h2>
            <div className="pt-6 pb-4">
              <button
                className="rounded-full    font-semibold  bg-black text-white
              p-2 pr-4 pl-4  mr-2 "
              >
                Get Notified
              </button>
              <button
                className="rounded-full font-semibold  bg-black text-white
             p-2 pr-4 pl-4 "
              >
                Find Your Max
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[48%] 
        max-sm:w-[95%]
        h-auto  relative "
        >
          <img className=" w-100%  max-sm:h-80" src={index.hImg2} alt="" />
          <div
            className="flex flex-col  
          items-start justify-end absolute pl-10   bottom-1 "
          >
            <h3 className="font-semibold">Nike Basketball</h3>
            <h2 className="text-2xl font-semibold">
              G.t. Cut 3 Sisterhood
              <h2 className="text-2xl font-semibold">& More New Releases</h2>
            </h2>
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

      <div className="w-100% ">
        <h2 className="font-black text-3xl p-10 max-sm:p-3">Always Iconic</h2>
       <NavLink to='products'> <index.Swiper2 view={view} /></NavLink>
        <h2 className="font-black text-[26px] p-10 max-sm:p-3 ">Shop by Sport </h2>
        <index.Swiper3
          view={view}
          img1={img5}
          img2={img6}
          img3={img7}
          img4={img8}
          img5={img9}
          img6={img10}
          img7={img12}
        />
        <h2 className="font-black text-[26px] p-10 max-sm:p-3">Popular Right Now </h2>
        <index.Swiper4 view={view} />
      </div>
      <div className="pt-12 pb-10 pl-1">
        <h2 className="font-black text-[26px] p-10 max-sm:p-3">Member Benefits</h2>
        <index.Swiper5 view={view} />
      </div>
    </>
  );
}
