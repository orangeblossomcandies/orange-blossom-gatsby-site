import React from "react";
import * as styles from "./mainSection.module.css";
import { StaticImage } from "gatsby-plugin-image";

const mainSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridWrapper}>
        <div className={styles.scrollText}>SCROLL</div>
        <div className={styles.logoWrapper}>
          <StaticImage
            src="../images/squareLogo.png"
            alt="Orange Blossom Logo"
            caption="Orange Blossom Logo"
            placeholder="blurred"
          />
        </div>
        <div className={styles.estText}>EST. 2020</div>
      </div>
    </div>
  );
};

export default mainSection;
