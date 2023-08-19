import styles from "./deposits.module.scss";
import React from "react";
import Field from "../field/Field";

const Deposits = () => {
  const user = window.localStorage.getItem("user");
  const { deposits } = JSON.parse(user);
  return (
    <div className={styles.main}>
      <span className={styles.title}>Deposits history</span>
      {deposits ? (
        <div className={styles.list}>
          {deposits.map((deposit) => (
            <Field key={deposit.id} {...deposit} />
          ))}
        </div>
      ) : (
        <span className={styles.none}>No Data</span>
      )}
    </div>
  );
};

export default Deposits;
