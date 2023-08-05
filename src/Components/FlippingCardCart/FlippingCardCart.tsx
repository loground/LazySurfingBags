import React, { useState } from 'react';
import styles from './FlippingCardCart.module.scss';
import flipper1 from '../../itemsToUse/flipper1.png';
import flipper2 from '../../itemsToUse/flipper2.png';
import vid from '../../itemsToUse/cashout.mp4'

interface FlipperCartProps {
    removeFromCart: () => void;
  }
  
  const FlipperCart: React.FC<FlipperCartProps> = ({ removeFromCart }) => {
    const [showVideo, setShowVideo] = useState(false);
  
    const handleVideoEnd = () => {
      setShowVideo(false);
    };
  
    const handleBuyClick = () => {
      setShowVideo(true);
    };
  
    return (
      <div className={`${styles.page_container}`}>
        {showVideo ? (
          <div className={styles.video_wrapper}>
            <div className={styles.video_area}> 
            <video className={styles.video} controls autoPlay onEnded={handleVideoEnd}>
              <source src={vid} type="video/mp4" />
            </video>
            </div>
          </div>
        ) : (
          <>
            <BlogCard />
            <button className={styles.button_area} onClick={removeFromCart}>
              Удалить из корзины
            </button>
            <button className={styles.buy_button} onClick={handleBuyClick}>
              Купить
            </button>
          </>
        )}
      </div>
    );
  };
  
  const BlogCard: React.FC = () => {
    const [flipped, setFlipped] = useState(false);
  
    const handleFlip = () => {
      setFlipped(!flipped);
    };
  
    return (
      <div onMouseEnter={handleFlip} onClick={handleFlip} className={`${styles.card_container} ${flipped ? `${styles.flipped}` : ''}`}>
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
       <p className={styles.blog_content}>Back</p>
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
            Front</p>
      </div>
    </div>
  );
};

export default FlipperCart;
