import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomeFooter from './components/HomeContent/Footer/HomeFooter';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/SideBar/Sidebar';
import { CartProvider } from './context/CartContext';

const EcommerceApp = () => {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <CartProvider>
      <Navigation handleOpen={ setShow}/>
      { show &&  <Sidebar handleClose= {setShow}/>}
      </CartProvider>
    </Router>
  );
}

export default EcommerceApp;