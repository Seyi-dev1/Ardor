import React, { useEffect, useState } from "react";
import "./count.scss";
import { motion } from "framer-motion";


const Count = ({ label, number, duration, prefix, surfixe }) => {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [number, duration]);
  return (
    <motion.div
    initial={{ x: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
    className="count">
      <span className="number">
        {prefix}
        {count}
        {surfixe}+
      </span>
      <span className="label">{label}</span>
    </motion.div>
  );
};

export default Count;
