import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Visuals from './pages/Visuals';
import Sale from './pages/Sale';
import Cart from './pages/Cart';

function App() {
  return (
    <Routes>
    <Route path="products" element={<Products />} />
 <Route path="" element={<Home />} />
 <Route path="visuals" element={<Visuals/>} />
 <Route path="sale" element={<Sale/>} />
 <Route path="cart" element={<Cart/>} />


 </Routes>
  );
}
export default App;
