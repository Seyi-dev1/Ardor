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

const Homepage = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <Banner />
      <TickerTape colorTheme="light" displayMode="adaptive"></TickerTape>
      <WhatWeDo />
      <WhyUs />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <CButton
          text="Get Started"
          background="black"
          handleClick={() => navigate("/signup")}
        />
      </div>
      <PlatformStats />
      <StartNow />
      <Plans />
      <CSFTab />
      <Coins />
      <Ticker colorTheme="light"></Ticker>
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
    </div>
  );
};

export default Homepage;
