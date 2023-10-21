import React from "react";
import styles from "./leaderboard.module.scss";
import customer1 from "../../Images/customer1.jpg";
import customer2 from "../../Images/customer2.jpg";
import customer3 from "../../Images/customer 3.jpg";
import customer4 from "../../Images/customer4.jpg";
import TestimonialText from "../testimonialText/TestimonialText";
const Leaderboard = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles.main}>
      <div className={styles.top_con}>
        <h3 className={styles.title}>Our top 1% investors.</h3>
        <div className={styles.Leaderboard_con}>
          <TestimonialText
            image={customer1}
            text="Thanks to this superb Trading platform, I've not only gained valuable knowledge about trading and stocks but also witnessed substantial profits of over $700k. Their strategies and recommendations have led me to make smart investment choices, resulting in a remarkable 300% profit increase in just six months. I'm truly grateful for their expertise and support on this profitable journey."
            name="kevin Prince"
            work="Business Owner"
          />
          <TestimonialText
            image={customer3}
            text="Joining this platform has been a game-changer for my financial journey. Their expert analysis and personalized guidance have significantly boosted my confidence in trading stocks. With their timely market insights, I've made informed decisions that led to impressive returns. Thank you, for helping me achieve my financial goals!"
            name="周涛 (Zhou Tao)"
            work="Real estate investor"
          />
          <TestimonialText
            image={customer4}
            text="I've been a client of this great platform for over 3 years now, and I can confidently say that their services have had a positive impact on my investment portfolio. While the market can be unpredictable, their insightful analysis and prudent advice have helped me navigate the ups and downs. I've seen a steady growth of around 32% in my profits, which speaks volumes about their expertise in the trading and stocks industry. Thank you, for being a reliable partner in my financial journey."
            name="Camilia Haris"
            work="Business Owner"
          />
          <TestimonialText
            image={customer2}
            text="Being a top client of Ardor Finances, Trading has been a remarkable journey of financial growth and success. Their unparalleled market expertise and personalized strategies have consistently delivered exceptional results. In just under three years, my portfolio has experienced an impressive 40% increase in profits worth over $1m. The team's dedication to my financial goals and their ability to seize lucrative opportunities sets them apart in the trading and stocks industry. Partnering with Ardor finances Team has not only maximized my gains but also deepened my trust in their capabilities."
            name="John Forster"
            work="Hedge fund manager"
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
