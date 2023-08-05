import React from 'react'
import Header from '../Components/Header';
import lazysale from '../itemsToUse/lazysale.jpg'
import explosion from '../itemsToUse/explosion.png';
import Card from "../Components/Card/index"
import Footer from '../Components/Footer';

const Sale = () => {
const [showExplosion, setShowExplosion] = React.useState(false);

const explodeSale = () => {
    setShowExplosion(!showExplosion);
  };

  return (
    <div>
        <Header />
        <div className='sale'>
            <div className='explosion' onClick={explodeSale}>
        <img src={showExplosion ? explosion : lazysale} alt='sale' width='800' height='400' border-radius="10px" />
        </div>
        <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Sale;
