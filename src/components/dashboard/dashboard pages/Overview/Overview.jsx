import React from "react";
import styles from "./overview.module.scss";
import ODWTab from "./ODW/ODWtab";
const Overview = () => {
  return (
    <div className={styles.main}>
      <ODWTab />
    </div>
  );
};

export default Overview;
