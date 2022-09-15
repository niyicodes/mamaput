import React from 'react'
import './MenuPage.scss'

const MenuPage = () => {
 return (
  <main className="menu-page">
   <div className="menu">
    <figure>
     <img src="asset/Egusi.png" alt="Egus1i" />
     <figcaption>soups</figcaption>
    </figure>
    <figure>
     <img src="asset/jollof.png" alt="Jollof" />
     <figcaption>rice</figcaption>
    </figure>
    <figure>
     <img src="asset/moi-moi.png" alt="moimoi" />
     <figcaption>bean product</figcaption>
    </figure>
   </div>
  </main>
 )
}

export default MenuPage