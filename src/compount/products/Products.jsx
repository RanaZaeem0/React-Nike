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
    },
    {
      img: imgs.img2,
      shoesName: "adidas Boost",
      Category: "Running shoes",
      prices: "120$",
      color: "4",
    },
    {
      img: imgs.img3,
      shoesName: "Puma Thunder",
      Category: "Athletic shoes",
      prices: "99$",
      color: "7",
    },
    {
      img: imgs.img4,
      shoesName: "Reebok Classic",
      Category: "Casual shoes",
      prices: "80$",
      color: "5",
    },
    {
      img: imgs.img5,
      shoesName: "Under Armour HOVR",
      Category: "Basketball shoes",
      prices: "135$",
      color: "6",
    },
    {
      img: imgs.img6,
      shoesName: "New Balance 990",
      Category: "Sneakers",
      prices: "170$",
      color: "3",
    },
    {
      img: imgs.img7,
      shoesName: "Vans Old Skool",
      Category: "Skate shoes",
      prices: "65$",
      color: "8",
    },
    {
      img: imgs.img8,
      shoesName: "Converse Chuck Taylor",
      Category: "Canvas shoes",
      prices: "55$",
      color: "5",
    },
    {
      img: imgs.img9,
      shoesName: "Jordan Retro",
      Category: "Basketball shoes",
      prices: "200$",
      color: "7",
    },
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

  const handleDropdownChange = (option) => {
    console.log("Selected option:", option);
    setPrices(option);
    // if (option == 1) {

    //   setPrices(1);
    // } else if (option == 2) {
    //   setPrices(2);
    // } else if (option == 3) {
    //   setPrices(3);
    // }
    // Do something with the selected option
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
                onSelect={handleDropdownChange}
              />
              <Dropdown
                options={["Kids", "boys", "Girls"]}
                onSelect={handleDropdownChange}
              />
              <Dropdown
                options={["shop by price", "30 - 100$", "100$ - 150$", "150$+"]}
                onSelect={handleDropdownChange}
              />
              <Dropdown
                options={["Collections", "Air Force 1", "Air Max", "NikeDunk"]}
                onSelect={handleDropdownChange}
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
            {dataArry.map((item, index) => {
              if (prices == "shop by price") {
                let price = Number(item.prices.replace("$", ""));
                const showPrice = price
                if (showPrice) {
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
                }
              }
              if (prices == "30 - 100$") {
                let price = Number(item.prices.replace("$", ""));
                const showPrice = price >= 30 && price <= 100;
                if (showPrice) {
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
                }
              }
              if (prices == "100$ - 150$") {
                let price = Number(item.prices.replace("$", ""));
                const showPrice = price >= 100 && price <= 150;
                if (showPrice) {
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
                }
              }
              if (prices ==  "150$+") {
                let price = Number(item.prices.replace("$", ""));
                const showPrice = price >  150;
                if (showPrice) {
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
                }
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
