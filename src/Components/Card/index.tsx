import React, { useState, useRef } from "react";
import styles from "./Card.module.scss";
import cart from "../../itemsToUse/cart.png";
import vova from "../../itemsToUse/vovanotforsale.png";

export default function Card() {
  const [xRotation, setXRotation] = useState<number>(0);
  const [yRotation, setYRotation] = useState<number>(0);
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const purchaseRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const { offsetWidth: width, offsetHeight: height } = card;
    const {
      nativeEvent: { offsetX, offsetY },
    } = event;
    const x = offsetX - width / 2;
    const y = offsetY - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }

  function handleMouseEnter() {}

  function handleMouseLeave() {}

  function handlePurchaseClick() {
    setIsPurchased((prevState) => !prevState);
  }

  return (
    <div
      className={styles.card}
      ref={cardRef}
      style={{
        transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={isPurchased ? vova : cart}
        alt="Nike-Shoe"
        className="sneaker-img"
        height="350px"
      />
      <h1 className="title" ref={titleRef}>
        Lazy Surf Bag
      </h1>
      <p ref={descRef}>{isPurchased ? "Vova is not for sale" : "cool bag"}</p>
      <div className="button-box" ref={purchaseRef}>
        <button className="purchase" onClick={handlePurchaseClick}>
          {isPurchased ? "Vova can't be purchased" : "Purchase"}
        </button>
      </div>
    </div>
  );
}
