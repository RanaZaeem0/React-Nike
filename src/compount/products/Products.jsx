import React, { useState } from 'react'
import imgs from "./index"
import { InputLabel,FormControl,Select, MenuItem,FormHelperText,NativeSelect, Hidden } from '@mui/material'


export default function Products() {

  let dataArry  =[ 
    {
      img: imgs.img1,
      shoesName: "nike Air",
      Category: "Big boy shoes",
      prices: "154$",
      color: "3"
      
    },
    {
      img: imgs.img2,
      shoesName: "adidas Boost",
      Category: "Running shoes",
      prices: "120$",
      color: "4"
    },
    {
      img: imgs.img3,
      shoesName: "Puma Thunder",
      Category: "Athletic shoes",
      prices: "99$",
      color: "7"
    },
    {
      img: imgs.img4,
      shoesName: "Reebok Classic",
      Category: "Casual shoes",
      prices: "80$",
      color: "5"
    },
    {
      img: imgs.img5,
      shoesName: "Under Armour HOVR",
      Category: "Basketball shoes",
      prices: "135$",
      color: "6"
    },
    {
      img: imgs.img6,
      shoesName: "New Balance 990",
      Category: "Sneakers",
      prices: "170$",
      color: "3"
    },
    {
      img: imgs.img7,
      shoesName: "Vans Old Skool",
      Category: "Skate shoes",
      prices: "65$",
      color: "8"
    },
    {
      img: imgs.img8,
      shoesName: "Converse Chuck Taylor",
      Category: "Canvas shoes",
      prices: "55$",
      color: "5"
    },
    {
      img: imgs.img9,
      shoesName: "Jordan Retro",
      Category: "Basketball shoes",
      prices: "200$",
      color: "7"
    },
   
    
  ]
  let [isOpen, setIsOpen] = useState(false);

  const handle  = ()=> setIsOpen(!isOpen)
  let dropDown = document.getElementById('dropDown-content')

  
  
  return (
    <>
    <div className="main flex">
  <div className="asideNav   w-[20%] border-1px bg-slate-500  pl-2 "> 
  <h2 className='text-1xl font-semibold'>Air Jorden Avalible (240)</h2>
  <div className="pt-3 pb-3">
   <h4 className='font-semibold text-[15px]'> Nike Air Max</h4>
   <h4 className='font-semibold text-[15px]'> jorden nike</h4>
   <h4 className='font-semibold text-[15px]'> Nike Air Max</h4>

   <div className="dropdown">
    <h4 className='cursor-pointer border-b  border-black pt-3' onClick={handle}>Gender</h4>
    {isOpen && (
        <div className="dropdown-content flex flex-col pl-1 border-b-[0.1rem] border-black">
        
        <a href="#">Male</a>
          <a href="#">Female</a>
        </div>
      )}
   </div>
   

  </div>


  


  </div>
  <div className="product  w-[80%] border-1px ">
    <div className="haed  w-[99%] flex items-end justify-end bg-slate-900 pr-[1%]">
  
  <h2 className='pr-5'>Short by </h2>
<h2>Hide Fillter</h2>
    </div>

    <div className="grid grid-cols-3 gap-5 justify-around">

      {
        dataArry.map((item,index) => {
          return (
          <div className=" border-red-700 w-[100%] " key={index}>
          <img src={item.img} alt="" className='w-[100%]' />
          <div className="text-content pl-2 text-black items-start font-semibold">
            <h2 className='fontsemi-bold text-[1rem]'>{item.shoesName}</h2>
            <h3 className='font-medium text-slate-700 text-[13px]'>{item.Category}</h3>
            <h3 className='font-medium text-slate-700 text-[13px]'> color {item.color}</h3>
           
            <h3 className='font-semibold '>{item.prices}</h3>
          </div>
        </div>
          
        )
        })
      }
    

    </div>


  </div>



    </div>
    


    
    </>
  )
}

// import React, { useState } from 'react';
// const Dropdown = ({ options, onSelect }) => {
//   const [selectedOption, setSelectedOption] = useState(options[0]);
// console.log(options, "options");
//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     console.log(option , "option");
//     onSelect(option);
//   };

//   const handleDropdown = ({options , onSelect})=>{
// const [selectedOption ,setSelectedOption] = useState(options[0]);
// // console.log();

//  const handle  = (option) => {
//   setSelectedOption(option);

//  }
//   }



//   return (
//     <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
//       {options.map((option) => (
        
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

// const Product = () => {
//   const handleDropdownChange = (option) => {
//     console.log("Selected option:", option);
//     // Do something with the selected option
//   };

//   return (
//     <div>
//       <h1>Multiple Dropdowns</h1>
//       <Dropdown options={['Option 1', 'Option 2', 'Option 3']} onSelect={handleDropdownChange} />
//       <Dropdown options={['Apple', 'Banana', 'Orange']} onSelect={handleDropdownChange} />
//       {/* Add more Dropdown components with different options as needed */}
//     </div>
//   );
// };

// export default Products;
