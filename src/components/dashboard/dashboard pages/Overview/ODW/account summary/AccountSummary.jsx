import "./accountSummary.scss";
import { useState } from "react";
import { MdEmail } from "react-icons/md";

const AccountSummary = () => {
  const [packageModal, setPackageModal] = useState(false);
  const user = window.localStorage.getItem("user");
  const closeModal = () => {
    setTimeout(() => {
      setPackageModal(false);
      alert("Success, package purchase pending approval!");
    }, 3000);
  };
  const {
    email,
    firstName,
    lastName,
    maintenanceFeeDue,
    profitBalance,
    totalDeposit,
    bonus,
  } = JSON.parse(user);
  return (
    <div className="summary">
      <div className="child first">
        <div className="personal">
          <div className="initials">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </div>
          <div className="details">
            <div className="name">
              {firstName} {lastName}
            </div>
            <div className="email">
              <div>
                <MdEmail className="icon" />
              </div>
              <div>{email}</div>
            </div>
          </div>
        </div>
        <div className="bonus">
          <div className="title">Total Bonus</div>
          <div className="value">{bonus} USD</div>
        </div>
        <div className="bonus">
          <div className="title">Pending Deposits</div>
          <div className="value">0 USD</div>
        </div>
        <div className="bonus">
          <div className="title">Pending withdrawals</div>
          <div className="value">0 USD</div>
        </div>
      </div>
      <div className="child second">
        <div className="heading">
          <h3>Wallet</h3>
        </div>
        <div className="balance">
          <div className="text">Available Balance</div>
          <div className="value">{profitBalance} USD</div>
        </div>
        <div className="balance">
          <div className="text">Total Deposits</div>
          <div className="value">{totalDeposit} USD</div>
        </div>
        <div className="balance">
          <div className="text">Total Withdrawal</div>
          <div className="value">0 USD</div>
        </div>
        <div className="buttons">
          <button className="btn one" onClick={() => setPackageModal(true)}>
            Buy Package
          </button>
        </div>
      </div>
      <div className="child third">
        <div className="balance">
          <div className="text">Total Profit</div>
          <div className="value">{profitBalance} USD</div>
        </div>
      </div>
      <div className="child fourth">
        <div className="balance">
          <div className="text">Total Charge</div>
          <div className="value">{maintenanceFeeDue} USD</div>
        </div>
      </div>
      {packageModal && (
        <div className="modal">
          <span className="text">Select Package</span>
          <select name="currency" className="dropdown">
            <option className="option">
              Tier 1($1,000-10,000, min 2.3% ROI)
            </option>
            <option className="option">
              Tier 2($10,000-50,000, min 3.3% ROI)
            </option>
            <option className="option">
              Tier 3($50,000-100,000, min 4.3% ROI)
            </option>
            <option className="option">
              Tier 4($100,000-5,000,000, min 10.5% ROI)
            </option>
          </select>
          <button className="btn" onClick={() => closeModal()}>
            Buy Package
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountSummary;
