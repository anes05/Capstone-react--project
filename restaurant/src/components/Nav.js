import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import Logo from './Assets/Logo.svg'
import LogoWhite from './Assets/logo-white.png'
import './Nav.css'


const Nav = () => {

  const [isMobile , setIsMobile] = useState(false);
  return (
  <nav className="navbar">
    <container className="nav">
     <img className="logo" src={Logo} alt="logo"/>
     <ul className = {isMobile ? 'nav-links-mobile' : 'nav-link'} onClick={ () =>setIsMobile(true)}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATION</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
     </ul>
     <div className="mobile">
     <img className="logo-white" src={LogoWhite} alt="logo-white"/>
     <button className ="mobile-menu-icon" onClick ={() => setIsMobile(!isMobile)}> { isMobile ? <ImCross  size={35}/> : <FaBars size={35}/>}</button>
     </div>
    </container> 
  </nav>
)};

export default Nav;