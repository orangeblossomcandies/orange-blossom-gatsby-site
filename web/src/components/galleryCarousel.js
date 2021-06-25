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
        itemWidth={300}
      >
        <StaticImage src="../assets/cups.png" width={300} />
        <StaticImage src="../assets/oranges.png" width={300} />
        <StaticImage src="../assets/chocolates.png" width={300} />
        <StaticImage src="../assets/candies.png" width={300} height={300} />
        <StaticImage src="../assets/popcorn.png" width={300} />
      </Carousel>
    </section>
  );
};

export default galleryCarousel;
