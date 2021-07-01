import React from "react";
import * as styles from "./menuWineContent.module.css";
import { StaticImage } from "gatsby-plugin-image";

const MenuWineContent = ({ bottomHeading, bottomSubheading, bottomText }) => {
  return (
    <section className={styles.container}>
      <h2>{bottomHeading}</h2>
      <StaticImage
        src="../assets/line-black.png"
        alt="Black Line"
        width={300}
      />
      <h3>{bottomSubheading}</h3>
      <p>{bottomText}</p>
    </section>
  );
};

export default MenuWineContent;
