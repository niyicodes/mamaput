import React from "react";
import { connect } from "react-redux";
// import {useNavigate} from 'react-router-dom'
import CustomButton from "../Button/CustomButton";
import CartItem from "../CartItem/cartItem";
import "./CartDropdown.scss";
// import {toggleCartHidden} from '../../Redux/Cart/cartActions'

const CartDropdown = ({ cartItems }) => {
 // const navigate = useNavigate();
 return (
  <div className="cart-dropdown">
   <div className="cart-items">
    {cartItems.length ? (
     cartItems.map(({ image, price, name, quantity }) => (
      <CartItem key={name} item={{ image, price, name, quantity }} />
     ))
    ) : (
     <span className="empty-message">Your cart is empty</span>
    )}
   </div>
   <CustomButton
    // onClick={() => {navigate('/checkout'); dispatch(toggleCartHidden())}}
    buttonName="Go to checkout"
   />
  </div>
 );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
 cartItems,
});

// const mapStateToProps = (state) => ({
//   cartItems:selectCartItems(state)
// })

// const mapStateToProps = createStructuredSelector ({
//   cartItems: selectCartItems
// })

export default connect(mapStateToProps)(CartDropdown);
