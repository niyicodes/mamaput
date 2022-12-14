import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
 return (
  <div className="mini-navbar">
   <ul className="mini-navbar-nav">
    <li>
     <NavLink to="/" className="navlink">
      Home ➡
     </NavLink>
    </li>
    <li>
     <NavLink to="/foodmenu" className="navlink">
      FoodMenu ➡
     </NavLink>
    </li>
    <li>
     <NavLink to="/foodmenu/:name" className="navlink">
      Soups ➡
     </NavLink>
    </li>
   </ul>
  </div>
 );
};

export default Navbar;
