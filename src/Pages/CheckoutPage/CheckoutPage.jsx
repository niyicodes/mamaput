/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect } from 'react-redux';
import './checkoutPage.scss';
import {createStructuredSelector} from 'reselect'
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/cartSelectors';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';


const CheckoutPage = ({cartItems, total}) => {
 return (
  <div className='checkout-page'>
   <div className="checkout-header">
    <div className="header-block">
     <h3>Product</h3>
    </div>
    <div className="header-block">
     <h3>Name</h3>
    </div>
    <div className="header-block">
     <h3>Quantity</h3>
    </div>
    <div className="header-block">
     <h3>Price</h3>
    </div>
    <div className="header-block">
     <h3>Remove</h3>
    </div>
   </div>
   {
    cartItems.map(cartItem => {
     return(
      <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
     )
    })
   }
   <div className="total">
    <span>TOTAL: ₦{total}</span>
   </div>
  </div>
 )
}

const mapStateToProps = createStructuredSelector(
 {
  cartItems: selectCartItems,
  total: selectCartTotal
 }
)


export default connect(mapStateToProps)(CheckoutPage);