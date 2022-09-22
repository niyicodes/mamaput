import React, { useState } from "react";
import './InputRange.scss'

const Price = ({ max, min }) => {
 const [value, setValue] = useState({
  min: 2000,
  max: 30000,
 });
 return (
  <div className="price-range">
   <input type="number" name={min} value={value.min} />
   
   <input type="range" name=""min={1000} max={25000} onChange={values => setValue(value)}/>
   
   <input type="number" name={max} value={value.max} />
  </div>
 );
};



export default Price;
