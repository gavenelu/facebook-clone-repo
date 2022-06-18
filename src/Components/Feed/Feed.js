import React, { useEffect, useState } from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from '../../firebase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Feed() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const posts = collection(db, 'posts')
        const q = query(posts, orderBy('timestamp', 'desc'));
        const feedPost = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            }))
        });
        return feedPost;
    }, []);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    userName={post.data.userName}
                    image={post.data.image}
                />
            ))}
            {/* <Post
                profilePic="https://avatars.githubusercontent.com/u/34736527?v=4"
                message="Welcome to my facebook clone! It's from database"
                timestamp="2029.01.01"
                userName="gavene"
                image="https://i.pinimg.com/564x/7b/d5/e8/7bd5e8d8639a14907a36605895a9f47d.jpg"
            /> */}
        </div>
    )
}

export default Feed 