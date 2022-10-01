import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../Redux/Cart/cartActions'
import './CheckoutItem.scss'



const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
 const {name, image, price, quantity} = cartItem;
 return (
  <div className='checkout-item'>
   <div className="image-container">
    <img src={image} alt="" />
   </div>
   <span className="name">{name}</span>
   <span className="quantity">
    <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
     <div className="value">{quantity}</div>
    <div onClick={() => addItem(cartItem)}  className="arrow">&#10095;</div>
    </span>
   <span className="price">{price}</span>
   <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
 )
}

const mapDispatchToProps = dispatch => ({
 clearItem: item => dispatch(clearItemFromCart(item)),
 addItem: item => dispatch(addItem(item)),
 removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);