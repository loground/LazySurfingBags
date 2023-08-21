import React from "react";
//Components
import Header from "../Components/Header";
import Card from "../Components/Card/index";
import Footer from "../Components/Footer";
//Files
import lazysale from "../itemsToUse/lazysale.jpg";
import explosion from "../itemsToUse/explosion.png";
import boom from "../itemsToUse/explosion.wav";

const Sale = () => {
  const [showExplosion, setShowExplosion] = React.useState(false);

  const explodeSale = () => {
    setShowExplosion(!showExplosion);
  };

  React.useEffect(() => {
    if (showExplosion) {
      playBoomSound();
    }
  }, [showExplosion]);

  const playBoomSound = () => {
    const audio = new Audio(boom);
    audio.play();
  };

  return (
    <div>
      <Header />
      <div className="sale">
        <div className="explosion" onClick={explodeSale}>
          <img
            src={showExplosion ? explosion : lazysale}
            alt="sale"
            width="800"
            height="400"
            border-radius="10px"
          />
        </div>
        <div className="cards-wrapper">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sale;
