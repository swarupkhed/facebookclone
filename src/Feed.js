import React, { useEffect, useState } from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import im1 from "./Images/ziyad.jpg";
import im2 from "./Images/Saurabh.jpg";
import im3 from "./Images/rupesh.jpg";
import db from './firebase';

function Feed() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
         db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
             setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})));
         })
    },[]);

    console.log(posts);
    return (
        <div className="feed">
            {/* storyReel */}
            <StoryReel />
            {/* message sender  */}
            <MessageSender />
            {/* posts */}
            <div className="posts">
                {posts.map((pt)=>{
                        console.log(pt.data.username);
                        console.log(pt.data.profilePic);    
                        console.log(pt.data.timestamp);
                        console.log(pt.data.message);
                        
                  return    <Post 
                          key={pt.id} 
                          profilePic={pt.data.profilePic} 
                          Image={pt.data.image} 
                          username={pt.data.username}
                          timestamps={pt.data.timestamp}
                          message={pt.data.message}
                     />

                    })}
            {/* <Post
              key="123"
               profilePic={im1}
               Image="https://cdn.whatagraph.com/blog/facebook-post-analysis-WG.png"
               username="Ziyad Chiplunkar"
               timestamps="9:08PM"
               message="Here is sample Message"
            />
             <Post
               profilePic={im2}
               Image="https://blog.commlabindia.com/wp-content/uploads/2015/02/creating-storyline-templates-for-elearning-featured.gif"
               username="Saurabh Tambe"
               timestamps="9:08PM"
               message="Here is sample Message"
            />
             <Post
               profilePic={im1}
               Image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
               username="Rupesh Usare"
               timestamps="9:08PM"
               message="Here is sample Message"
            /> */}
            </div>
        </div>
    )
}

export default Feed;
