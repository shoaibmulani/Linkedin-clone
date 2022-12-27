import React from 'react';
import "./Header.css";
import profile from "./profile image.jpg"
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
function Header() {
  return (
    <div className='header' >
      <div className='header_left' >
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' alt='' />
        <div className='header_search' >
          <SearchIcon />
          <input type="text" />
        </div>

      </div>
      <div className='header_right' >
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar={profile} title="me" />
      </div>
    </div>
  );
}


export default Header;
