import React, { useState, useEffect, useRef } from 'react';
import Flipper from '../Components/FlippingCard/FlippingCard';
import Header from '../Components/Header';
import styles from './Popup.module.scss';

interface ProductProps {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
}

interface ProductsProps {
  bagCategories: ProductProps[];
}

const Products: React.FC<ProductsProps> = ({ bagCategories }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className='products-box'>
        {bagCategories.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.title} onClick={openPopup} />
            <h1 className='product_names'>{product.title}</h1>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className={styles.backdrop}>
          <div className={styles.popup_content} ref={popupRef}>
            <Flipper />
            <button className={styles.closePopUp} onClick={closePopup}>
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
