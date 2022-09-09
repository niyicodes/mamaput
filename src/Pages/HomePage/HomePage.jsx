import React from 'react'
import CustomButton from '../../Components/Button/CustomButton';
import VerticalCard from '../../Components/Card/VerticalCard/VerticalCard';
import './HomePage.scss'

const HomePage = () => {
 return (
  <main>
   <div className="landing-container">
    <div className="textarea">
     <h3>craving local meals?</h3>
     <p>
      Explore our menu of various home cooked meals delivered to your doorstep in an hour or less.
     </p>
     <CustomButton buttonName="Continue" />
    </div>
    <figure className="imagearea">
     <img src="asset/Egus1i.png" alt="Egusi" />
    </figure>
   </div>
   <img className="hot" src="asset/Hot.png" alt="Hot" />
   <div className="discountedarea">
    <div className="textbutton">
     <h3>discount meals</h3>
     <CustomButton buttonName="more ➡" />
    </div>
    <div className="cardarea">
     <VerticalCard />
     <VerticalCard />
     <VerticalCard />
     <VerticalCard />
    </div>
   </div>
  </main>
 )
}

export default HomePage;