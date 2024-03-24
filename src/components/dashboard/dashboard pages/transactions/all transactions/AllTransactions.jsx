import styles from "./allTransactions.module.scss";
import React from "react";
import Field from "../field/Field";
const AllTransactions = () => {
  const user = window.localStorage.getItem("user");
  const { deposits, withdrawals } = JSON.parse(user);

  const allTransactions = deposits.concat(withdrawals);
  return (
    <div className={styles.main}>
      <span className={styles.title}>Transactions history</span>
      {allTransactions ? (
        <div className={styles.list}>
          {allTransactions.map((transaction) => (
            <Field key={transaction.id} {...transaction} />
          ))}
        </div>
      ) : (
        <span className={styles.none}>No Data</span>
      )}
    </div>
  );
};

export default AllTransactions;
