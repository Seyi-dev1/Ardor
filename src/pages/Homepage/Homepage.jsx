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

const Homepage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <Banner />
      <TickerTape
        colorTheme="dark"
        displayMode="adaptive"
      ></TickerTape>
      <CSFTab />
      <WhatWeDo/>
      <WhyUs />
      <StartNow />
      <Plans />
      <Coins />
      <PlatformStats />
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
    </div>
  );
};

export default Homepage;
