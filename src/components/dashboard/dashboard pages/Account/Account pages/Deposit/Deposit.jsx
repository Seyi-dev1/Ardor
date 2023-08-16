import React from "react";
import "./Deposit.scss";
import BTC from "./bitcoin-3089728_640.jpg";
import ETH from "./ethereum-6874608_640.jpg";
import DepositModal from "./Deposit poppup/DepositModal";
const Deposit = () => {
  return (
    <div className="deposit_con">
      <span className="note">
        Instruction: copy wallet address and deposit assets through any crypto
        selling platform, Binance advisable. <br />
        click "DEPOSIT" to copy wallet address.
      </span>
      <div className="deposit_options">
        <div className="deposit_option">
          <div className="deposit_img_con">
            <img src={BTC} alt="btc" className="deposit_img" />
          </div>
          <div className="deposit_control">
            <span className="deposit_title">Bitcoin</span>
            <DepositModal address="1JZgUCVru1H13CK14vi9gWKEB3p3Jdogqr" />
          </div>
        </div>
        <div className="deposit_option">
          <div className="deposit_img_con">
            <img src={ETH} alt="btc" className="deposit_img" />
          </div>
          <div className="deposit_control">
            <span className="deposit_title">Ethereum</span>
            <DepositModal address="0x2ac6560c177F66871c05AdB8b1055e99E29b52fB" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
