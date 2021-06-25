import React from "react";
import * as styles from "./reviewCarousel.module.css";
import CarouselCard from "../components/carouselCard";
import placeholder from "../assets/placeholder-avatar.png";
import placeholder2 from "../assets/placeholder-avatar2.png";
import placeholder3 from "../assets/placeholder-avatar3.png";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const reviewCarousel = () => {
  return (
    <Carousel
      plugins={[
        "infinite",
        "centered",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 3,
          },
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="5x"
                className={styles.arrow}
              />
            ),
            arrowRight: (
              <FontAwesomeIcon
                icon={faAngleRight}
                size="5x"
                className={styles.arrow}
              />
            ),
            addArrowClickHandler: true,
          },
        },
      ]}
      itemWidth={400}
      breakpoints={{
        1100: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ],
        },
      }}
    >
      <CarouselCard
        imageSrc={placeholder}
        name="Brandi Webb"
        body="Such a cute sweets shop. My daughter and I really enjoyed teh truffles
            and the smoothies. We also brought a chocolate bomb home and we can't
            wait! It looks so yummy! Great sweets and very friendly staff! Highly
            recommended!"
      />
      <CarouselCard
        imageSrc={placeholder2}
        name="Andrew Pitts"
        body="This place was awesome! The woman working was very helpful and pleasant. The 
            candies and ice cream selection was great. They had a little something for everyone! 
            I ordered a Lavender Cream milkshake and it was one of the most delicious..."
      />
      <CarouselCard
        imageSrc={placeholder3}
        name="Frances Garcia"
        body="Such a cute and sweet shop. The staff is friendly and the treats are great! Would 
            definitely recommend!"
      />
    </Carousel>
  );
};

export default reviewCarousel;
