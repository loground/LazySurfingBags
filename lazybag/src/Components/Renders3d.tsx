import React from 'react'
import renderOne from '../itemsToUse/random.png';
import renderTwo from '../itemsToUse/stock.png';

const Renders3d = () => {
  return (
    <div className="render-container">
    <img src={renderOne} alt="left" className="render" />
    <img src={renderTwo} alt="right" className="render" />
  </div>
  )
}

export default Renders3d;
