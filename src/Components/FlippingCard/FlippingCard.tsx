import React, { useState } from 'react';
import styles from './FlippingCard.module.scss';
import flipper1 from '../../itemsToUse/flipper1.png';
import flipper2 from '../../itemsToUse/flipper2.png';
import Bought from '../../itemsToUse/inCart.png';

const Flipper: React.FC = () => {
  const [showBought, setShowBought] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  const handleBuyClick = () => {
    setShowBought(!showBought);
  };

  return (
    <div className={`${styles.background} ${styles.page_container}`}>
      <BlogCard />
      <div className={styles.text_area1}>
        <p>Vova is a freakin' legend and we can watch him surf all day cause it's pure fun</p>
      </div>
      <div className={styles.text_area2}>
        <p>Vova is a freakin' legend and we can watch him surf all day cause it's pure fun</p>
      </div>
      {showBought && <img className={styles.bought_image} src={Bought} alt="Bought" />}
      <button className={styles.button_area} onClick={handleBuyClick}>
        {showBought ? 'You made these guys happy' : 'Купить'}
      </button>
    </div>
  );
};

const BlogCard: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div onMouseEnter={flip} onMouseLeave={flip} className={`${styles.card_container} ${flipped ? `${styles.flipped}` : ''}`}>
      <Front />
      <Back />
    </div>
  );
};

const Front: React.FC = () => {
  return (
    <div className={styles.front}>
      <ImageArea />
      <MainArea />
    </div>
  );
};

const Back: React.FC = () => {
  return (
    <div className={styles.back}>
        <div className={styles.image_container}>
       <img className={styles.card_image} src={flipper2} alt="Blog Post" />
        <p className={styles.blog_content}>
            Vova is a legend <br/>
          And no one can say a word against that cause he is cool AF</p>
      </div>
      </div>
  );
};

const ImageArea: React.FC = () => {
  return (
    <div className={styles.image_container}>
      <img className={styles.card_image} src={flipper1} alt="Blog Post" />
    </div>
  );
};

const MainArea: React.FC = () => {
  return (
    <div className={styles.main_area}>
      <div className={styles.blog_post}>
        <p className={styles.blog_content}>
            Vova is a legend <br/>
          And no one can say a word against that cause he is cool AF</p>
      </div>
    </div>
  );
};

export default Flipper;
