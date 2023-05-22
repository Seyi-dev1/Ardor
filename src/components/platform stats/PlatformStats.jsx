import React from "react";
import Count from "./Count";
import "./platformstats.scss";
import { motion } from "framer-motion";
const PlatformStats = () => {
  const counts = [
    {
      id: "001",
      label: "MEMBERS",
      number: "19",
      surfixe: "K",
      duration: "2",
    },
    {
      id: "002",
      label: "VISITORS ONLINE",
      number: "79",
      duration: "2",
    },
    {
      id: "003",
      label: "TOTAL ASSETS",
      number: "230",
      prefix: "$",
      surfixe: "M",
      duration: "2",
    },
    {
      id: "004",
      label: "TOTAL TRADES",
      number: "155",
      surfixe: "K",
      duration: "2",
    },
  ];
  return (
    <motion.div
    initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: [-70, 0], opacity: 1 }}
    className="platformstats">
      <span className="stat_title">Platform Statistics</span>
      <span className="stat_subtitle">
        Live heat statistics on the platform.
      </span>

      <div className="stats">
        {counts.map((count) => (
          <Count key={count.id} {...count} />
        ))}
      </div>
    </motion.div>
  );
};

export default PlatformStats;
