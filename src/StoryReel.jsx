import React, { useState } from 'react'
import Story from './Story';
import './StoryReel.css';
import { createClient } from 'pexels';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://images.pexels.com/photos/5391353/pexels-photo-5391353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/6b/Sundar_Pichai_WEF_2020.png"
                title="Emilio"
            />
            <Story 
                image="https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg"
                profileSrc="https://storage.needpix.com/rsynced_images/profile-1719207_1280.jpg"
                title="Peter"
            />
            <Story 
                image="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://images.unsplash.com/photo-1583691919795-b66ab8cb40c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                title="Julia"
            />
            <Story 
                image="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvbmRvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                profileSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Lauryn"
            />
            <Story 
                image="https://media.istockphoto.com/photos/fuji-japan-in-spring-picture-id876560704?k=6&m=876560704&s=612x612&w=0&h=j13atWUJ3K80QxeuSekt1QkOQ2ezARfmFzFRF6IPgsI="
                profileSrc="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
                title="Emilia"
            />
        </div>
    );
}

export default StoryReel;
