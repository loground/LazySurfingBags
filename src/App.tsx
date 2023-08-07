import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Visuals from './pages/Visuals';
import Sale from './pages/Sale';
import Cart from './pages/Cart';
import axios from 'axios';
import Home from './pages/Home';

interface ProductProps {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
  audioSrc: string;
}

interface ColorData {
  color: string;
  imageFront: string;
  imageBack: string;
  category: string;
  id: string;
  desc: string;
}

function App() {
  const [bagCategories, setBagCategories] = React.useState<ProductProps[]>([]);
  const [insideCart, setInsideCart] = React.useState<ColorData[]>([]);

  React.useEffect(() => {
    axios.get("https://6481ccc629fa1c5c50321a8b.mockapi.io/Pizza/Bags")
      .then((response) => setBagCategories(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Routes>
      <Route path='products' element={<Products 
      bagCategories={bagCategories} 
      insideCart={insideCart}
      setInsideCart={setInsideCart}
       />} />
      <Route path="" element={<Home />} />
      <Route path="visuals" element={<Visuals />} />
      <Route path="sale" element={<Sale />} />
      <Route path="cart" element={<Cart insideCart={insideCart} setInsideCart={setInsideCart} />} />
    </Routes>
  );
}

export default App;
