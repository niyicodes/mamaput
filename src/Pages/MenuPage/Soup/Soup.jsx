import React, { useState } from "react";
import "./Soup.scss";

const Soup = () => {
 const [currentItemPrice, setCurrentItemPrice] = useState(5000);
 const [addOnPrice, setAddOnPrice] = useState(0);

 const addOns = [
  { id: 1, name: "eba", price: 500 },
  { id: 2, name: "amala", price: 100 },
  { id: 3, name: "fufu", price: 200 },
 ];

 console.log(currentItemPrice);

 return (
  <div>
   <div
    style={{
     borderRadius: "5px",
     border: "1px solid #ccc",
    }}
   >
    {addOns &&
     addOns.map((addon, i) => {
      return (
       <>
        <input
         type="checkbox"
         name={addon.name}
         value={addon.price}
         onChange={(e) =>
          setCurrentItemPrice(+currentItemPrice + +e.target.value)
         }
        />{" "}
        <label>{addon.name}</label>
        <br />
       </>
      );
     })}
   </div>
  </div>
 );
};

export default Soup;
