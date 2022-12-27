import Avatar from '@mui/material/Avatar';
import React from 'react';
import "./HeaderOption.css";

function HeaderOption ({Icon,avatar,title })  {
  return (
    <div className='headeroption'>
      {Icon && <Icon className="headeroption_icon" />}
      {avatar && < Avatar className="headeroption_avatar" src={avatar}/>}
      <h3 className='headeroption_title'>{title}</h3>

    </div>
  );
}
export default HeaderOption;