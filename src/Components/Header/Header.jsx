import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import {BsPersonCircle} from 'react-icons/bs'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import {connect} from 'react-redux'

const Header = ({hidden}) => {
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

    <li className="nav-item mobile">
      <CartIcon />
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
      <NavLink to='/contactUs' activeclassname="active" className="nav-links" onClick={closeMobileMenu}>contact</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to='/signIn-signUp' activeclassname="active" className="nav-links icons" onClick={closeMobileMenu}><BsPersonCircle /></NavLink>
     </li>
     <li className="nav-item">
      <CartIcon />
     </li>
    </ul>
   </nav>
   {hidden ? null : <CartDropdown />}
  </header>
 )
}

const mapStateToProps = ({cart: {hidden}}) => ({
  hidden
})

export default connect(mapStateToProps)(Header);