import React from 'react'

export default function Box() {
  return (
    <div className="w-100%  h-[100vh] relative flex max-sm:flex-col  items-center justify-evenly">
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
  )
}
