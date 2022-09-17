import React from "react";
import { AiFillHeart } from "react-icons/ai";
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
}) => {
 return (
  <div className="food-card">
   <figure className="food-image">
    <img src={image} alt={name} />
   </figure>
   <div className="food-details">
    <div className="food-name">
     <h3>{name}</h3>
     <span>-{discount}%</span>
    </div>
    <h4 className="food-price">
     {discount && (
      <span className="now-price">
       {price - (discount / 100) * price}
      </span>
     )}
     {discount ? (
      <del className="former-price">{price}</del>
     ) : (
      <p className="former-price">{price}</p>
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
    <p className="food-ins">
     {description}
    </p>
   </div>
   <CustomButton buttonName="😋 ORDER" />
  </div>
 );
};

export default VerticalCard;
