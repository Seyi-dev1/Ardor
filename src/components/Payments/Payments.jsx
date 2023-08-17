import React from "react";
import styles from "./payment.module.scss";
import { useNavigate } from "react-router-dom";
const Payments = () => {
  const navigate = useNavigate();
  const options = [
    { label: "BITCOIN", value: "BITCOIN" },

    { label: "ETHEREUM", value: "ETHEREUM" },
  ];

  const [info, setInfo] = React.useState({
    amount: 0,
    address: "",
    currency: "BITCOIN",
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
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const thisMonth = month[d.getMonth()];
  const thisYear = d.getFullYear();
  const day = d.getDate();
  const milliseconds = d.getMilliseconds();

  const user = window.localStorage.getItem("user");

  const { email } = JSON.parse(user);

  const bitcoin = "bitcoin address";

  const ethereum = "ethereum address";

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
          <div className={styles.companyDetails}>
            <div className={styles.one}>
              <span>Thompson Central</span>
              <span>1020 Forest Avenue,</span>
              <span>San Francisco, CA.</span>
              <span>USA.</span>
            </div>
            <div className={styles.two}>
              <span>
                Acccount/{thisMonth}/{thisYear}
              </span>
              <span>
                {day} {thisMonth}, {thisYear}.
              </span>
              <span>
                INV{milliseconds}
                {milliseconds}
                {milliseconds}
              </span>
            </div>
          </div>
          <div className={styles.items}>
            <span>ITEM INFO</span>
            <span>AMOUNT</span>
          </div>
          <div className={styles.item}>
            <span>Account Deposit</span>
            <div className={styles.acc_details}>
              <span>{email}</span>
              <span>${info.amount}</span>
            </div>
          </div>
          <div className={styles.total_con}>
            <span>Total</span>
            <span className={styles.big_text}>${info.amount}</span>
          </div>

          <div className={styles.btn_con}>
            <button
              className={styles.btn}
              value="payment"
              name="page"
              onClick={handleDisplay}
            >
              Make Payment
            </button>
          </div>
          <div className={styles.footer}>
            <span>
              * Make all {info.currency.toLowerCase()} payable to Thompsons
              Central.
            </span>
            <span>* Payment System: {info.currency.toLowerCase()} Only</span>
            <span>
              * If you have any questions concerning your account, contact
              info@thompsonscentral.com
            </span>
          </div>
        </div>
      )}
      {display.page === "payment" && (
        <div className={styles.payment}>
          <div className={styles.top}>
            <span>
              Make Deposit to your unique Thompsons Central Wallet Address below
            </span>
          </div>
          <div className={styles.bottom}>
            <span>
              To make payment, of ${info.amount} send {info.amount} USD to the
              following account wallet address
            </span>
            <span>--crypto address-- or scan the QR code.</span>

            {info.currency === "BITCOIN" && (
              <div className={styles.copy_con}>
                <span className={styles.copy_text}>{bitcoin}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(bitcoin);
                  }}
                  className={styles.copy}
                >
                  Copy
                </button>
              </div>
            )}
            {info.currency === "ETHEREUM" && (
              <div className={styles.copy_con}>
                <span className={styles.copy_text}>{ethereum}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(ethereum);
                  }}
                  className={styles.copy}
                >
                  Copy
                </button>
              </div>
            )}
            <button
              className={styles.confirm}
              onClick={() => navigate("/dashboard/account")}
            >
              Confirm Payment
            </button>
            <span>
              * As soon as your bitcoin deposit is made and received in your
              account, your trading commence immediately.
            </span>
            <span>
              * Click the Confirm Payment buton after sending your bitcoins to
              complete deposit
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;
