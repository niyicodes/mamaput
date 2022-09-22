import React from "react";
import { AiFillHeart } from "react-icons/ai";
import CustomButton from "../../Button/CustomButton";
import CheckBox from "../../CheckBox/CheckBox";
import "./HorizontalCard.scss";

const HorizontalCard = ({
 id,
 image,
 name,
 description,
 rating,
 price,
 addOns,
}) => {
 return (
  <div className="horizontal-food-card">
   <figure className="horizontal-food-image">
    <img src={image} alt={name} />
   </figure>
   <div className="horizontal-food-details">
    <div className="horizontal-left">
     <div className="horizontal-food-name">
      <h3>{name}</h3>
     </div>
     <h4 className="horizontal-food-price">
      <span className="now-price">₦{price}</span>
     </h4>
     <h3 className="horizontal-food-rating">
      Health:{" "}
      <span className="rating">
       {rating > 0 && <AiFillHeart />}
       {rating > 1 && <AiFillHeart />}
       {rating > 2 && <AiFillHeart />}
       {rating > 3 && <AiFillHeart />}
       {rating > 4 && <AiFillHeart />}
      </span>
     </h3>
     <p className="horizontal-food-ins">{description}</p>
    </div>
    <div className="horizontal-right">
     <>
     {addOns &&
      addOns.map((addOn) => {
       return(
        <CheckBox 
        name={addOn.name}
        key={addOn.name}
        />
       )
      })
     }
     </>
     <CustomButton buttonName="😋 ORDER" />
    </div>
   </div>
  </div>
 );
};

export default HorizontalCard;
