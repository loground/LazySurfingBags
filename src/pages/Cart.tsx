import axios from 'axios';
import React from 'react';
import FlipperCart from '../Components/FlippingCardCart/FlippingCardCart';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import empty from '../itemsToUse/emptyCartCool.png';
import bg from '../itemsToUse/buyingBackground.png';
import { Link } from 'react-router-dom';

interface CartProductProps {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
  audioSrc: string;
}

interface CartProps {
  insideCart: CartProductProps[];
  setInsideCart: React.Dispatch<React.SetStateAction<CartProductProps[]>>;
}

const Cart: React.FC<CartProps> = ({ insideCart, setInsideCart }) => {
  const removeFromCart = async (itemId: string) => {
    setInsideCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    await axios.delete(`https://64c10995fa35860bae9fd16b.mockapi.io/Cart/${itemId}`);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const insideCartResponse = await axios.get('https://64c10995fa35860bae9fd16b.mockapi.io/Cart');
        setInsideCart(insideCartResponse.data);
      } catch (error) {
        alert('Ошибка получения данных');
      }
    }

    fetchData();
  }, [setInsideCart]);

  return (
    <div>
      <Header />
      <div className='cartwrapper'>
        {insideCart.length === 0 ? (
          <div className='cart-empty'>
            <h1>Your cart is Damn empty, buy something:</h1>
            <Link to="/products">
            <img src={empty} alt='emptyCart' width='1100x' height='690px' />
            </Link>
          </div>
        ) : (
          <div className='itemsInCart' style={{ backgroundImage: `url(${bg})` }}>
           <h1>You damn legend about to buy this:</h1>
           <div className='cart-items-container'>
            {insideCart.map((item) => (
              <div className='exactItemInside' key={item.id}>
                <FlipperCart removeFromCart={() => removeFromCart(item.id)} />
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;