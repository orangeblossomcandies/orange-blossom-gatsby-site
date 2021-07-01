import React from "react";
import * as styles from "./aboutPanel.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useViewportScroll, motion, useTransform } from "framer-motion";

const AboutPanel = () => {
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [1100, 1800], [-700, 0]);
  const x2 = useTransform(scrollY, [1100, 1800], [700, 0]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <motion.h1 style={{ y: 0, x: x1 }}>Meet the owners</motion.h1>
        <StaticImage
          src="../assets/line-white.png"
          alt="white line"
          width={300}
        />
        <motion.h2 style={{ y: 0, x: x2 }}>Tina and Taylor</motion.h2>
        <Link className={styles.link} to="/about/">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default AboutPanel;
