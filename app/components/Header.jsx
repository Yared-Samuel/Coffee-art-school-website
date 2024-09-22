import Image from 'next/image'
import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import './header.css'

const Header = () => {
  return (
    <header>
    
    <div className="title-container">
      <h1 className="title-main"><span>BZN <sup>M</sup></span> School of Barista And Baking</h1>
    </div>
    <button className="navbar-icon" ><IoMdMenu size={40} color="white"/></button>
    <nav>  
 
  <ul>
    <li>Home</li>
    <li>Contact Us</li>
    <li>About Us</li>
  </ul>
  
 </nav> 
  </header>
  )
}

export default Header