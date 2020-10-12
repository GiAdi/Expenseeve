import React from 'react';
import '../styles/navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navElement" onClick={()=>props.changeTab('home')}>
          Home
      </div>
      <div className="navElement" onClick={()=>props.changeTab('settings')}>
          Settings
      </div>
      <div className="navElement" onClick={()=>props.changeTab('profile')}>
          Profile
      </div>
    </div>
  );
}

export default Navbar;
