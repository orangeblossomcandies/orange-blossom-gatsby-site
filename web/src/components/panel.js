import React from "react";
import PropTypes from "prop-types";
import * as styles from "./panel.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Panel = ({ color, heading, subheading, panelText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <StaticImage
          src="../images/shake.png"
          alt="Orange Blossom Speciality Shake"
          placeholder="blurred"
        />
      </div>
      <div
        className={styles.content}
        style={{
          backgroundColor: color,
        }}
      >
        <h1>{heading}</h1>
        <StaticImage src="../images/line.png" alt="black line" width={300} />
        <h2>{subheading}</h2>
        <div className={styles.textContainer}>
          <p>{panelText}</p>
        </div>
      </div>
    </div>
  );
};

Panel.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  panelText: PropTypes.string,
};

export default Panel;
