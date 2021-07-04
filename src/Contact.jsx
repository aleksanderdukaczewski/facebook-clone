import React from 'react';
import "./Contact.css";
import { Avatar } from '@material-ui/core';

const Contact = props => {
    const { profileSrc, name } = props;
    return (
        <div className="contact">
            {profileSrc && <Avatar className="contact__avatar" src={profileSrc} />}
            <h4>{name}</h4>
        </div>
    );
};

export default Contact;
