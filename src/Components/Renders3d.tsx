import React from 'react'
import renderOne from '../itemsToUse/mainpic3.png';
import renderTwo from '../itemsToUse/stock.png';
import { Link } from 'react-router-dom';

const Renders3d = () => {
  return (
    <div className="render-container">
    <Link to="/products">  
    <img src={renderTwo} alt="left" className="render1" />
    </Link>
    <Link to="/sale">
    <img src={renderOne} alt="right" className="render2" />
    </Link>
  </div>
  )
}

export default Renders3d;
