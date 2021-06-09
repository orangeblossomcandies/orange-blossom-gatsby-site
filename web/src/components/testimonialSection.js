import React from "react";
import * as styles from "./testimonialSection.module.css";
import { StaticImage } from "gatsby-plugin-image";
import ReviewCarousel from "../components/reviewCarousel";

const testimonialSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.contentHeading}>
          <h1>Testimonials & Reviews</h1>
          <StaticImage src="../assets/line.png" alt="black line" width={300} />
          <h2>What your neighbors say</h2>
        </div>
        <div className={styles.carouselWrapper}>
          <ReviewCarousel />
        </div>
      </div>
    </section>
  );
};

export default testimonialSection;
