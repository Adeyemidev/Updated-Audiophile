
import React, { useState,useEffect, createContext } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Headphones } from './components/HEADPHONES/Headphones';
import { Speakers } from './components/Speakers';
import { Earphones } from './components/Earphones';
import { XX99MARKIIOnClick } from './components/HEADPHONES/XX99MARK11';
import {ProductZx9Speaker } from './components/zx9-section/Product-zx9-speaker'
import { ProductYx1Earphones } from './components/YX1-Section/Product-yx1-earphones';
import { Nav } from './components/Nav';
import { XX99MARK1OnClick } from './components/HEADPHONES/XX99MARKI';
import { ProductZx7Speaker } from './components/ZX7-Section/product-zx7-speaker';
import { ProductXX59headphone } from './components/XX59-headphones/Product-xx59-headphones';
export const CartContext = createContext()
export const AppContext = createContext()
 function App(Props) {
  const [showCart, setShowCart] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      const timeout = setTimeout(() => {
        setShowModal(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showModal]);

  return (
    <CartContext.Provider value={{showCart, setShowCart}}>
    <AppContext.Provider value={{showModal, setShowModal}}>
      <Router>
       <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Headphones" element={<Headphones />} />
          <Route path="/Speakers" element={<Speakers />} />
          <Route path="/Earphones" element={<Earphones />} />
          <Route path="/XX99MARK11" element={<XX99MARKIIOnClick />} />
          <Route path= "/Product/zx9-speaker" element ={<ProductZx9Speaker/>} />
         <Route path= "/product/yx1-earphones" element ={<ProductYx1Earphones />}/>
         <Route path="/product/zx7-speaker" element ={<ProductZx7Speaker />}/>
         <Route path="/product/xx99-mark-one-headphones" element ={<XX99MARK1OnClick />}/>
        <Route path="/product/xx59-headphones" element={<ProductXX59headphone/>}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
      </CartContext.Provider>
  );
}

export default App;
