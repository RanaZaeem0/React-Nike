import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import imgs from "./index";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  "Big boy shoes",
  "Running shoes",
  "Athletic shoes",
  "Casual shoes",
  "Basketball shoes",
  "Sneakers",
  "Skate shoes",
  "Canvas shoes",
];
const prices = ["30-100$", "100-150$", "150$+"];

const colors = ["red", "white", "black"];
const genders = ["Male", "Female"];

let dataArry = [
  {
    img: imgs.img1,
    shoesName: "nike Air",
    Category: "Big boy shoes",
    prices: "154$",
    priceFilter: "150$+",
    totalColor: "3",
    color: "red",
    gender: "Male",
  },
  {
    img: imgs.img2,
    shoesName: "adidas Boost",
    Category: "Running shoes",
    prices: "120$",
    priceFilter: "100-150$",
    totalColor: "4",
    gender: "Female",
    color: "white",
  },
  {
    img: imgs.img3,
    shoesName: "Puma Thunder",
    Category: "Athletic shoes",
    prices: "99$",
    priceFilter: "30-100$",
    color: "white",
    totalColor: "7",
    gender: "Male",
  },
  {
    img: imgs.img4,
    shoesName: "Reebok Classic",
    Category: "Casual shoes",
    priceFilter: "30-100$",
    color: "white",
    prices: "80$",
    totalColor: "5",
    gender: "Female",
  },
  {
    img: imgs.img5,
    shoesName: "Under Armour HOVR",
    Category: "Basketball shoes",
    prices: "135$",
    color: "white",
    totalColor: "6",
    gender: "Male",
  },
  {
    img: imgs.img6,
    shoesName: "New Balance 990",
    Category: "Sneakers",
    prices: "170$",
    color: "red",
    priceFilter: "100-150$",
    totalColor: "3",
    gender: "Female",
  },
  {
    img: imgs.img7,
    shoesName: "Vans Old Skool",
    Category: "Skate shoes",
    prices: "65$",
    priceFilter: "30-100$",
    totalColor: "8",
    gender: "Male",
  },
  {
    img: imgs.img8,
    shoesName: "Converse Chuck Taylor",
    Category: "Canvas shoes",
    color: "black",
    prices: "30-100$",
    priceFilter: "1",
    totalColor: "5",
    gender: "Female",
  },
  {
    img: imgs.img9,
    shoesName: "Jordan Retro",
    priceFilter: "150$+",
    Category: "Basketball shoes",
    color: "black",
    prices: "200$",
    totalColor: "7",
    gender: "Male",
  },
];

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [filterStyle, setFilterStyle] = useState(false);

  const [filterDetails, setFilterDetails] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors(color);
    // if(selectedColors.length > 0){
    //   setFilterDetails((prev)=>([...prev ,color]) )
    //   console.log(filterDetails)
    // }
  };

  const handleGenderChange = (event) => {
    setSelectedGenders(event.target.value);
  };
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    console.log(event.target.value);
  };
  const handleFilter = () => {
    setFilterStyle(!filterStyle);
  };

  const filterData = () => {
    return dataArry.filter(
      (item) =>
        (selectedPrice.length === 0 ||
          selectedPrice.includes(item.priceFilter)) &&
        (selectedColors.length === 0 || selectedColors.includes(item.color)) &&
        (selectedGenders.length === 0 || selectedGenders.includes(item.gender))
    );
  };

  const filteredData = filterData();

  return (
    <Container className="">
    
      <div className="flex items-center justify-between w-full mt-8 text-2xl
      ">
       <h1 className="flex items-center "> / 
        <h1 className="font-semibold text-1xl">{
       `${selectedColors}  ${selectedGenders} ${ selectedPrice}`
        }</h1></h1>
          <h1
        onClick={handleFilter}
        className={` text-center max-2xl:hidden 
       max-md:block max-sm:block
        items-center  justify-end mr-8  gap-1 text-1xl font-semibold  cursor-pointer`}
      >
        Filter<i className="pl-3 fa-solid fa-list-check"></i>
      </h1>
        </div>
      <Box my={4} className="flex">
        <div
          className={` ${
            filterStyle
              ? " max-lg:w-[32%] max-md:w-[97%]  z-10 max-md:absolute max-lg:h-screen border-1px  bg-white  pr-5"
              : "max-md:hidden  max-md:w-[27%]  pr-4  w-[20%] "
          } `}
        >
          <Box my={2}>
            <div className="flex flex-col mt-2">
              <h2 className="text-1xl font-semibold">
                Air Jorden Avalible (240)
              </h2>

              <h4 className="font-semibold text-[15px]"> Nike Air Max</h4>
              <h4 className="font-semibold text-[15px]"> jorden nike</h4>
              <h4 className="font-semibold text-[15px]"> Nike Air Max</h4>
            </div>
            <FormControl fullWidth>
              <InputLabel>Shop by Price</InputLabel>
              <Select
                multiple
                value={selectedPrice}
                onChange={handlePriceChange}
                input={<OutlinedInput label="Shop by Price" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {prices.map((price) => (
                  <MenuItem key={price} value={price}>
                    <Checkbox checked={selectedPrice.indexOf(price) > -1} />
                    <ListItemText primary={price} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box my={2} className="border-none">
            <FormControl fullWidth className="border-none">
              <InputLabel>Color</InputLabel>
              <Select
                multiple
                value={selectedColors}
                onChange={handleColorChange}
                input={<OutlinedInput label="Color" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {colors.map((color) => (
                  <MenuItem key={color} value={color}>
                    <Checkbox checked={selectedColors.indexOf(color) > -1} />
                    <ListItemText primary={color} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box my={2}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                multiple
                value={selectedGenders}
                onChange={handleGenderChange}
                input={<OutlinedInput label="Gender" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    <Checkbox checked={selectedGenders.indexOf(gender) > -1} />
                    <ListItemText primary={gender} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="product max-lg:w-full  w-[80%] max-md:w-full border-1px">
          <Box my={4}>
            <Typography variant="h6">Best Collection</Typography>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-5 justify-around">
              {filteredData.map((item, index) => {
                return (
                  <div
                    className=" border-red-700 w-[100%]  cursor-pointer"
                    key={index}
                  >
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
              })}
            </div>
          </Box>
        </div>
      </Box>
    </Container>
  );
}

export default Products;
