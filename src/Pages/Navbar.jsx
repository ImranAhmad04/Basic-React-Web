import React from 'react'
import logo from "./img/emruz.jpg"
export default function Navbar() {
  const alt = "its not suppoted"
  return (
    <div>
        <ul className='Navbar'>
          <div className="nav">
          <img className='logo' src={logo} alt={alt}/>
            <li className='nav-item'><a className='Link' href="#Home">Home</a></li>
            <li className='nav-item'><a className='Link' href="#About">About Us</a></li>
            <li className='nav-item'><a className='Link' href="#Projects">Our Projects</a></li>
            <li className='nav-item'><a className='Link' href="#Client">Client Review</a></li>
            <li className='nav-item'><a className='Link' href="#Footer">Footer</a></li>
          </div>
         </ul>
        </div>
  )
}
