import React from "react";
import * as styles from "./menuBlueSection.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const MenuBlueSection = ({ imageSrc, imageAlt, imageCaption, children }) => {
  const gatsbyImageData = getGatsbyImageData(
    imageSrc,
    { placeholder: "blurred", layout: "constrained", width: 1920 },
    clientConfig.sanity
  );
  return (
    <section className={styles.container}>
      <article className={styles.imageWrapper}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={imageAlt}
          caption={imageCaption}
        />
      </article>
      <article className={styles.contentWrapper}>{children}</article>
    </section>
  );
};

export default MenuBlueSection;
