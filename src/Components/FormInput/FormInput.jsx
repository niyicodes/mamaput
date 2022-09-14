import React from 'react'
import './FormInput.scss'
const FormInput = ({handleChange, label, placeholder, ...otherProps}) => {
 return (
  <div className='group'>
   <input onChange={handleChange} placeholder = {placeholder} className="form-input" {...otherProps}/>
   {
   label ? 
   (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
    {label}
   </label>) : null
   }
 </div>
 )
}

export default FormInput