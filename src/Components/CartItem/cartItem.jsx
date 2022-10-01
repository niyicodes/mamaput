import React from "react";
import "./cartItem.scss";

const CartItem = ({ item: { id, image, price, name, quantity, addOns } }) => {
 return (
  <div className="cart-item" id={id}>
   <img src={image} alt={name} />
   {addOns ? (
    addOns.map((addOn) => {
     return (
      <div className="item-details">
       <span className="name">
        {name} + {addOn.name}
       </span>
       <span className="price">
        {quantity} x {price + addOn.price}
       </span>
      </div>
     );
    })
   ) : (
    <div className="item-details">
     <span className="name">{name}</span>
     <span className="price">
      {quantity} x {price}
     </span>
    </div>
   )}
  </div>
 );
};
// const CartItem = ({item: {id, image, price, name, quantity}}) => {
//  return (
//   <div className="cart-item" id={id}>
//    <img src={image} alt={name} />
//    <div className="item-details">
//     <span className="name">{name}</span>
//     <span className="price">
//      {quantity} x {price}
//     </span>
//    </div>
//   </div>
//  );
// };

export default CartItem;
