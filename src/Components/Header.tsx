import React from 'react';
import lazylogo from '../itemsToUse/lazylogo2.png';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <div className="header">
        <Link to="/">
      <img src={lazylogo} width="100px" height="50px" alt="lazysurfbags"></img>
      </Link>
      <nav className="main-header-nav">
        <ul className="site-navigation">
          <li className="site-navigation-item">
          <Link to="/products">
            <p>Products</p>
            </Link>
          </li>
          <li className="site-navigation-item">
          <Link to="/visuals">
            <p>Visuals</p>
            </Link>
          </li>
          <li className="site-navigation-item">
          <Link to="/sale">
            <p>Sale</p>
            </Link>
          </li>
        </ul>
        <Link to="/cart">
        <div className="corner-cart">Cart logo here</div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;