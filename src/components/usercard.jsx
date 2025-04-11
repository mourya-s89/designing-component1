// write the component code here
// write the component code here
import React from 'react';
import './Usercard.css';

const Usercard = () => {
  const profilePhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s'; 
  const name = 'kadali mourya';
  const email = 'kadali.mourya.s89@kalvium.community';
  const phoneNumber = '+91 1234567890';
  const address = '1234 Galaxy St, Milky Way, Earth';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">Email: {email}</p>
      <p className="user-phone">Phone: {phoneNumber}</p>
      <p className="user-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;