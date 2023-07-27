import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Visuals from './pages/Visuals';
import Sale from './pages/Sale';
import Cart from './pages/Cart';
import axios from 'axios';

interface ProductProps {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
}

function App() {
  const [bagCategories, setBagCategories] = React.useState<ProductProps[]>([]);

  React.useEffect(() => {
    axios.get("https://6481ccc629fa1c5c50321a8b.mockapi.io/Pizza/Bags")
    .then((response) => setBagCategories(response.data))
    .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <Routes>
        <Route
          path='products'
          element={<Products bagCategories={bagCategories} />}
        />
 <Route path="" element={<Home />} />
 <Route path="visuals" element={<Visuals/>} />
 <Route path="sale" element={<Sale/>} />
 <Route path="cart" element={<Cart/>} />


 </Routes>
  );
}
export default App;
