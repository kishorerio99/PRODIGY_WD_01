import React from "react";
import './header.css';
import { Link } from "react-router-dom";


function Header(){
    return(
       <div> 
        

        <ul className="navbar">
            <img src=" https://preview.colorlib.com/theme/eventz/assets/img/logo/logo.png.webp"/>
            
            <li><Link to="/"> HOME </Link></li>
            <li><Link to="/about"> ABOUT </Link></li>
            <li> SPEAKERS </li>
            <li> schedule </li>
            <li> BLOG </li>
            <li> CONTACT </li>
            <button> Get Your Ticket</button>
        </ul>
        

        
       </div>
    );
}

export default Header;