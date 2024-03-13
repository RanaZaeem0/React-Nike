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
import { NavLink, Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";


import { styled, alpha } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';



import nav1 from "./nav.png";


import logo from "./logo.png";
import shadows from "@mui/material/styles/shadows";
import { InputBase, Paper } from "@mui/material";
import { useEffect } from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  
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
useEffect(()=>{
if(weith < 900){
setNavPostion("")
}else{
  setNavPostion("fixed")
}

},[weith])
useEffect(()=>{
  
})


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

  return (
    <>
      <div className=" w-100% flex max-sm:hidden  justify-between items-center bg-white h-10 ">
        <div className=" pl-10" >
          <img className="w-8 h-8 " src={nav1} alt="" />
        </div>
        <div className="flex pr-10">
          <h4 className="text-sm font-semibold">Find a store | &nbsp;</h4>

          <h4  className="text-sm font-semibold"> Help |&nbsp; </h4>
          <h4  className="text-sm font-semibold"> Join us | &nbsp;</h4>
          <h4  className="text-sm font-semibold"> Sign in</h4>
        </div>
      </div>
      <AppBar
        position={navPostion}
        className="
    shadow-indigo-500/40 "
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
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `block py-2 pr-9 pl-6 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-6 `
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="new"
                  className={({ isActive }) =>
                    `block py-2 pr-9 pl-6 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-6 `
                  }
                >
                  New & Featured
                </NavLink>
                <NavLink
                  to="man"
                  className={({ isActive }) =>
                    `block py-2 pr-9 pl-9 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                  }
                >
                  Man
                </NavLink>
                <NavLink
                  to="woman"
                  className={({ isActive }) =>
                    `block py-2 pr-9 pl-9 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                  }
                >
                  Woman
                </NavLink>
                <NavLink
                  to="kids"
                  className={({ isActive }) =>
                    `block py-2 pr-9 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                  }
                >
                  Kids
                </NavLink>
                <NavLink
                  to="sale"
                  className={({ isActive }) =>
                    `block py-2 pr-9 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                  }
                >
                  Sale
                </NavLink>
              </nav>
            </Box>
            <Paper className="!rounded-3xl  max-sm:!pl-0 !pl-5  !bg-gray-200 !shadow-none ">
              <a href=""><i className="fa-solid fa-magnifying-glass"></i> </a>
          { 
       
        
            <InputBase
            className="w-0"
             placeholder="Search .."
             >
              {/* <IconButton className="bg-red-900"></IconButton> */}
               {/* <SearchIcon/> */}
            </InputBase>}
           </Paper>
           <NavLink className=" ">

           <a className="text-black pl-4 pr-2 text-lg ">
          <i className="fa-regular fa-heart"></i>
          </a>
          <a href="" className="text-black pl-4 pr-2 text-lg ">
          <i className="fa-solid fa-bag-shopping"></i>
          </a>
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
                  <NavLink
                    to="/"
                    onClick={handleCloseNavMenu}
                    className={({ isActive }) =>
                      `block py-2 pr-9 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="woman"
                    onClick={handleCloseNavMenu}
                    className={({ isActive }) =>
                      `block py-2 pr-9 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                    }
                  >
                    Woman
                  </NavLink>
                  <NavLink
                    onClick={handleCloseNavMenu}
                    to="man"
                    className={({ isActive }) =>
                      `block py-2 pr-9 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                    }
                  >
                    Man
                  </NavLink>
                  <NavLink
                    onClick={handleCloseNavMenu}
                    to="new"
                    className={({ isActive }) =>
                      `block py-2 pr-9 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold lg:pl-4`
                    }
                  >
                    New In
                  </NavLink>
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
