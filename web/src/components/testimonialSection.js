import React from "react";
import * as styles from "./testimonialSection.module.css";
import { StaticImage } from "gatsby-plugin-image";
import ReviewCarousel from "../components/reviewCarousel";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const TestimonialSection = () => {
  return (
    <section className={styles.wrapper}>
      <InView triggerOnce="true" threshold={0.5}>
        {({ ref, inView }) => (
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: "linear" }}
            ref={ref}
          >
            <div className={styles.contentHeading}>
              <h1>Testimonials & Reviews</h1>
              <StaticImage
                src="../assets/line-black.png"
                alt="black line"
                width={300}
              />
              <h2>What your neighbors say</h2>
            </div>

            <div className={styles.carouselWrapper}>
              <ReviewCarousel />
            </div>
            <a href="https://www.google.com/search?q=orange+blossom+candies+cream&oq=orange+blossom+candi&aqs=chrome.0.69i59j0i433j69i57j35i39j46i175i199j69i60l3.3709j0j7&sourceid=chrome&ie=UTF-8#lrd=0x88e785ca5f28205d:0x1079569ac5ce00d4,1,,,">
              View All
            </a>
          </motion.div>
        )}
      </InView>
    </section>
  );
};

export default TestimonialSection;
