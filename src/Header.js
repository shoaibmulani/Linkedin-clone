import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header' >
      <h1>this is header</h1>
      <div className='header_left' >
        <img src='' alt=''/>
        <div className='header_search' >
            <SearchIcon/>
            <input type="text"/>
      
        </div>
      
      </div>
      <div className='header_right' >
      
      </div>
    </div>
  )
}

export default Header
