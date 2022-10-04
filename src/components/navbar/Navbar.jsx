import React from "react";
import './navbar.css'

export const Navbar = () => {
  return <div className="top">
<div className="topLeft">
<i className="socialIcon fa-brands fa-square-facebook"></i>
<i className="socialIcon fa-brands fa-square-twitter"></i>
<i className="socialIcon fa-brands fa-square-instagram"></i>
</div> 
<div className="topCenter">
    <ul className="navItemList">
    <li className="navItem">HOME</li>
    <li className="navItem">ABOUT</li>
    <li className="navItem">EVENTS</li>
    <li className="navItem">CONTACT</li>
    <li className="navItem">WRITE</li>
    <li className="navItem">LOGOUT</li>

    </ul>
</div> 
<div className="topRight">
    <img className="topImg" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-on-transparent-vector-id1313958250?k=20&m=1313958250&s=612x612&w=0&h=vCvfwHB-pUpqWoB7wT2ifkKEL1qa5lhxxUPLIsgER00=" alt="" />
    <i className="searchIcon fa-solid fa-magnifying-glass"></i>
</div> 

  </div>;
};
