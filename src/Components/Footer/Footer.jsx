import React from 'react'
import "./Footer.scss"

const Footer = () => {
 return (
  <footer>
   <div className="col-1">
    <h3>get to know us</h3>
    <ul>
     <li>careers</li>
     <li>about us</li>
     <li>terms and conditions</li>
     <li>privacy policy</li>
     <li>gifts</li>
    </ul>
   </div>

   <div className="col-2">
    <h3>let us help you</h3>
     <ul>
      <li>help center</li>
      <li>contact us</li>
      <li>shipping & delivery</li>
      <li>return policy</li>
     </ul>
   </div>

   <div className="col-3">
     <div className="top">
      <h3>get to know us</h3>
       <ul>
        <li>sel on mamaput</li>
        <li>become a distributor</li>
        <li>become a partner</li>
       </ul>
     </div>
     <div className="bottom">
      <h3>contact us on</h3>
      <a href="tel:+2349058507523">📞</a>
      <a href="mailto:officiallyomoniyi@gmail.com">📧</a>
     </div>
   </div>

  </footer>
 )
}

export default Footer