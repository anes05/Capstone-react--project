import React from 'react';
import Logo from './Assets/Logo.svg'

const Nav = () => {
  return ( 
    <>
     <img src={Logo} alt="Little Limon Restaurant"/>
     <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order online</a></li>
        <li><a href="#">Login</a></li>
     </ul>
    </> 
)};

export default Nav;