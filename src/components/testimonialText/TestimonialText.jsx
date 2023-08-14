import styles from "./testimonialText.module.scss";
import React from "react";
import quotes from "../../Images/icons8-double-quotes-100.png";

const TestimonialText = ({ text, image, name, work }) => {
  return (
    <div className={styles.testimonialText}>
      <div className={styles.speech}>
        <div className={styles.quotes}>
          <img src={quotes} alt="quotes" />
        </div>
        <p>{text}</p>
      </div>
      <div className={styles.person}>
        <div className={styles.details}>
          <div className={styles.name}>
            <p>{name}</p>
          </div>
          <div className={styles.title}>
            <p>{work}</p>
          </div>
        </div>
        <img className={styles.image} src={image} alt={name} />
      </div>
    </div>
  );
};

export default TestimonialText;
