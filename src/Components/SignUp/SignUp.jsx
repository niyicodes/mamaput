import React, { useState } from 'react'
import CustomButton from '../Button/CustomButton'
import FormInput from '../FormInput/FormInput'
import './SignUp.scss'


const SignUp = () => {
 const [formData, setFormData] = useState({
  email: '',
  password: '',
  confirmPassword: '',
  displayName: ''
 })

 const handleChange = event => {
  const {value, name} = event.target
  setFormData(prevData => {
   return{
    ...prevData,
    [name]: value
   }
  })
 }

 return (
  <div className="sign-up">
   <h2 className="title">I do not have an account</h2>
   <span>Sign up with your email and password</span>

   <form  className="sign-up-form">
    <FormInput 
     name="displayName" 
     type="text" 
     value={formData.displayName} 
     onChange={handleChange}
     label='Display Name' 
     required
    />

    <FormInput 
     name="email" 
     type="email" 
     value={formData.email} 
     onChange={handleChange}
     label='Email' 
     required
    />

    <FormInput 
     name="password" 
     type="password"  
     value={formData.password} 
     onChange={handleChange}
     label='Password'  
     required
    />

    <FormInput 
     name="confirmPassword" 
     type="password" 
     value={formData.confirmPassword} 
     onChange={handleChange}
     label='Confirm Password'  
     required
    />

    <CustomButton type="submit" buttonName="Sign Up"/>
   </form>
  </div>
 )
}

export default SignUp