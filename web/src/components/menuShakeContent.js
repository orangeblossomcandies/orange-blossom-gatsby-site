import React from "react";
import * as styles from "./menuShakeContent.module.css";

const MenuShakeContent = ({
  shakePrice,
  specialtyShakePrice,
  shakeFlavors,
}) => {
  return (
    <section className={styles.container}>
      <h2>
        Milkshakes <span className={styles.price}>{shakePrice}</span>
      </h2>
      <h2>
        Specialty Shakes{" "}
        <span className={styles.price}>{specialtyShakePrice}</span>
      </h2>
      <article className={styles.flavorContainer}>
        {shakeFlavors.map((flavor) => (
          <div key={flavor._key} className={styles.flavorWrapper}>
            <h3>{flavor.title}</h3>
            <p>{flavor.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default MenuShakeContent;
