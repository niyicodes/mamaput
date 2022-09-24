import React, { useState } from 'react'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc,} from "firebase/firestore";
import { auth, db } from '../../Firebase/firebase'
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

 const handleSubmit = async (event) => {
  event.preventDefault();

  const { email, password, confirmPassword, displayName } = formData;

  if(password !== confirmPassword){
   alert("Passwords don't match")
  }

  try{
   const res = await createUserWithEmailAndPassword(auth, email, password);
   const user = res.user;
   await addDoc(collection(db, "users"), {
    uid: user.uid,
    name: displayName,
    authProvider: "local",
    email,
   });
  } catch(err){
   alert('Please fill in the fields properly and try again');
  }
 }

 return (
  <div className="sign-up">
   <h2 className="title">I do not have an account</h2>
   <span>Sign up with your email and password</span>

   <form  className="sign-up-form" onSubmit={handleSubmit}>
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