import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
 const [click, setClick] = useState(false);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(!click);
 const handleChange = (e) => e.target.value;
 
 return (
  <header>
   <nav className="navbar">
    <Link to='/' className="navbar-logo">mamaput</Link>

    <div className="menu-icon" onClick={handleClick}>
     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    
    <div className="searchinput">
     <input 
      type="search" 
      name="search" placeholder=" Search 'Try Jollof'" className='search' 
      onChange={handleChange}
     />
    </div>

    <ul className={click ? "nav-menu active" : 'nav-menu'}>
     <li className="nav-item">
      <Link to='/foodmenu' className="nav-links" onClick={closeMobileMenu}>foodmenu</Link>
     </li>
     <li className="nav-item">
      <Link to='/orders' className="nav-links" onClick={closeMobileMenu}>order</Link>
     </li>
     <li className="nav-item">
      <Link to='/contactUs' className="nav-links" onClick={closeMobileMenu}>contact</Link>
     </li>
     <li className="nav-item">
      <Link to='/signIn-signUp' className="nav-links icons" onClick={closeMobileMenu}>person-icon</Link>
     </li>
     <li className="nav-item">
      <Link to='/history' className="nav-links icons" onClick={closeMobileMenu}>history</Link> 
     </li>
    </ul>
   </nav>
  </header>
 )
}

export default Header;