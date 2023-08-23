import React from "react";
import styles from "./Modal.module.scss";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const popupRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content} ref={popupRef}>
        <h2>Place Your Order</h2>
        <button className={styles.modal_close_button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderModal;