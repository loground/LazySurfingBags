import React from 'react'
import Header from '../Components/Header';
import lazysale from '../itemsToUse/lazysale.jpg'
import explosion from '../itemsToUse/explosion.png';
import Card from "../Components/Card/index"

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
        <img src={showExplosion ? explosion : lazysale} alt='sale' width='800' height='400' />
        </div>
        <div className="cards-wrapper">
        <Card />
        <Card />
        </div>
        </div>
    </div>
  )
}

export default Sale;
