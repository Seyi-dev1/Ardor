import React from "react";
import Banner from "../../components/Banner/Banner";
import "./homepage.scss";
import { TickerTape, Timeline, Ticker } from "react-ts-tradingview-widgets";
import CSFTab from "../../components/CSF tab/CSFTab";
import WhyUs from "../../components/why choose us/WhyUs";
import Coins from "../../components/coins/Coins";
import Plans from "../../components/Plans/Plans";
import PlatformStats from "../../components/platform stats/PlatformStats";
import Testimonials from "../../components/Testimonial/Testimonials";
import Contact from "../../components/contact/Contact";
import StartNow from "../../components/start/StartNow";
import WhatWeDo from "../../components/what we do/WhatWeDo";
import CButton from "../../components/CButton/CButton";
import { useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

const Homepage = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <Banner />
      <TickerTape colorTheme="dark" displayMode="adaptive"></TickerTape>
      <CSFTab />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CButton
          text="Get Started"
          background="black"
          handleClick={() => navigate("/signup")}
        />
      </div>
      <PlatformStats />
      <WhatWeDo />
      <WhyUs />
      <StartNow />
      <Plans />
      <Coins />

      <Ticker colorTheme="dark"></Ticker>
      <Testimonials />
      <Timeline
        colorTheme="light"
        feedMode="market"
        market="stock"
        height={400}
        width="100%"
        displayMode="adaptive"
      ></Timeline>
      <Contact />
      <div className="whatsapp_con">
        <a
          href="https://wa.me/16574272144?text=Hello,%20I%20have%20some%20enquiries,%20my%20name%20is%20____"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp className="whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
