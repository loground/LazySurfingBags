import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import styles from './FormStyles.module.scss';
import vid from "../../itemsToUse/cashout.mp4"; 


interface IFormInput {
  firstName: string;
  mailInput: string; 
  delivery: string;
}

function Form({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleBuyClick();
    console.log(data);
  };

  const [showVideo, setShowVideo] = React.useState(false);

  const handleVideoEnd = () => {
    setShowVideo(false);
    onClose();
  };

  const handleBuyClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={styles.formWrapper}>
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
      <form onSubmit={handleSubmit(onSubmit)} className={showVideo ? styles.hidden : ""}>
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
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
