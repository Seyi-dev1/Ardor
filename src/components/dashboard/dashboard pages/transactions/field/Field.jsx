import React from "react";
import styles from "./field.module.scss";

const Field = ({ isPending, id, currency, amount, type }) => {
  return (
    <div className={styles.main}>
      <span className={styles.field}>INV{id}</span>
      <span className={styles.field}>{type}</span>
      <span className={styles.field}>${amount}</span>
      <span className={styles.field}>{currency}</span>
      {isPending ? (
        <span className={styles.pending}>pending</span>
      ) : (
        <span className={styles.accepted}>accepted</span>
      )}
    </div>
  );
};

export default Field;
