import React, { useState } from "react";
import HorizontalCard from "../../../Components/Card/HorizontalCard/HorizontalCard";
import Navbar from "../../../Components/InnerNavbar/Navbar";
import "./Soup.scss";
import menu from "../../../Menu";
import InputRange from "../../../Components/Range/InputRange";
import CustomButton from "../../../Components/Button/CustomButton";

const Soup = () => {
 return (
  <div className="soup-page">
   <Navbar />
   <div className="soup-info">
    <div className="soupdetails">
     <h3>soups</h3>
     <p>{menu.length} meals found</p>
    </div>
    <div className="soupprice-range">
     <InputRange />
    </div>
   </div>
   <div className="meals">
    <div className="meal-section">
     {menu.map(({ id, image, name, description, rating, price, addOns }) => {
      return (
       <HorizontalCard
        key={id}
        image={image}
        name={name}
        description={description}
        rating={rating}
        price={price}
        addOns={addOns}
       />
      );
     })}
    </div>
    <CustomButton buttonName="LOAD MORE" />
   </div>
  </div>
 );
};

export default Soup;

// {addOns &&
//   addOns.map((addon, i) => {
//    return (
//     <>
//      <input
//       type="checkbox"
//       name={addon.name}
//       value={addon.price}
//       onChange={(e) =>
//        setCurrentItemPrice(+currentItemPrice + +e.target.value)
//       }
//      />{" "}
//      <label>{addon.name}</label>
//      <br />
//     </>
//    );
//   })}

// const [currentItemPrice, setCurrentItemPrice] = useState(5000);
//  const [addOnPrice, setAddOnPrice] = useState(0);

//  const addOns = [
//   { id: 1, name: "eba", price: 500 },
//   { id: 2, name: "amala", price: 100 },
//   { id: 3, name: "fufu", price: 200 },
//  ];

//  console.log(currentItemPrice);
