import React, { useState } from "react";
import styles from "./FlippingCardCart.module.scss";

interface ColorData {
  color: string;
  imageFront: string;
  imageBack: string;
  category: string;
  id: string;
  desc: string;
}

interface FlipperCartProps {
  removeFromCart: () => void;
  insideCart: ColorData;
}

const FlipperCart: React.FC<FlipperCartProps> = ({
  removeFromCart,
  insideCart,
}) => {

  return (
    <div className={`${styles.page_container}`}>
      <>
        <BlogCard item={insideCart} />
        <button className={styles.button_area} onClick={removeFromCart}>
          Удалить из корзины
        </button>
      </>
    </div>
  );
};

interface BlogCardProps {
  item: ColorData;
}

const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      onMouseEnter={handleFlip}
      onClick={handleFlip}
      className={`${styles.card_container} ${
        flipped ? `${styles.flipped}` : ""
      }`}
    >
      <Front item={item} />
      <Back item={item} />
    </div>
  );
};

interface FrontProps {
  item: ColorData;
}

const Front: React.FC<FrontProps> = ({ item }) => {
  return (
    <div className={styles.front}>
      {item ? <ImageArea imageSrc={item.imageFront} /> : <div>Loading</div>}
      <MainArea item={item} />
    </div>
  );
};

interface ImageAreaProps {
  imageSrc?: string;
}

const ImageArea: React.FC<ImageAreaProps> = ({ imageSrc }) => {
  if (!imageSrc) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.image_container}>
      <img className={styles.card_image} src={imageSrc} alt="Blog Post" />
    </div>
  );
};

interface MainAreaProps {
  item: ColorData;
}

const MainArea: React.FC<MainAreaProps> = ({ item }) => {
  return (
    <div className={styles.main_area}>
      <div className={styles.blog_post}>
        <p className={styles.blog_content}>{item.desc}</p>
      </div>
    </div>
  );
};

const Back: React.FC<FrontProps> = ({ item }) => {
  return (
    <div className={styles.back}>
      {item ? (
        <div className={styles.image_container}>
          <img
            className={styles.card_image}
            src={item.imageBack}
            alt="Blog Post"
          />
          <p className={styles.blog_content}>{item.desc}</p>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default FlipperCart;
