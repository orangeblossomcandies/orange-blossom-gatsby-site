import React from "react";
import * as styles from "./aboutPanel.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const aboutPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Meet the owners</h1>
        <StaticImage
          src="../assets/line-white.png"
          alt="white line"
          width={300}
        />
        <h2>Tina and Taylor</h2>
        <Link className={styles.link} to="/about/">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default aboutPanel;
