import React, { useState } from "react";
import HorizontalCard from "../../../Components/Card/HorizontalCard/HorizontalCard";
import Navbar from "../../../Components/InnerNavbar/Navbar";
import "./Soup.scss";
import menu from '../../../Menu'
const Soup = () => {
  return (
  <div>
   <Navbar />

   {menu.map(({ id, image, name, description, rating, price, addOns }) =>{
     return(
       <HorizontalCard 
        key={id}
        image={image}
        name={name}
        description={description}
        rating={rating}
        price={price}
        addOns={addOns}
       />
     )
   })}
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