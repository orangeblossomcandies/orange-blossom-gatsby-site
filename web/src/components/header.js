import React from "react";
import * as styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.address}>
        16937 Lakeside Dr. Montverde, FL 34756
      </div>
      <div className={styles.hours}>
        Hours of operation: Monday-wednesday 12-8pm | Thursday 12-6pm |
        Friday-saturday closed | Sunday 12-6pm
      </div>
      <div className={styles.flavorOfWeek}>
        Flavor of the week: Key Lime Pie
      </div>
    </div>
  );
};

export default Header;
