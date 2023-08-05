import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Flipper from '../Components/FlippingCard/FlippingCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import styles from './Popup.module.scss';


export interface ProductProps {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
  audioSrc: string;
}
export interface ProductsProps {
  bagCategories: ProductProps[];
  insideCart: ProductProps[];
  setInsideCart: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

const Products: React.FC<ProductsProps> = ({ bagCategories, setInsideCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);

  const openPopup = (product: ProductProps) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const buyProd = async (product: ProductProps) => {
    await axios.post('https://64c10995fa35860bae9fd16b.mockapi.io/Cart', product);
    setInsideCart((prevCart) => [...prevCart, product]);
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
    <div
      key={product.id}
    >
      <img src={product.imageUrl} alt={product.title} onClick={() => openPopup(product)}  onMouseOver={() => {
        const audioPlayer = document.getElementById(`hoverAudio-${product.id}`) as HTMLAudioElement;
        audioPlayer.play();
      }}
      onMouseOut={() => {
        const audioPlayer = document.getElementById(`hoverAudio-${product.id}`) as HTMLAudioElement;
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      }} />
      <h1 className='product_names'>{product.title}</h1>
      <audio
        id={`hoverAudio-${product.id}`}
        className='audio-player'
        controls={false}
      >
        <source src={product.audioSrc} type="audio/mp3" />
      </audio>
    </div>
  ))}
</div>
      {showPopup && selectedProduct && (
        <div className={styles.backdrop}>
          <div className={styles.popup_content} ref={popupRef}>
            <Flipper buyProd={buyProd} selectedProduct={selectedProduct}/>
            <button className={styles.closePopUp} onClick={closePopup}>
              Close Popup
            </button>
          </div>
        </div>
      )}
       <Footer/>
    </div>
  );
};

export default Products;