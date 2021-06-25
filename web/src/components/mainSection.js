import React from "react";
import * as styles from "./mainSection.module.css";
import { StaticImage } from "gatsby-plugin-image";

const mainSection = () => {
  return (
    <div className={styles.mainSectionWrapper}>
      <div className={styles.logoWrapper}>
        <StaticImage
          src="../assets/hero.png"
          alt="Orange Blossom Logo"
          caption="Orange Blossom Logo"
          placeholder="blurred"
          width="600"
        />
      </div>
      <div className={styles.textOverlay}>
        <div>SCROLL</div>
        <div>EST. 2020</div>
      </div>
    </div>
  );
};

export default mainSection;
