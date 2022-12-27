import React from 'react'
import "./Sidebar.css";
import profile from "./profile image.jpg"
import background from "./backgroung_img.jpeg"
import { Avatar } from '@mui/material';
function Sidebar() {
    const recentitem=(Topic)=> (
        <div className='sidebar_recentitem'>
            <span className='sidebar_hash'></span>
            <p>{Topic}</p>

        </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src={background} alt=''/>
            <Avatar className='sidebar_avatar' src={profile}/>
            <h2>Mohamed Shoyab Mullani</h2>
            <h4>smulani121@gmail.com</h4>
        </div>
        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you </p>
                <p className='sidebar_statnumber'>37</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statnumber'>716</p>
            </div>
        </div>
        <div className='sidebar_buttom'>
            <p>Recent</p>
            {recentitem('#reactjs')}
            {recentitem('#programming')}
            {recentitem('#softwareengineering')}
            {recentitem('#design')}
            {recentitem('#devevloper')}
        </div>
    </div>
  )
}

export default Sidebar