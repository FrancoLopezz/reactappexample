import React from 'react'; 
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home'
import AirForce from './routes/airforce/AirForce';
import AirForceId from './routes/airforce/AirForceId';
import Dunk from './routes/dunk/Dunk'
import DunkId from './routes/dunk/DunkId';
import Jordan from './routes/jordan/Jordan';
import JordanId from './routes/jordan/JordanId';

import CartProvider from './context/CartContext';
import Cart from './cart/Cart';

export default function App() {
  return (
    <BrowserRouter>

      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dunk" element={<Dunk/>} />
          <Route exact path="/dunk/:id" element={<DunkId/>} />
          <Route exact path="/airforce" element={<AirForce/> } />
          <Route exact path="/airforce/:id" element={<AirForceId/>} />
          <Route exact path="/jordan" element={<Jordan/> } />
          <Route exact path="/jordan/:id" element={<JordanId/>} />
          <Route exact path="/cart" element={<Cart/> } />
        </Routes>
      </CartProvider>

    </BrowserRouter>
  );
}


