import React, { useState } from "react";
import imgs from "./index";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  NativeSelect,
  Hidden,
} from "@mui/material";

export default function Products() {
  let dataArry = [
    {
      img: imgs.img1,
      shoesName: "nike Air",
      Category: "Big boy shoes",
      prices: "154$",
      color: "3",
      gender: "Male"
    },
    {
      img: imgs.img2,
      shoesName: "adidas Boost",
      Category: "Running shoes",
      prices: "120$",
      color: "4",
      gender: "Female"
    },
    {
      img: imgs.img3,
      shoesName: "Puma Thunder",
      Category: "Athletic shoes",
      prices: "99$",
      color: "7",
      gender: "Male"
    },
    {
      img: imgs.img4,
      shoesName: "Reebok Classic",
      Category: "Casual shoes",
      prices: "80$",
      color: "5",
      gender: "Female"
    },
    {
      img: imgs.img5,
      shoesName: "Under Armour HOVR",
      Category: "Basketball shoes",
      prices: "135$",
      color: "6",
      gender: "Male"
    },
    {
      img: imgs.img6,
      shoesName: "New Balance 990",
      Category: "Sneakers",
      prices: "170$",
      color: "3",
      gender: "Female"
    },
    {
      img: imgs.img7,
      shoesName: "Vans Old Skool",
      Category: "Skate shoes",
      prices: "65$",
      color: "8",
      gender: "Male"
    },
    {
      img: imgs.img8,
      shoesName: "Converse Chuck Taylor",
      Category: "Canvas shoes",
      prices: "55$",
      color: "5",
      gender: "Female"
    },
    {
      img: imgs.img9,
      shoesName: "Jordan Retro",
      Category: "Basketball shoes",
      prices: "200$",
      color: "7",
      gender: "Male"
    }
  ];
  
  let [isOpen, setIsOpen] = useState(false);

  const handle = () => setIsOpen(!isOpen);
  let dropDown = document.getElementById("dropDown-content");

  const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    // console.log(options, "options");
    const handleSelect = (option) => {
      setSelectedOption(option);
      // console.log(option , "option");
      onSelect(option);
    };

    const handleDropdown = ({ options, onSelect }) => {
      const [selectedOption, setSelectedOption] = useState(options[0]);
      // console.log();

      const handle = (option) => {
        setSelectedOption(option);
      };
    };

    return (
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {options.map((option, index) => (
          
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  const [prices, setPrices] = useState("shop by price");
  const [gender ,setGender] = useState('gender')
  const [collection,setCollection] = useState('')  
  const [ageOption,setAgeOption] = useState('')  

  
  const handleGenderChange = (option)=>{
    console.log(option);
      setGender(option)
   console.log('gender', option);
    }
    const handleCollection = (option)=>{
      console.log(option);
      setCollection(option)
    }
    const handlePriceChange =(option)=>{
      console.log(option);
  setPrices(option)
    }
    const handleAgeChange =(option)=>{
      console.log(option);
      setAgeOption(option)
    }

const filterData = ()=>{

return dataArry.filter(item =>{
  (gender.length == 5 ||gender.includes(item.gender))&&
  (prices.length === 0 || prices.includes(item.gender))
})
}

const filterDataArry = filterData()

  const handleDropdownChange = (option) => {
    console.log("Selected option:", option);

  };
  return (
    <>
      <div className="main flex">
        <div className="asideNav   w-[20%] border-1px bg-white  pl-2 ">
          <h2 className="text-1xl font-semibold">Air Jorden Avalible (240)</h2>
          <div className="pt-3 pb-3">
            <h4 className="font-semibold text-[15px]"> Nike Air Max</h4>
            <h4 className="font-semibold text-[15px]"> jorden nike</h4>
            <h4 className="font-semibold text-[15px]"> Nike Air Max</h4>

            <div className="flex flex-col gap-y-6 pt-5">
              <Dropdown
                options={["Gender", "Male", "Female"]}
                onSelect={handleGenderChange}
              />
              <Dropdown
                options={["Kids", "boys", "Girls"]}
                onSelect={handleAgeChange}
              />
              <Dropdown
                options={["shop by price", "30 - 100$", "100$ - 150$", "150$+"]}
                onSelect={handlePriceChange}
              />
              <Dropdown
                options={["Collections", "Air Force 1", "Air Max", "NikeDunk"]}
                onSelect={handleCollection}
              />

              {/* Add more Dropdown components with different options as needed */}
            </div>
          </div>
        </div>
        <div className="product  w-[80%] border-1px ">
          <div className="haed  w-[99%] flex items-end justify-end bg-slate-900 pr-[1%]">
            <h2 className="pr-5">Short by </h2>
            <h2>Hide Fillter</h2>
          </div>

          <div className="grid grid-cols-3 gap-5 justify-around">
            {
              
              filterDataArry.map((item,index)=>{
                return (
                  <div className=" border-red-700 w-[100%] " key={index}>
                    <img src={item.img} alt="" className="w-[100%]" />
                    <div className="text-content pl-2 text-black items-start font-semibold">
                      <h2 className="fontsemi-bold text-[1rem]">
                        {item.shoesName}
                      </h2>
                      <h3 className="font-medium text-slate-700 text-[13px]">
                        {item.Category}
                      </h3>
                      <h3 className="font-medium text-slate-700 text-[13px]">
                        {" "}
                        color {item.color}
                      </h3>

                      <h3 className="font-semibold ">{item.prices}</h3>
                    </div>
                  </div>
                );
              })
            // dataArry.map((item, index) => {
            //   if (prices == "shop by price") {
            //     let price = Number(item.prices.replace("$", ""));
            //     const showPrice = price
            //     if (showPrice) {
            //       return (
            //         <div className=" border-red-700 w-[100%] " key={index}>
            //           <img src={item.img} alt="" className="w-[100%]" />
            //           <div className="text-content pl-2 text-black items-start font-semibold">
            //             <h2 className="fontsemi-bold text-[1rem]">
            //               {item.shoesName}
            //             </h2>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {item.Category}
            //             </h3>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {" "}
            //               color {item.color}
            //             </h3>

            //             <h3 className="font-semibold ">{item.prices}</h3>
            //           </div>
            //         </div>
            //       );
            //     }
            //   }
            //   if (prices == "30 - 100$") {
            //     let price = Number(item.prices.replace("$", ""));
            //     const showPrice = price >= 30 && price <= 100;
            //     const gender = item.gender = "male"
                
            //     if (showPrice || gender) {
            //       return (
            //         <div className=" border-red-700 w-[100%] " key={index}>
            //           <img src={item.img} alt="" className="w-[100%]" />
            //           <div className="text-content pl-2 text-black items-start font-semibold">
            //             <h2 className="fontsemi-bold text-[1rem]">
            //               {item.shoesName}
            //             </h2>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {item.Category}
            //             </h3>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {" "}
            //               color {item.color}
            //             </h3>

            //             <h3 className="font-semibold ">{item.prices}</h3>
            //           </div>
            //         </div>
            //       );
            //     }
            //   }
            //   if (prices == "100$ - 150$") {
            //     let price = Number(item.prices.replace("$", ""));
            //     const showPrice = price >= 100 && price <= 150;
            //     if (showPrice) {
            //       return (
            //         <div className=" border-red-700 w-[100%] " key={index}>
            //           <img src={item.img} alt="" className="w-[100%]" />
            //           <div className="text-content pl-2 text-black items-start font-semibold">
            //             <h2 className="fontsemi-bold text-[1rem]">
            //               {item.shoesName}
            //             </h2>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {item.Category}
            //             </h3>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {" "}
            //               color {item.color}
            //             </h3>

            //             <h3 className="font-semibold ">{item.prices}</h3>
            //           </div>
            //         </div>
            //       );
            //     }
            //   }
            //   if (prices ==  "150$+") {
            //     let price = Number(item.prices.replace("$", ""));
            //     const showPrice = price >  150;
            //     if (showPrice) {
            //       return (
            //         <div className=" border-red-700 w-[100%] " key={index}>
            //           <img src={item.img} alt="" className="w-[100%]" />
            //           <div className="text-content pl-2 text-black items-start font-semibold">
            //             <h2 className="fontsemi-bold text-[1rem]">
            //               {item.shoesName}
            //             </h2>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {item.Category}
            //             </h3>
            //             <h3 className="font-medium text-slate-700 text-[13px]">
            //               {" "}
            //               color {item.color}
            //             </h3>

            //             <h3 className="font-semibold ">{item.prices}</h3>
            //           </div>
            //         </div>
            //       );
            //     }
            //   }
            // })
            
            }
          </div>
        </div>
      </div>
    </>
  );
}


// import React, { useState } from 'react';
// import { Container, Box, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from '@mui/material';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const categories = ['Big boy shoes', 'Running shoes', 'Athletic shoes', 'Casual shoes', 'Basketball shoes', 'Sneakers', 'Skate shoes', 'Canvas shoes'];
// const colors = ['3', '4', '5', '6', '7', '8'];
// const genders = ['male', 'female'];

// let dataArry = [
//   { img: 'img1', shoesName: "nike Air", Category: "Big boy shoes", prices: "154$", color: "3", gender: "male" },
//   { img: 'img2', shoesName: "adidas Boost", Category: "Running shoes", prices: "120$", color: "4", gender: "female" },
//   { img: 'img3', shoesName: "Puma Thunder", Category: "Athletic shoes", prices: "99$", color: "7", gender: "male" },
//   { img: 'img4', shoesName: "Reebok Classic", Category: "Casual shoes", prices: "80$", color: "5", gender: "female" },
//   { img: 'img5', shoesName: "Under Armour HOVR", Category: "Basketball shoes", prices: "135$", color: "6", gender: "male" },
//   { img: 'img6', shoesName: "New Balance 990", Category: "Sneakers", prices: "170$", color: "3", gender: "female" },
//   { img: 'img7', shoesName: "Vans Old Skool", Category: "Skate shoes", prices: "65$", color: "8", gender: "male" },
//   { img: 'img8', shoesName: "Converse Chuck Taylor", Category: "Canvas shoes", prices: "55$", color: "5", gender: "female" },
//   { img: 'img9', shoesName: "Jordan Retro", Category: "Basketball shoes", prices: "200$", color: "7", gender: "male" }
// ];

// function Products() {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedGenders, setSelectedGenders] = useState([]);

//   const handleCategoryChange = (event) => {
//     setSelectedCategories(event.target.value);
//   };

//   const handleColorChange = (event) => {
//     setSelectedColors(event.target.value);
//   };

//   const handleGenderChange = (event) => {
//     setSelectedGenders(event.target.value);
//   };

//   const filterData = () => {
//     return dataArry.filter(item => 
//       (selectedCategories.length === 0 || selectedCategories.includes(item.Category)) &&
//       (selectedColors.length === 0 || selectedColors.includes(item.color)) &&
//       (selectedGenders.length === 0 || selectedGenders.includes(item.gender))
//     );
//   };

//   const filteredData = filterData();

//   return (
//     <Container>
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Filter Dashboard
//         </Typography>

//         <Box my={2}>
//           <FormControl fullWidth>
//             <InputLabel>Category</InputLabel>
//             <Select
//               multiple
//               value={selectedCategories}
//               onChange={handleCategoryChange}
//               input={<OutlinedInput label="Category" />}
//               renderValue={(selected) => selected.join(', ')}
//               MenuProps={MenuProps}
//             >
//               {categories.map((category) => (
//                 <MenuItem key={category} value={category}>
//                   <Checkbox checked={selectedCategories.indexOf(category) > -1} />
//                   <ListItemText primary={category} />
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         <Box my={2}>
//           <FormControl fullWidth>
//             <InputLabel>Color</InputLabel>
//             <Select
//               multiple
//               value={selectedColors}
//               onChange={handleColorChange}
//               input={<OutlinedInput label="Color" />}
//               renderValue={(selected) => selected.join(', ')}
//               MenuProps={MenuProps}
//             >
//               {colors.map((color) => (
//                 <MenuItem key={color} value={color}>
//                   <Checkbox checked={selectedColors.indexOf(color) > -1} />
//                   <ListItemText primary={color} />
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         <Box my={2}>
//           <FormControl fullWidth>
//             <InputLabel>Gender</InputLabel>
//             <Select
//               multiple
//               value={selectedGenders}
//               onChange={handleGenderChange}
//               input={<OutlinedInput label="Gender" />}
//               renderValue={(selected) => selected.join(', ')}
//               MenuProps={MenuProps}
//             >
//               {genders.map((gender) => (
//                 <MenuItem key={gender} value={gender}>
//                   <Checkbox checked={selectedGenders.indexOf(gender) > -1} />
//                   <ListItemText primary={gender} />
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         <Box my={4}>
//           <Typography variant="h6">Filtered Data</Typography>
//           <ul>
//             {filteredData.map((item, index) => (
//               <li key={index}>
//                 {`Shoes Name: ${item.shoesName}, Category: ${item.Category}, Price: ${item.prices}, Color: ${item.color}, Gender: ${item.gender}`}
//               </li>
//             ))}
//           </ul>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Products;
