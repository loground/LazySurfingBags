import React from "react";
import instalogo from "../itemsToUse/instalogo.png";
import logo from "../itemsToUse/lazylogo2.png";

const Footer = () => {
  const onClickLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer className="footer">
        <div className="footer-logo">
          <img
            onClick={onClickLogo}
            src={logo}
            width="100px"
            height="50px"
            alt="lazysurfbags"
          ></img>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com/lazysurfbags">
            <img src={instalogo} alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
