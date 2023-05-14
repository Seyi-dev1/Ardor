import React from "react";
import "./coins.scss";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiTether } from "react-icons/si";

const Coins = () => {
  return (
    <div className="coins">
      <span className="coins_title">WE ACCEPT</span>
      <div className="coins_con">
        <FaBitcoin className="coin" />
        <FaEthereum className="coin" />
        <SiLitecoin className="coin" />
        <SiTether className="coin" />
      </div>
    </div>
  );
};

export default Coins;
