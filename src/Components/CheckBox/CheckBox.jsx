import React from "react";
import "./CheckBox.scss";

const CheckBox = ({ name, value, onChange }) => {
 return (
  <div className="checkbox">
   <input type="checkbox" name={name} id={name} checked={value} />
   <label htmlFor={name}>{name}</label>
  </div>
 );
};

export default CheckBox;
