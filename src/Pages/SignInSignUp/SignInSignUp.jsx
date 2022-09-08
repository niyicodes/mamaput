import React from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import './SignInSignUp.scss'

const SignInSignUp = () => {
 return (
  <main className='sign-in-and-sign-up '>
   <SignIn />
   <SignUp />
  </main>
 )
}

export default SignInSignUp