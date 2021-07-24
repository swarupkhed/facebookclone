import { Avatar } from '@material-ui/core';
import React from 'react';
import "./post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';;
function Post({profilePic,Image,username,timestamps,message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
               <div className="post_top_info">
                    <h3>{username}</h3>
                    {/* <p>{timestamps}</p> */}
                    <p>{new Date(timestamps?.toDate()).toUTCString()}</p>
               </div>
            </div>
            <div className="post_bottom">
                   <h4>{message}</h4>
            </div>
            <div className="post_image">
                <img src={Image} alt="" />
            </div>
            <div className="post_options">
                <div className="post_option">
                   <ThumbUpIcon />
                   <p>Like</p>
                </div>
                <div className="post_option">
                   <ChatBubbleOutlineIcon />
                   <p>Comment</p>
                </div>
                <div className="post_option">
                   <ShareIcon />
                   <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post;
