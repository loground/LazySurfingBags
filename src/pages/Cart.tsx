import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import empty from '../itemsToUse/emptyCart.png'

const Cart = () => {
  return (
    <div>
    <Header/>
    <div className='cartwrapper'>
        <h1>Your cart is Damn empty, buy something</h1>
        <div className='cart-empty'>
    <img src={empty} alt='emptyCart' width='1000px' height='700px'></img>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
 
export default Cart;