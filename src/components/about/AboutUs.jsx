import React from "react";
import "./aboutus.scss";
import TextTemplate from "./text template/TextTemplate";
import { FaFlag, FaBook, FaLeaf } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="aboutPage">
      <div className="heading">
        <h1>
          spearheading financial market since{" "}
          <span className="underline">day one</span>
        </h1>
      </div>
      <div className="texts">
        <TextTemplate
          icon={<FaFlag className="pic" />}
          heading={"Culture"}
          text={
            "With our raw spreads starting from 0.0 pips, ultra-fast execution of orders, liquidity from the world’s biggest banks, direct access to Equinix Servers in New York and Asia and a no-dealing desk system, our clients enjoy some of the best trading conditions in the industry."
          }
        />
        <TextTemplate
          icon={<FaBook className="pic" />}
          heading={"Philosophy"}
          text={
            "We are pleased to provide our clients with what is arguably one of the best client portals in the industry. With a user-friendly interface, superior user-experience, a full range of advanced functionalities and an intuitive and easy-to-use dashboard."
          }
        />
        <TextTemplate
          icon={<FaLeaf className="pic" />}
          heading={"History"}
          text={
            "Referred to as half Wall Street and half Silicon Valley, we are a tech-inspired multi-asset broker focused firmly on empowering you, our clients, with institutional-grade trading conditions, premium education and cut-through market analysis."
          }
        />
      </div>
    </div>
  );
};

export default AboutUs;
