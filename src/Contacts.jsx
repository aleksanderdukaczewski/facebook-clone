import React from 'react';
import "./Contacts.css";
import Contact from './Contact';

const Contacts = () => {
    return (
        <div className="contacts">
            <h4>Contacts</h4>
            <Contact name="Peter" profileSrc="https://image.shutterstock.com/mosaic_250/2780032/1714666150/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg" />
            <Contact name="Jessica" profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphAbq94anCiggoj1vunoslO_ubuk8O-vTblv9shnqk9OzEH_Bz6UcFQwWgSmpmhqwFD0&usqp=CAU" />
            <Contact name="Mustafa" profileSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        </div>
    );
};

export default Contacts;
