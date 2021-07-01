import React from "react";
import * as styles from "./menuIceCreamContent.module.css";

const menuIceCreamContent = ({
  flavorOfTheMonth,
  iceCreamSizes,
  iceCreamFlavors,
}) => {
  return (
    <section className={styles.container}>
      <h2>Ice Cream</h2>
      <h3>Flavor of the month: {flavorOfTheMonth}</h3>
      <div className={styles.sizesWrapper}>
        {iceCreamSizes.map((size) => (
          <div key={size._key} className={styles.size}>
            <span className={styles.sizeName}>{size.title}</span>
            <span className={styles.sizePrice}>{size.price}</span>
          </div>
        ))}
      </div>
      <article className={styles.flavorWrapper}>
        <ul>
          {iceCreamFlavors.map((flavor, index) => (
            <li key={index}>{flavor}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default menuIceCreamContent;
