import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvide';
import firebase from "firebase";
import db from './firebase';

function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const [input,setInput]=useState(""); 
    const [imageUrl,setImageUrl]=useState(""); 
    const handleSubmit=(e)=>{
        e.preventDefault();
        //some clever db stuff
        db.collection("posts").add({
            profilePic : user.photoURL, 
            image : imageUrl ,
            username: user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            message : input
        })
       // Reset value
       setInput("");
       setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender_Top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                    
                        value={input}
                        onChange={(e)=>setInput(e.target.value)} 
                        className="messageSender_Input" 
                        placeholder={`What's on your Mind  ${user.displayName} ?`}
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)} 
                        className="messageSender_url"
                        placeholder="image URL (Optional)"
                     />
                    <button onClick={handleSubmit}type="submit" hidden >
                        Hidden button
                    </button>
                </form>
            </div>
            <div className="messageSender_Bottom">
                 <div className="messageSender_option">
                     <VideocamIcon style={{color:"red"}} />
                     <h3>Live Video</h3>
                 </div>
                 <div className="messageSender_option">
                     <PhotoLibraryIcon style={{color:"green"}} />
                     <h3>Photo/Video</h3>
                 </div>
                   <div className="messageSender_option">
                     <InsertEmoticonIcon style={{color:"orange"}} />
                     <h3>Feeling/Activity</h3>
                 </div>
            </div>
        </div>
    )
}

export default MessageSender;
