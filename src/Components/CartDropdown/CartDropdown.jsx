import React from "react";
import { connect } from "react-redux";
// import {useNavigate} from 'react-router-dom'
import CustomButton from "../Button/CustomButton";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";
// import {toggleCartHidden} from '../../Redux/Cart/cartActions'

const CartDropdown = ({ cartItems }) => {
 // const navigate = useNavigate();
 return (
  <div className="cart-dropdown">
   <div className="cart-items">
    {cartItems ? (
     cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
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
