import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { addItem } from "../../../Redux/Cart/cartActions";
import CustomButton from "../../Button/CustomButton";
import "./VerticalCard.scss";

const VerticalCard = ({
 id,
 image,
 name,
 description,
 rating,
 price,
 discount,
 addItem,
}) => {
 return (
  <div className="food-card" id={id}>
   <figure className="food-image">
    <img src={image} alt={name} />
   </figure>
   <div className="food-details">
    <div className="food-name">
     <h3>{name}</h3>
     {discount ? <span>-{discount}%</span> : null}
    </div>
    <h4 className="food-price">
     {discount && (
      <span className="now-price">
       ₦{Math.round(price - (discount / 100) * price)}
      </span>
     )}
     {discount ? (
      <del className="former-price">₦{price}</del>
     ) : (
      <p className="former-price">₦{price}</p>
     )}
    </h4>
    <h3 className="food-rating">
     Health:{" "}
     <span className="rating">
      {rating > 0 && <AiFillHeart />}
      {rating > 1 && <AiFillHeart />}
      {rating > 2 && <AiFillHeart />}
      {rating > 3 && <AiFillHeart />}
      {rating > 4 && <AiFillHeart />}
     </span>
    </h3>
    <p className="food-ins">{description}</p>
   </div>
   <CustomButton
    buttonName="😋 ORDER"
    onClick={() =>
     addItem({
      id,
      image,
      name,
      description,
      rating,
      price,
      discount,
      addItem,
     })
    }
   />
  </div>
 );
};

const mapDispatchToProps = (dispatch) => ({
 addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(VerticalCard);
