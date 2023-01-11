import React from 'react'
import "./Sidebar.css";
import profile from "./profile image.jpg"
import background from "./backgroung_img.jpeg"
import { Avatar } from '@mui/material';
import Groups2Icon from '@mui/icons-material/Groups2';
function Sidebar() {
    const recentitem=(Topic)=> (
        <div className='sidebar_recentitem'>
            <span className='sidebar_hash'></span>
            <Groups2Icon className='group_icon'/>
            <p>{Topic}</p>

        </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebartop_main'>    
            <div className='sidebar_top'>
                <img src={background} alt=''/>
                <Avatar className='sidebar_avatar' src={profile}/>
                <h2>Mohamed Shoyab Mullani</h2>
                <h4>Student at DKTE Textile And Engineering Institute, Ichalkaranji</h4>
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
        </div>
        <div className='sidebar_b'> 
            <div className='sidebar_buttom'>
                <p>Recent</p>
                {recentitem(' front end developers')}
                {recentitem(' Developers community')}
                {recentitem(' HR Circle')}
                {recentitem(' Full Stack developers')}
                {recentitem(' devevlopers')}
            </div>
            <div className='sidebar_buttom_1'>
                <p>Groups</p>
                {recentitem(' Developers community')}
                {recentitem(' HR Circle')}
                {recentitem(' devevlopers')}

            </div>
        </div>  
    </div>
  )
}

export default Sidebar