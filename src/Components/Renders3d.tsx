import React from 'react'
import renderOne from '../itemsToUse/random.png';
import renderTwo from '../itemsToUse/stock.png';
import { Link } from 'react-router-dom';

const Renders3d = () => {
  return (
    <Link to="/products">
    <div className="render-container">
    <img src={renderOne} alt="left" className="render" />
    <img src={renderTwo} alt="right" className="render" />
  </div>
  </Link>
  )
}

export default Renders3d;
