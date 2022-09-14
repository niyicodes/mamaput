import React from 'react'
import './Contact.scss'
import FormInput from '../../Components/FormInput/FormInput'
import CustomButton from '../../Components/Button/CustomButton'

const Contact = () => {
 return (
  <main>
   <h3>contact us</h3>
   <p>
    Have any complaints? Or you want to reach out? Kindly fill the form below and be sure to hear back from us.
   </p>
   <form action="" className="form">
    <FormInput placeholder='"Your name"'/>
    <FormInput placeholder='"Your email"'/>
    <FormInput placeholder='"Your phone"'/>
    <textarea name="" id="" cols="30" rows="10" placeholder='"Message"'/>
    <CustomButton buttonName="send message"/>
   </form>
  </main>
 )
}

export default Contact