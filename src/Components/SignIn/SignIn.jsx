import React, { useState } from "react";
import { signInWithGoogle } from "../../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import CustomButton from "../Button/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SingIn.scss";

const SignIn = () => {
 const [state, setState] = useState({
  email: "",
  password: "",
 });

 const handleChange = (event) => {
  const { value, name } = event.target;
  setState((prevData) => {
   return {
    ...prevData,
    [name]: value,
   };
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const { email, password } = state;
  try {
   await signInWithEmailAndPassword(auth, email, password);
   setState({ email: "", password: "" });
  } catch (err) {
   alert("Please Try again");
  }
 };

 return (
  <div className="sign-in">
   <h2>I already have an account</h2>
   <span>Sign in with your email and password</span>

   <form onSubmit={handleSubmit}>
    <FormInput
     name="email"
     type="email"
     value={state.email}
     required
     label="Email"
     handleChange={handleChange}
    />

    <FormInput
     name="password"
     type="password"
     value={state.password}
     handleChange={handleChange}
     label="Password"
     required
    />

    <div className="button">
     <CustomButton type="submit" buttonName="Sign In" />
     <CustomButton
      onClick={signInWithGoogle}
      isGoogleSignIn
      buttonName="Google"
     />
    </div>
   </form>
  </div>
 );
};

export default SignIn;
