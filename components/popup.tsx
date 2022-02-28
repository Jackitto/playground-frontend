import { useEffect, useState } from "react"
import styles from "../styles/Popup.module.css"

const CustomPopup = (props: any) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={styles.overlay}
    >
      <div className={styles.popup}>
        <h2>{props.title}</h2>
        <span className={styles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default CustomPopup;