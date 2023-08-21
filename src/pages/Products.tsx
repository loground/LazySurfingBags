import React, { useState, useEffect, useRef } from "react";
//Components
import Flipper from "../Components/FlippingCard/FlippingCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductSkeleton from "../Components/Skeleton/ProductSkeleton";
//Styles
import styles from "./Popup.module.scss";
//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoadingStatus,
  selectBagCategories,
  fetchBagCategories,
} from "../Redux/productsSlice/products";
import { AppDispatch } from "../Redux/store";

export interface ProductProps {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
  audioSrc: string;
}

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bagCategories = useSelector(selectBagCategories);
  const isLoading = useSelector(selectLoadingStatus);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null,
  );

  React.useEffect(() => {
    dispatch(fetchBagCategories());
  }, [dispatch]);

  const openPopup = (product: ProductProps) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    document.body.classList.remove(styles.no_scroll);
    setShowPopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="products-box">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <div className="productSkel">
                <ProductSkeleton key={index} />
              </div>
            ))
          : bagCategories.map((product) => (
              <div key={product.id} className="productItem">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  onClick={() => openPopup(product)}
                  onMouseOver={() => {
                    const audioPlayer = document.getElementById(
                      `hoverAudio-${product.id}`,
                    ) as HTMLAudioElement;
                    const playPromise = audioPlayer.play();
                    if (playPromise !== undefined) {
                      playPromise.then((_) => {}).catch((error) => {});
                    }
                  }}
                  onMouseOut={() => {
                    const audioPlayer = document.getElementById(
                      `hoverAudio-${product.id}`,
                    ) as HTMLAudioElement;
                    audioPlayer.pause();
                    audioPlayer.currentTime = 0;
                  }}
                />
                <h1 className="product_names">{product.title}</h1>
                <audio
                  id={`hoverAudio-${product.id}`}
                  className="audio-player"
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
            <Flipper />
            <button className={styles.closePopUp} onClick={closePopup}>
              Close Popup
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Products;
