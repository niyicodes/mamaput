import React, { useState } from "react";
import "./CheckBox.scss";

const CheckBox = ({ name, ...otherProps }) => {
 const [checked, setChecked] = useState(false);
 const handleChange = (event) => {
  if (event.target.checked) {
   setChecked(() => !checked);
   console.log(event.target.name);
  } else {
   setChecked(() => checked);
   console.log(`${event.target.name} is unchecked`)
  }
 };
 return (
  <div className="checkbox">
   <input
    type="checkbox"
    name={name}
    id={name}
    onChange={handleChange}
   />
   <label htmlFor={name}>{name}</label>
  </div>
 );
};

export default CheckBox;
