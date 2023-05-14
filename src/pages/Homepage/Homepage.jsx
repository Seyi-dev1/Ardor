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

const Homepage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <TickerTape
        colorTheme="light"
        isTransparent="true"
        displayMode="adaptive"
      ></TickerTape>
      <CSFTab />
      <WhyUs />
      <StartNow />
      <Plans />
      <Coins />
      <PlatformStats />
      <Ticker colorTheme="dark"></Ticker>
      <Testimonials />
      <Timeline
        colorTheme="dark"
        feedMode="market"
        market="crypto"
        height={400}
        width="100%"
      ></Timeline>
      <Contact />
    </div>
  );
};

export default Homepage;
