import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const GalleryCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      home: sanityHome {
        gallery {
          _key
          alt
          asset {
            _id
          }
        }
      }
    }
  `);
  const home = (data || {}).home;
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
        {home.gallery.map((image) => (
          <img
            key={image._key}
            src={imageUrlFor(buildImageObj(image))
              .width(300)
              .height(300)
              .auto("format")}
            alt={image.alt}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default GalleryCarousel;
