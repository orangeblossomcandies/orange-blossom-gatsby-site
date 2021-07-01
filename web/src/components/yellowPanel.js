import React from "react";
import * as styles from "./yellowPanel.module.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const yellowPanel = ({
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
  const imageVariants = {
    visible: { scale: 1.2 },
    hidden: {
      scale: 1,
    },
  };

  const contentVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InView triggerOnce="true" threshold={0.5}>
          {({ ref, inView }) => (
            <motion.span
              className={styles.contentWrapper}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={contentVariants}
              transition={{ duration: 1, ease: "linear" }}
              ref={ref}
            >
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
            </motion.span>
          )}
        </InView>
      </div>
      <InView triggerOnce="true" threshold={0.2}>
        {({ ref, inView }) => (
          <motion.div
            className={styles.image}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 2, ease: "linear" }}
            ref={ref}
          >
            <GatsbyImage
              image={gatsbyImageData}
              alt={imageAlt}
              caption={imageCaption}
            />
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default yellowPanel;
