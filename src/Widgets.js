import React from 'react'
import './Widgets';
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <RadioButtonUncheckedIcon/>
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
        {newsArticle("TCS plans to hire over 1.25 lakh","10m ago - 5252 readers")}
        {newsArticle('coronavirus :india update',"30m ago - 8843 readers")}
        {newsArticle('Tesla hits new highs',"1h ago - 900 readers")}
        {newsArticle('Pharma market driven by price hikes',"3h ago - 3839 readers")}
        {newsArticle('mbappe did hat-trick in final',"5h ago -8829 readers")}
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"></img>
    </div>
  )
  
}

export default Widgets