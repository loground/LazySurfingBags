import axios from 'axios';
import React from 'react';
import FlipperCart from '../Components/FlippingCardCart/FlippingCardCart';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import empty from '../itemsToUse/emptyCartCool.png';
import bg from '../itemsToUse/buyingBackground.png';
import { Link } from 'react-router-dom';
import SkeletonCart from '../Components/Skeleton/SkeletonCart';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, fetchCartItems } from '../Redux/cartSlice/cart';
import { RootState } from '../Redux/store';
import { ThunkDispatch } from 'redux-thunk'; 

const Cart: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>(); 
  const { items, loading } = useSelector((state: RootState) => state.cart);

  const removeFromCartRedux = async (itemId: string) => {
    dispatch(removeFromCart(itemId));
    await axios.delete(`https://64c10995fa35860bae9fd16b.mockapi.io/Cart/${itemId}`);
  };

  React.useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const numberOfSkeletons = 4; 
  const skeletons = Array.from({ length: numberOfSkeletons }, (_, index) => <SkeletonCart key={index} />);

  return (
    <div>
      <Header />
      <div className='cartwrapper'>
        {loading ? ( 
          <div className='skeleton_container'>
          {skeletons}
        </div>
        ) : items.length === 0 ? (
          <div className='cart-empty'>
            <h1>Your cart is Damn empty, buy something:</h1>
            <Link to="/products">
              <img src={empty} alt='emptyCart' width='1100' height='690' />
            </Link>
          </div>
        ) : (
          <div className='itemsInCart' style={{ backgroundImage: `url(${bg})` }}>
            <h1>You damn legend about to buy this:</h1>
            <div className='cart-items-container'>
              {items.map((item) => (
                <div className='exactItemInside' key={item.id}>
                  <FlipperCart removeFromCart={() => removeFromCartRedux(item.id)} insideCart={item} />
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