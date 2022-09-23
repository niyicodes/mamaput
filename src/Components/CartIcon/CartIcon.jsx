import React from 'react'
import {GiHotMeal} from 'react-icons/gi'
import './CartIcon.scss'
import {toggleCartHidden} from '../../Redux/Cart/cartActions'
import { connect } from 'react-redux'


const Cart = ({toggleCartHidden, itemCount}) => {
 return (
  <div className='cart-icon' onClick={toggleCartHidden}>
   <GiHotMeal className='shopping-icon'/>
   <span className='item-count'>{itemCount}</span>
  </div>
 )
}

const mapDispatchToProps = dispatch => ({
 toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart:{cartItems}}) => {
 return{ //this code below makes the cartIcon display the quantity withing the cart
  itemCount: cartItems.reduce(
   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
  )
 }
}

// const mapStateToProps = createStructuredSelector({
//  itemCount: selectCartItemsCount
// })

export default connect(mapStateToProps, mapDispatchToProps)(Cart);