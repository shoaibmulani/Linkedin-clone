import React from 'react';
import "./HeaderOption.css";

function HeaderOption(Icon,title ) {
  return (
    <div className='headeroption'>
        {Icon && <Icon className="headeroption_icon" />}
        <h3 className='headeroption_title'>{title}</h3>

    </div>
  );
}

export default HeaderOption