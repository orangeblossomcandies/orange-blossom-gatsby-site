import React from "react";
import * as styles from "./panel.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Panel = ({ color, heading, subheading, panelText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <StaticImage
          src={"../images/shake.png"}
          alt={"Orange Blossom Speciality Shake"}
        />
      </div>
      <div
        className={styles.content}
        style={{
          backgroundColor: color,
        }}
      >
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        <p>{panelText}</p>
      </div>
    </div>
  );
};

export default Panel;
