import Field from "../field/Field";
import styles from "./withdrawals.module.scss";
import React from "react";

const Withdrawals = () => {
  const user = window.localStorage.getItem("user");
  const { withdrawals } = JSON.parse(user);
  return (
    <div className={styles.main}>
      <span className={styles.title}>Withdrawals history</span>
      {withdrawals ? (
        <div className={styles.list}>
          {withdrawals.map((withdrawal) => (
            <Field key={withdrawal.id} {...withdrawal} />
          ))}
        </div>
      ) : (
        <span className={styles.none}>No Data</span>
      )}
    </div>
  );
};

export default Withdrawals;
