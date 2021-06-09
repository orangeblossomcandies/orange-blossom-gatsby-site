import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { StaticImage } from "gatsby-plugin-image";

const galleryCarousel = () => {
  return (
    <section>
      <Carousel
        plugins={[
          "infinite",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
        ]}
        itemWidth={400}
      >
        <StaticImage src="../assets/cups.png" width={400} />
        <StaticImage src="../assets/oranges.png" width={400} />
        <StaticImage src="../assets/chocolates.png" width={400} />
        <StaticImage src="../assets/candies.png" width={400} height={400} />
        <StaticImage src="../assets/popcorn.png" width={400} />
      </Carousel>
    </section>
  );
};

export default galleryCarousel;
