import React from "react";
import * as styles from "./bluePanel.module.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import { Link } from "gatsby";

const bluePanel = ({
  imageSrc,
  imageAlt,
  imageCaption,
  heading,
  subheading,
  panelText,
}) => {
  const gatsbyImageData = getGatsbyImageData(
    imageSrc,
    { placeholder: "blurred", layout: "constrained", width: 1920 },
    clientConfig.sanity
  );
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={imageAlt}
          caption={imageCaption}
        />
      </div>
      <div className={styles.content}>
        <h1>{heading}</h1>
        <StaticImage
          src="../assets/line-black.png"
          alt="black line"
          width={300}
        />
        <h2>{subheading}</h2>
        <div className={styles.textContainer}>
          <p>{panelText}</p>
        </div>
        <Link className={styles.link} to="/menu/">
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default bluePanel;
