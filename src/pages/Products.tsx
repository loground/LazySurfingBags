import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import prod1 from '../itemsToUse/prod1.png'
import prod2 from '../itemsToUse/prod2.png'
import prod3 from '../itemsToUse/prod3.png'
import prod4 from '../itemsToUse/prod4.png'


const Products = () => {
  return (
    <div>
        <Header />
        <div className='products-box'>
            <img src={prod1} alt='чехлы1'></img>
            <img src={prod2} alt='чехлы2'></img>
            <img src={prod3} alt='чехлы3'></img>
            <img src={prod4} alt='чехлы4'></img>
        </div>
        <Footer />
    </div>

  )
}
export default Products;