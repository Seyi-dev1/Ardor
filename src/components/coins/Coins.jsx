import React from "react";
import "./coins.scss";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiTether } from "react-icons/si";

const Coins = () => {
  return (
    <div className="coins">
      <span className="coins_title">WE ACCEPT</span>
      <div className="coins_con">
        <FaBitcoin className="coin coin1" />
        <FaEthereum className="coin coin2" />
        <SiLitecoin className="coin coin3" />
        <SiTether className="coin coin4" />
      </div>
    </div>
  );
};

export default Coins;
