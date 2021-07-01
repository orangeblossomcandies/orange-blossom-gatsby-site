import React from "react";
import * as styles from "./mainSection.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { useViewportScroll, motion, useTransform } from "framer-motion";

const MainSection = () => {
  const { scrollY } = useViewportScroll();
  const animateY = useTransform(scrollY, [0, 1200], [0, -400]);
  return (
    <div className={styles.mainSectionWrapper}>
      <div className={styles.logoWrapper}>
        <StaticImage
          src="../assets/hero.png"
          alt="Orange Blossom Logo"
          caption="Orange Blossom Logo"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
      <div className={styles.textOverlay}>
        <motion.div style={{ y: animateY, x: 0 }}>SCROLL</motion.div>
        <motion.div style={{ y: animateY, x: 0 }}>EST. 2020</motion.div>
      </div>
    </div>
  );
};

export default MainSection;
