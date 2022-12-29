import React, { useEffect, useState } from 'react';
import InputOptions from './InputOptions';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ImageIcon from '@mui/icons-material/Image';
import "./Feed.css";
import Post from './Post';
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import { Avatar } from '@mui/material';
import profile from "./profile image.jpg"




function Feed() {
    const [input, setInput] = useState("");

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);
    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: "Mohamed Shoyab Mubin Mullai",
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };
    return (
        <div className='feed'>
            <div className='feed_inputcontainer'>
                <div className='feed_container'>
                    <Avatar src={profile}/>
                    <div className='feed_input'>
                    
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                </div>
                
                <div className='feed_inputoptions'>
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOptions Icon={SmartDisplayIcon} title='Video' color='#4caf50' />
                    <InputOptions Icon={InsertInvitationIcon} title='Event' color='#a13800' />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#e53935' />

                </div>
            </div>
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}

                />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed