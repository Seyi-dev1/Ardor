import React from "react";
import styles from "./charts.module.scss";

import {
  MarketOverview,
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const Charts = () => {
  return (
    <div className={styles.main}>
      <MarketOverview
        colorTheme="light"
        height={500}
        width="100%"
        showFloatingTooltip
      ></MarketOverview>
      <AdvancedRealTimeChart
        colorTheme="light"
        height={500}
        width="100%"
        showFloatingTooltip
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default Charts;
