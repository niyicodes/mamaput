import React from 'react';
import './CustomButton.scss';

const CustomButton = ({buttonName, inverted, isGoogleSignIn, ...otherProps}) => {
 return (
  <button 
   className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}
  >
   {buttonName}
  </button>
 )
}

export default CustomButton;