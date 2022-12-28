import { Avatar } from '@mui/material';
import React,{forwardRef} from 'react';
import InputOptions from './InputOptions';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Post.css'

const Post = forwardRef(({name,discription,message,Photourl},ref)=> {
  return (
    <div ref={ref} className='post'>
        <div className='post_header'>
            <Avatar/>
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_buttons'>
            <InputOptions Icon={ThumbUpOutlinedIcon} title="Like" color='gray' />
            <InputOptions Icon={ChatOutlinedIcon} title="Comment" color='gray' />
            <InputOptions Icon={ShareOutlinedIcon} title="Share" color='gray' />
            <InputOptions Icon={SendOutlinedIcon} title="Send" color='gray' />
        </div>
    </div>
  )
});

export default Post