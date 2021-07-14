import React from "react";
import * as styles from "./aboutSection.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const AboutSection = ({ name, role, image, imageAlt, bio }) => {
  const gatsbyImageData = getGatsbyImageData(
    image,
    {
      placeholder: "blurred",
      height: "400",
    },
    clientConfig.sanity
  );
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <article className={styles.contentContainer}>
          <h2>{name}</h2>
          <small>{role}</small>
          <p>{bio}</p>
        </article>
        <article className={styles.imageContainer}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={imageAlt}
            class={styles.bioImg}
          />
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
