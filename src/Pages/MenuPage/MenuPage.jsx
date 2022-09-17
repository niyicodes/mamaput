import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './MenuPage.scss'

const MenuPage = () => {
 return (
  <main className="menu-page">
   <div className="menu">
    <figure>
     <img src="asset/Egusi.png" alt="Egus1i" />
     <Link className="menu-link" to='/foodmenu/soups'>soups</Link>
    </figure>
    <figure>
     <img src="asset/jollof.png" alt="Jollof" />
     <Link className="menu-link" to='/foodmenu/rice'>rice</Link>
    </figure>
    <figure>
     <img src="asset/moi-moi.png" alt="moimoi" />
     <Link className="menu-link" to='/foodmenu/others'>others</Link>
    </figure>
   </div>
   <Outlet />
  </main>
 )
}

export default MenuPage