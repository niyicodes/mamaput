import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/Contact/Contact';
import MenuPage from './Pages/MenuPage/MenuPage';
import Orders from './Pages/Orders/Orders';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';


function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route exact path='/' element={<HomePage />}/>
      <Route path='/contactUs' element={<Contact />}/>
      <Route path='/foodmenu' element={<MenuPage />}/>
      <Route path='/orders' element={<Orders />}/>
      <Route path='/signIn-signUp' element={<SignInSignUp />}/>
     </Routes>
    </div>
  );
}

export default App;
