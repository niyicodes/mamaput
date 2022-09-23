import React from "react";
import HorizontalCard from "../../../Components/Card/HorizontalCard/HorizontalCard";
import Navbar from "../../../Components/InnerNavbar/Navbar";
import "./Soup.scss";
import menu from "../../../Data/menu";
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
        id={id}
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

//       value={addon.price}
//       onChange={(e) =>
//        setCurrentItemPrice(+currentItemPrice + +e.target.value)
//       }
//
// const [currentItemPrice, setCurrentItemPrice] = useState(5000);
// const [addOnPrice, setAddOnPrice] = useState(0);
