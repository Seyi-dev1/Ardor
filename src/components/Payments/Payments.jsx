import React from "react";
import styles from "./payment.module.scss";

const Payments = () => {
  const options = [
    { label: "BITCOIN", value: "BITCOIN" },

    { label: "ETHEREUM", value: "ETHEREUM" },
  ];

  const [info, setInfo] = React.useState({
    amount: "",
    address: "",
    currency: "",
  });
  const [display, setDisplay] = React.useState({
    page: "wallet",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handleDisplay = (event) => {
    const { name, value } = event.target;
    setDisplay((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  console.log(display);

  return (
    <div className={styles.main}>
      {display.page === "wallet" && (
        <div className={styles.wallet}>
          <span className={styles.text}>Select Wallet</span>
          <select
            value={info.currency}
            name="currency"
            onChange={handleChange}
            className={styles.dropdown}
          >
            {options.map((option) => (
              <option
                className={styles.option}
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <button
            value="amount"
            name="page"
            onClick={handleDisplay}
            className={styles.btn}
          >
            Deposit Amount
          </button>
        </div>
      )}
      {display.page === "amount" && (
        <div className={styles.amount}>
          <span className={styles.text}>Select Amount</span>
          <input
            value={info.amount}
            name="amount"
            onChange={handleChange}
            className={styles.input}
            placeholder="amount in $"
          />
          <button
            value="details"
            name="page"
            onClick={handleDisplay}
            className={styles.btn}
          >
            Deposit Amount
          </button>
        </div>
      )}
      {display.page === "details" && (
        <div className={styles.details}>
          <div className={styles.title_con}>
            <span className={styles.text}>Trading Account Details</span>
          </div>
          <div className={styles.companyDetails}></div>
          <div className={styles.items}></div>
          <div className={styles.item}></div>
          <div className={styles.total_con}></div>
          <div className={styles.btn_con}></div>
          <div className={styles.footer}></div>
        </div>
      )}
    </div>
  );
};

export default Payments;
