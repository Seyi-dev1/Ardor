import React from "react";
import styles from "./warning.module.scss";
import { AiOutlineWarning } from "react-icons/ai";

const Warning = () => {
  return (
    <div className={styles.main}>
      <AiOutlineWarning className={styles.icon} />
      <span className={styles.text}>
        Warning! please do not share your login credentials, we will never call
        you to ask for your login details.
      </span>
    </div>
  );
};

export default Warning;
