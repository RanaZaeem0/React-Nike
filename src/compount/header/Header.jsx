import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { NavLink, Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import shopingicon from "./shopping.svg" 

import { styled, alpha } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';


import { useState } from "react";
import nav1 from "./nav.png";


import logo from "./logo.png";
import shadows from "@mui/material/styles/shadows";
import { InputBase, Paper } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Avatars from "./Avatars";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const [profile ,setProfile] = React.useState(true)




  let [inputWeith,setInputWeith] = React.useState(0)



function handleEnterInputWeith(weith){

setInputWeith(weith)
console.log("enter");
console.log(weith);
}
function handleLeaveInputWeith(weith){
  setInputWeith(weith)
  console.log("leaver");
}
let [navPostion,setNavPostion]= React.useState("fixed")
let [weith,setWeith] = React.useState(window.innerHeight)

function handleWieth(){
  setWeith(window.innerWidth)
}
const navigate =  useNavigate()
useEffect(()=>{
if(weith < 900){
setNavPostion("")
}else{
  setNavPostion("fixed")
}

},[weith,navigate])



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const authSelector = useSelector((data)=> data.auth.userData)

  const [openprofile ,setOpenProfile] = useState(false)
 

  const authStatus = useSelector((state)=> state.auth.status)
  const navItem = [
   
    {
      name:"Home"
      ,slug:"/",
      authstatus: true
    },
    {
      name:"Kids"
      ,slug:"/kids",
      authstatus: true
    },
    {
      name:"Man"
      ,slug:"/man",
      authstatus: true
    },
    {
      name:"Woman"
      ,slug:"/woman",
      authstatus: true
    },
  
   
    {
      name:"Login"
      ,slug:"/login",
      authstatus:!authStatus
    }
  ]

  return (
    <>
      <div className=" w-100% flex max-sm:hidden  justify-between items-center bg-slate-100 h-10 ">
        <div className=" pl-10 max-sm:pl-0" >
          <img className="w-8 h-8 " src={nav1} alt="" />
        </div>
        <div className="flex pr-10 cursor-pointer">
          <h4 className="text-sm font-semibold">Find a store | &nbsp;</h4>

          <h4  className="text-sm font-semibold"> Help |&nbsp; </h4>
          <h4  className="text-sm font-semibold"> Join us | &nbsp;</h4>
         { authStatus ?
           <NavLink  to='logout' className="text-sm font-semibold"> 
            <h4  className="text-sm font-semibold">logout &nbsp;</h4>
           &nbsp;</NavLink >
          :   <NavLink  to='logout' className="text-sm font-semibold"> sign in | &nbsp;</NavLink >

         }
        </div>
      </div>
      <AppBar
        position={navPostion}
        className="
     shadow-none "
      >
        <Container maxWidth="xl" className="bg-white">
          <Toolbar disableGutters>
            <img className="w-18 h-14 bg-white" src={logo} alt="" />
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <nav
                className="w-4/5  flex items-end justify-end
            
            "
              >
          
                {/* <NavLink
  to='/signup'
     className={({ isActive }) =>
        `block py-2 pr-9 pl-6 duration-200 ${
       isActive ? "text-orange-700" : "text-gray-700"
           } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-6 `
                  }
                >
                signup
                </NavLink>
                <NavLink
  to='/login'
     className={({ isActive }) =>
        `block py-2 pr-9 pl-6 duration-200 ${
       isActive ? "text-orange-700" : "text-gray-700"
           } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-6 `
                  }
                >
                login
                </NavLink> */}
{
  navItem.map((item,index) =>(
    item.authstatus ? <NavLink
    key={index}
     to={item.slug}

     className={({ isActive }) =>
        `block py-2 pr-9 pl-6 duration-200 ${
       isActive ? "text-orange-700" : "text-gray-700"
           } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-6 `
                  }
                >
                  {item.name}
                </NavLink>: null
  ))
}
             
              </nav>
            </Box>
            <Paper className="!rounded-3xl
            text-[1.2rem]  max-sm:!pl-0 !pl-5  !bg-gray-200 max-md:!bg-white !shadow-none flex items-center justify-center ">
              <div href=""><i className="fa-solid fa-magnifying-glass"></i> </div>
          { 
       
        
            <InputBase
            className="w-19 max-sm:w-0"
             placeholder="Search .."
             >
              {/* <IconButton className="bg-red-900"></IconButton> */}
               {/* <SearchIcon/> */}
            </InputBase>}
           </Paper>
           <NavLink className="flex items-center justify-center">

           <div className="text-black max-md:hidden pl-4 pr-2 max-md:pl-1 text-xl ">
          <i className="fa-regular fa-heart"></i>
          </div>
          <a href="" className="text-black pl-4 max-md:pr-0 max-md:pl-5  text-xl ">
          <img
          className="
          h-5
          "
          src={shopingicon} alt="" />
          </a>
          { authStatus ? 

        
          <Avatars/>
           : 
           null
            
          }
       
           </NavLink>
      

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "black", md: "none" },
                }}
              >
                <nav
                  className="w-52 h-18 
                flex items-start px-5 flex-col"
                >
            {
  navItem.map((item,index) =>(
    item.authstatus ? <NavLink
    key={index}
     to={item.slug}

     className={({ isActive }) =>
        `block py-2 pr-9 pl-6 duration-200 ${
       isActive ? "text-orange-700" : "text-gray-700"
           } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-6 `
                  }
                >
                  {item.name}
                </NavLink>: null
  ))
}
                </nav>
              </Menu>
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;