import React from 'react';
import Logo from './Assets/Logo.svg'
import './Nav.css'

const Nav = () => {
  return ( 
    <container className="nav">
     <img src={Logo} alt="Little Limon Restaurant"/>
     <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order online</a></li>
        <li><a href="#">Login</a></li>
     </ul>
    </container> 
)};

export default Nav;