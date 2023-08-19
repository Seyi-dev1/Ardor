import React from "react";
import "./aboutus.scss";
import TextTemplate from "./text template/TextTemplate";
import { FaFlag, FaBook, FaLeaf } from "react-icons/fa";
import angle from "./images/icons8-triangle-100.png";
import Staff from "./staff/Staff";
import image1 from "../../Images/founder.png";
import image2 from "../../Images/ceo1.png";
import image3 from "../../Images/assistant.png";
import image4 from "../../Images/hr.png";

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
      <div className="professionals">
        <div className="content">
          <div className="header">
            <h2>Trust the Professionals</h2>
          </div>
          <div className="intro">
            <p>
              We are a group of passionate, independent thinkers who never stop
              exploring new ways to improve trading for the self-directed
              investor.
            </p>
          </div>
          <img src={angle} alt="angle" className="angle1" />
          <img src={angle} alt="angle" className="angle2" />
          <img src={angle} alt="angle" className="angle3" />
          <img src={angle} alt="angle" className="angle4" />
          <img src={angle} alt="angle" className="angle5" />
          <img src={angle} alt="angle" className="angle6" />
          <div className="employees">
            <Staff
              image={image1}
              position={"FOUNDER"}
              name={"Charlie Thompson"}
            />
            <Staff
              image={image2}
              position={"CHIEF EXECUTIVE OFFICER"}
              name={"Thompson Tiffany"}
            />
            <Staff
              image={image3}
              position={"EXECUTIVE ASSISTANT"}
              name={"Whitwell Laurel"}
            />
            <Staff
              image={image4}
              position={"HUMAN RESOURCES"}
              name={"Calvin Sinai"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
