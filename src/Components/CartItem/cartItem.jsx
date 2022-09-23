import React from 'react'
import './cartItem.scss';

const cartItem = ({image, price, name, quantity}) => {
 return (
  <div className='cart-item'>
   <img src={image} alt={name} />
   <div className="item-details">
    <span className="name">{name}</span>
    <span className="price">{quantity} x {price}</span>
   </div>
  </div>
 )
}

export default cartItem