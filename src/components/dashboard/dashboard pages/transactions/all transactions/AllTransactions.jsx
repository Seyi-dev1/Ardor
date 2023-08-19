import styles from "./allTransactions.module.scss";
import React from "react";
import Field from "../field/Field";
const AllTransactions = () => {
  const user = window.localStorage.getItem("user");
  const { deposits } = JSON.parse(user);

  return (
    <div className={styles.main}>
      <span className={styles.title}>Transactions history</span>
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

export default AllTransactions;
