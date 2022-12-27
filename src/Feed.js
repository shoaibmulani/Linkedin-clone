import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css";

function Feed() {
  return (
    <div className='feed'>
        <div className='feed_inputcontainer'>
            <div className='feed_input'>
                <CreateIcon/>
                <form>
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>

        </div>


    </div>
  )
}

export default Feed