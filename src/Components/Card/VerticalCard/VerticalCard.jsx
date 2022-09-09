import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import CustomButton from '../../Button/CustomButton';
import './VerticalCard.scss'

const VerticalCard = () => {
 return (
  <div className='food-card'>
   <figure className='food-image'>
    <img src="asset/Eforiro.png" alt="Eforiro" />
   </figure>
   <div className="food-details">
    <div className="food-name">
     <h3>Efo riro + Chicken</h3>
     <span>-60%</span>
    </div>
    <h4 className='food-price'>
     <span className="now-price">1200</span>
     <del className="former-price">2000</del>
    </h4>
    <h3 className="food-rating">
     Health: <span className="rating">
      <AiFillHeart/>
      <AiFillHeart/>
      <AiFillHeart/>
      <AiFillHeart/>
      <AiFillHeart/>
     </span>
    </h3>
    <p className="food-ins">
     It is prepared with vegetables and stockfish palm oil, pepper, locust bean and chicken.
    </p>
   </div>
   <CustomButton buttonName="😋 ORDER" />
  </div>
 )
}

export default VerticalCard;