import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { useSelector,useDispatch } from "react-redux";
import { getAuth,signOut } from "firebase/auth";
const Avatars = () => {
  const [avatarEl, setAvatarEl] = useState(null);
  const [invisible, setInvisible] = useState(false);
  const [notifyEl, setNotifyEl] = useState(null);

  const handleAvatarClick = (e) => {
    setAvatarEl(e.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarEl(null);
  };

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const handleNotifyOpen = (e) => {
    setNotifyEl(e.currentTarget);
    if (!invisible) {
      handleBadgeVisibility();
    }
  };

  const handleNotifyClose = () => {
    setNotifyEl(null);
  };
  const authstatus  = useSelector (state => state.auth.status)

   const logout = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened
     console.log(error)
    });
   }

  const open = Boolean(avatarEl);
  const id = open ? "simple-popover" : undefined;

  const notifyOpen = Boolean(notifyEl);
  const notifyId = notifyOpen ? "simple-notify" : undefined;

  return (
    <div>
      <Stack
      className="max-md:!w-12  "
      direction="row" spacing={1} >

        {/* <Button aria-describedby={id}
        className=""
        onClick={handleNotifyOpen}>
          <Badge className="text-black "
            color="warning"
            overlap="circular"
            badgeContent="1"
            invisible={invisible}
            showZero={true}
          >
            <NotificationsIcon />
          </Badge>
        </Button> */}
        <Button
        aria-describedby={id} onClick={handleAvatarClick}>
       <div className="text-[1.2rem]   text-black ">
       <i className="fa-regular fa-user"></i>
       </div>
          {/* <KeyboardArrowDownIcon /> */}
        </Button>
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={avatarEl}
        onClose={handleAvatarClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
             <img
             className="h-10"
             src={localStorage.getItem('emialPhoto')} alt="" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <h1>{localStorage.getItem('name')}</h1>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <h1>{localStorage.getItem('email')}</h1>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemText primary="Log out" /> */}
              <button 
              onChange={logout}
              > logout</button>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>

      <Popover
        id={notifyId}
        open={notifyOpen}
        anchorEl={notifyEl}
        onClose={handleNotifyClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Avatar" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default Avatars;
