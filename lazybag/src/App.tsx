import React from 'react';
import lazylogo from './itemsToUse/lazylogo2.png';
import instalogo from './itemsToUse/instalogo.png';

import Header from './Components/Header';
import Renders3d from './Components/Renders3d';
import MainCaruselle from './Components/MainCaruselle';


function App() {
  const logo = lazylogo;
  return (
    <div className="wrapper">
      <Header />
      <MainCaruselle />
      <Renders3d />
      <div className="jumbotron">
        <h1>Custom Jumbotron</h1>
        <p>
          Using a series of utilities, you can create this jumbotron, just like the one in previous
          versions of Bootstrap. Check out the examples below for how you can remix and restyle it
          to your liking.
        </p>
      </div>
      <footer className="footer">
        <div className="footer-logo">
          <img src={logo} width="100px" height="50px" alt="lazysurfbags"></img>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com/lazysurfbags">
            <img src={instalogo} alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default App;
