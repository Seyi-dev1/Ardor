import React from "react";
import "./withdraw.scss";
import CInput from "../../../../../CInput/CInput";
import CButton from "../../../../../CButton/CButton";

const Withdraw = () => {
  const [details, setDetails] = React.useState({
    fullName: "",
    bankName: "",
    accountNumber: "",
    amount: "",
    routeNumber: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setDetails({
        fullName: "",
        bankName: "",
        accountNumber: "",
        amount: "",
        routeNumber: "",
      });

      const approve = prompt(
        `Withdrawal of funds, amount: ${details.amount}, Recipient: ${details.fullName} ${details.accountNumber} ${details.bankName} ${details.routeNumber}, Enter PIN to continue:`
      );
      if (approve === "1980") {
        alert("Correct pin, transaction now under review.");
      } else {
        alert("incorrect Pin!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="withdraw">
      <h3 className="title">Withdraw</h3>
      <form onSubmit={handleSubmit} className="form">
        <CInput
          type="text"
          name="fullName"
          value={details.fullName}
          required={true}
          id="fullName"
          label="Account Name"
          handleChange={handleChange}
          placeholder="Account Name"
        />
        <CInput
          type="text"
          name="bankName"
          value={details.bankName}
          required={true}
          id="bankName"
          label="Bank Name"
          placeholder="Bank name"
          handleChange={handleChange}
        />
        <CInput
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          value={details.accountNumber}
          required={true}
          id="accountNumber"
          label="Account Number"
          handleChange={handleChange}
        />
        <CInput
          type="number"
          name="amount"
          value={details.amount}
          required={true}
          id="amount"
          label="Amount"
          placeholder="Amount"
          handleChange={handleChange}
        />
        <CInput
          type="number"
          name="routeNumber"
          value={details.routeNumber}
          required={true}
          id="routeNumber"
          label="Routing"
          handleChange={handleChange}
          placeholder="Routing"
        />
        <CButton text="Pay" />
      </form>
    </div>
  );
};

export default Withdraw;
