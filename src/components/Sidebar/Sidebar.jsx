import React, { useState } from "react";
import Logo from '../../assets/logo.png';
import './Sidebar.css';

const Sidebar = ()=>{
  const [largeView, setLargeView ] =  useState(true);
  const toggle = ()=> setLargeView(!largeView);
  return (
    <div className={largeView?'sidebar sidebarMaximize':'sidebar sidebarMinimize'}>
    <div className="head">
      <img src={Logo} alt=""/>
      <span >
        { largeView?
        <i onClick={toggle} className="fa-solid fa-arrow-left" />:
        <i onClick={toggle}  className="fa-solid fa-arrow-right"/>
        }
      </span>
    </div>
    <div className="middle">
      <ul className="list">
        <li>  <a href="/"><i className="fa-solid fa-house" />Home</a></li>
        <li> <a href="/search"><i className="fa-solid fa-search"/>Search</a></li>
        <li> <a href="/profile"><i className="fa-solid fa-user"/> Profile</a></li>
        <li> <a href="/history"><i className="fa-solid fa-history"/>Bookings</a></li>
      </ul>
    </div>
    <div className="down">
      <ul>
        <li> <a href="/settings"><i class="fa-solid fa-gear"/> Settings</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar;