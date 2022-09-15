import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import {BsPersonCircle} from 'react-icons/bs'
import {GiHotMeal} from 'react-icons/gi'

const Header = () => {
 const [click, setClick] = useState(false);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(!click);
 const handleChange = (e) => e.target.value;
 
 return (
  <header>
   <nav className="navbar">
    <NavLink to='/' className="navbar-logo" onClick={closeMobileMenu}>mamaput</NavLink>

    <div className="menu-icon" onClick={handleClick}>
     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>

    <li className="nav-item">
      <NavLink to='/cart'  className="nav-mobile-links icons"><GiHotMeal /></NavLink> 
     </li>
    
    <div className="searchinput">
     <input 
      type="search" 
      name="search" placeholder=" Search 'Try Jollof'" className='search' 
      onChange={handleChange}
     />
    </div>

    <ul className={click ? "nav-menu active" : 'nav-menu'}>
     <li className="nav-item">
      <NavLink to='/foodmenu' activeclassname="active" className="nav-links" onClick={closeMobileMenu}>foodmenu</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to='/orders' activeclassname="active" className="nav-links" onClick={closeMobileMenu}>order</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to='/contactUs' activeclassname="active" className="nav-links" onClick={closeMobileMenu}>contact</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to='/signIn-signUp' activeclassname="active" className="nav-links icons" onClick={closeMobileMenu}><BsPersonCircle /></NavLink>
     </li>
     <li className="nav-item">
      <NavLink to='/cart' activeclassname="active" className="nav-links icons" onClick={closeMobileMenu}><GiHotMeal /></NavLink> 
     </li>
    </ul>
   </nav>
  </header>
 )
}

export default Header;