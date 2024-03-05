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
import nav1 from "./nav.png";

import logo from "./logo.png";
import shadows from "@mui/material/styles/shadows";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
      <div className="w-100% flex  justify-between items-center bg-white h-10 ">
        <div className="">
          <img className="w-8 h-8" src={nav1} alt="" />
        </div>
        <div className="flex">
          <h2>Find a store |</h2>

          <h2>Help |</h2>
          <h2>Join us |</h2>
          <h2>Sign in</h2>
        </div>
      </div>
      <AppBar
        position=""
        className="
    shadow-indigo-500/40 "
      >
        <Container maxWidth="xl" className="bg-white">
          <Toolbar disableGutters>
            <img className="w-16 h-12 bg-white" src={logo} alt="" />
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
                className="w-5/6 flex items-center justify-center 
            
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
