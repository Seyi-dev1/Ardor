import React from "react";
import styles from "./payment.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { paymentStart } from "../../redux/payment/paymentReducer";

const Payments = () => {
  const User = window.localStorage.getItem("user");

  const { email, id, bitcoin, ethereum } = JSON.parse(User);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = [
    { label: "BITCOIN", value: "BITCOIN" },

    { label: "ETHEREUM", value: "ETHEREUM" },
  ];

  const [info, setInfo] = React.useState({
    amount: "",
    user: id,
    id: "",
    isPending: true,
    currency: "BITCOIN",
    type: "Deposit",
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
  // setInfo((prev) => {
  //   return {
  //     ...prev,
  //     id: milliseconds,
  //   };
  // });
  info.id = milliseconds;

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
          <span className={styles.text}>Amount(USD)</span>
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
              <span>Ardor Finance</span>
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
              * Make all {info.currency.toLowerCase()} payable to Ardor Finance.
            </span>
            <span>* Payment System: {info.currency.toLowerCase()} Only</span>
            <span>
              * If you have any questions concerning your account, contact
              info@ardorfinance.com
            </span>
          </div>
        </div>
      )}
      {display.page === "payment" && (
        <div className={styles.payment}>
          <div className={styles.top}>
            <span>
              Make Deposit to your unique Ardor Finance Wallet Address below
            </span>
          </div>
          <div className={styles.bottom}>
            <span>
              To make payment of ${info.amount}, send {info.amount} USD to the
              this unique {info.currency} wallet address
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
              // onClick={() => navigate("/dashboard/account")}
              onClick={() =>
                dispatch(paymentStart(info)) && navigate("/dashboard/account")
              }
            >
              Confirm Payment
            </button>
            <span className={styles.networkWarning}>
              * Warning: Please make sure to send BITCOIN via the BITCOIN
              blockchain network only & ETHEREUM via the ETHEREUM (ERC-20)
              blockchain network only as you will lose your funds if you send to
              the wrong network.
            </span>
            <span className={styles.networkWarning}>
              * Please pay {info.currency} invoices in full to ensure the funds
              can be added to your balance.
            </span>
            <span>
              * As soon as your {info.currency} deposit is made and received in
              your account, your trading commence immediately.
            </span>
            <span>
              * Click the Confirm Payment button after each deposit to complete
              the current transaction.
            </span>
            <span>
              * It might take up to an hour for funds to become available in
              your account. On rare occasions, it may take up to 24 hours for
              the amount to be credited.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;
