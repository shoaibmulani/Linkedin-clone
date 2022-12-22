import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header' >
      <div className='header_left' >
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' alt=''/>
        <div className='header_search' >
            <SearchIcon/>
            <input type="text"/>
      
        </div>
      
      </div>
      <div className='header_right' >
        <HeaderOption title="home"/>
        <HeaderOption title="My Network"/>
      
      </div>
    </div>
  )
}


export default Header
