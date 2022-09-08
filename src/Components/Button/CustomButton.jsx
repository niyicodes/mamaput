import React from 'react';
import './CustomButton.scss';

const CustomButton = ({buttonName, inverted, isGoogleSignIn}) => {
 return (
  <button 
   className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
  >
   {buttonName}
  </button>
 )
}

export default CustomButton;