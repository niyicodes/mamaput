import React from "react";
import CustomButton from "../../Components/Button/CustomButton";
import VerticalCard from "../../Components/Card/VerticalCard/VerticalCard";
import "./HomePage.scss";
import data from "../../data";
import oneTime from "../../oneTime";
const HomePage = () => {
 return (
  <main className="home-page">
   <div className="landing-container">
    <div className="textarea">
     <h3>craving local meals?</h3>
     <p>
      Explore our menu of various home cooked meals delivered to your doorstep
      in an hour or less.
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
     {data.map(({ id, image, name, description, rating, price, discount }) => {
      return (
       <VerticalCard
        key={id}
        image={image}
        name={name}
        description={description}
        rating={rating}
        price={price}
        discount={discount}
       />
      );
     })}
    </div>
   </div>

   <div className="event">
    <img src="asset/petals.png" alt="petals" className="backgroundpetals" />
    <img
     src="asset/appetizer.png"
     alt="appetizer"
     className="backgroundimage"
    />
    <img src="asset/petals.png" alt="petals" className="backgroundpetal" />
    <div className="seasontext">
     <p>
      make this season a special one for you and loved ones. the best way to
      their hearts is through their stomach
     </p>
     <CustomButton buttonName="Menu" />
    </div>
   </div>

   <div className="discountedarea">
    <div className="textbutton">
     <h3>one-time deals</h3>
     <CustomButton buttonName="more ➡" />
    </div>
    <div className="cardarea">
     {oneTime.map(({ id, image, name, description, rating, price }) => {
      return(
       <VerticalCard 
        key={id}
        image={image}
        name={name}
        description={description}
        rating={rating}
        price={price}
       />
      )
     })}
    </div>
   </div>
  </main>
 );
};

export default HomePage;
