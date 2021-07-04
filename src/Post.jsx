import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = props => {
    const { profilePic, image, username, timestamp, message } = props;
    const date = new Date(timestamp * 1000);
    const dateStr = date.toLocaleTimeString();
    const timeStr = dateStr.slice(0,5) + " " + dateStr.slice(9,11);

    return (
        <div className="post">
            <div className="post__top">
                <Avatar 
                    src={profilePic} 
                    className="post__avatar"
                /> 
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timeStr}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Post;
