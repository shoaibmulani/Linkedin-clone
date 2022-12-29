import React from 'react'
import './Widgets';
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon/>
            </div>

            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>

        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <InfoIcon/>

        </div>
        {newsArticle('its my first clone',"Top news - 9099 readers")}
        {newsArticle('coronavirus :india update',"Top news - 8843 readers")}
        {newsArticle('Tesla hits new highs',"cars & auto - 900 readers")}
        {newsArticle('Argentina wins the fifa world cup',"Top news - 3839 readers")}
        {newsArticle('mbappe did hat-trick in final',"Top news -8829 readers")}
    </div>
  )
}

export default Widgets