import React from 'react';
import lazylogo from '../itemsToUse/lazylogo2.png';

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={lazylogo} width="100px" height="50px" alt="lazysurfbags"></img>
      <nav className="main-header-nav">
        <ul className="site-navigation">
          <li className="site-navigation-item">
            {/* здесь будет реакт Роутер */}
            <p>Products</p>
          </li>
          <li className="site-navigation-item">
            <p>Visuals</p>
          </li>
          <li className="site-navigation-item">
            <p>News</p>
          </li>
        </ul>
        <div className="corner-cart">Cart logo here</div>
      </nav>
    </div>
  );
};

export default Header;