import * as React from "react";
import CButton from "../../../../../CButton/CButton";
import CInput from "../../../../../CInput/CInput";
import "./withdraw.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { withdrawalStart } from "../../../../../../redux/payment/withdrawalReducer";

const Withdrawal = () => {
  const User = window.localStorage.getItem("user");

  const { id } = JSON.parse(User);
  const options = [
    { label: "USDT", value: "USDT" },

    { label: "BITCOIN", value: "BITCOIN" },

    { label: "ETHEREUM", value: "ETHEREUM" },
  ];

  const [info, setInfo] = React.useState({
    amount: "",
    address: "",
    user: id,
    id: `${Math.floor(100000 + Math.random() * 900000)}`,
    currency: "USDT",
    isPending: true,
    type: "Withdrawal",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  console.log(info);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <select
        value={info.currency}
        name="currency"
        onChange={handleChange}
        className="dropdown"
      >
        {options.map((option) => (
          <option className="option" key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <CInput
        label="Amount"
        placeholder="amount"
        type="number"
        name="amount"
        value={info.amount}
        handleChange={handleChange}
        small="small"
      />
      <CInput
        label="Wallet Address"
        placeholder="wallet address"
        type="text"
        name="address"
        value={info.address}
        handleChange={handleChange}
        small="small"
      />
      <CButton
        text="Withdraw"
        handleClick={() =>
          dispatch(withdrawalStart(info)) && navigate("/dashboard/account")
        }
      />
    </div>
  );
};

export default Withdrawal;
