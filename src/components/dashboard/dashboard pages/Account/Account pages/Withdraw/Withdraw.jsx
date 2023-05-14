import * as React from "react";
import CButton from "../../../../../CButton/CButton";
import CInput from "../../../../../CInput/CInput";
import "./withdraw.scss";

const Withdrawal = () => {
  const options = [
    { label: "USDT", value: "USDT" },

    { label: "BITCOIN", value: "BITCOIN" },

    { label: "ETHEREUM", value: "ETHEREUM" },
  ];

  const [info, setInfo] = React.useState({
    amount: "",
    address: "",
    currency: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div>
      <Dropdown
        label="Crypto-currency      "
        options={options}
        value={info.currency}
        onChange={handleChange}
        name="currency"
      />

      <CInput
        label="Amount"
        placeholder="amount"
        type="number"
        name="amount"
        value={info.amount}
        handleChange={handleChange}
        small="small"
        disabled={true}
      />
      <CInput
        label="Wallet Address"
        placeholder="wallet address"
        type="text"
        name="address"
        value={info.address}
        handleChange={handleChange}
        small="small"
        disabled={true}
      />
      <CButton text="Withdraw" />
    </div>
  );
};
const Dropdown = ({ label, value, options, onChange, name }) => {
  return (
    <label>
      {label}
      <select
        value={value}
        name={name}
        onChange={onChange}
        style={{ border: "1px solid goldenrod", padding: "2px 10px" }}
      >
        {options.map((option) => (
          <option
            style={{ border: "1px solid goldenrod", padding: "2px 10px" }}
            key={option.label}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Withdrawal;
