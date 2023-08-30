import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './FormStyles.module.scss';
import vid from "../../itemsToUse/cashout.mp4"; 
import { clearCart } from "../../Redux/cartSlice/cart";
import { useDispatch } from "react-redux";

interface IFormInput {
  firstName: string;
  mailInput: string; 
  delivery: string;
}

interface FormProps {
  onClose: () => void;
}

function Form({ onClose }: FormProps) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<IFormInput>();
  
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoEnd = () => {
    setShowVideo(false);
    dispatch(clearCart());
    onClose();
  };

  const onSubmit: SubmitHandler<IFormInput> = () => {
    handleBuyClick();
  };

  const handleBuyClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>Твоё имя, красавец</label>
        <input className={styles.nameInput} {...register("firstName")} />
        <label className={styles.label}>Почта</label>
        <input className={styles.mailInput} {...register("mailInput")} />
        <label>Доставка</label>
        <select {...register("delivery")}>
          <option value="Доставка">Заберу самостоятельно</option>
          <option value="Gojek">Доставка gojek</option>
          <option value="Shipping">Отправка в другую страну</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {showVideo && (
        <div className={styles.videoOverlay}>
          <video
            className={styles.video}
            controls
            autoPlay
            onEnded={handleVideoEnd}
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

export default Form;
