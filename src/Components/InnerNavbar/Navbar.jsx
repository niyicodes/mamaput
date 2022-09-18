import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
 return (
  <div>
   <ul>
    <li>
     <NavLink to="/" className="navlink">Home ➡</NavLink>
    </li>
    <li>
     <NavLink to="/" className="navlink">FoodMenu ➡</NavLink>
    </li>
    <li>
     <NavLink to="/" className="navlink">Soups ➡</NavLink>
    </li>
   </ul>
  </div>
 )
}

export default Navbar