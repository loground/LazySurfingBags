import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
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
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [bagCategories, setBagCategories] = React.useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    axios.get("https://6481ccc629fa1c5c50321a8b.mockapi.io/Pizza/Bags")
      .then((response) => {
        setBagCategories(response.data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); 
      });
  }, []);

  return (
    <Provider store={store}>
    <Routes>
      <Route path='products' element={<Products 
      bagCategories={bagCategories} 
      //добавить сюда из редакса кнопки
      isLoading={isLoading}
      setIsLoading={setIsLoading}
       />} />
      <Route path="" element={<Home />} />
      <Route path="visuals" element={<Visuals />} />
      <Route path="sale" element={<Sale />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
    </Provider>
  );
}

export default App;
