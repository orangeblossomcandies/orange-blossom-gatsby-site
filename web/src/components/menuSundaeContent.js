import React from "react";
import * as styles from "./menuSundaeContent.module.css";

const MenuSundaeContent = ({ sundaePrice, sundaeFlavors }) => {
  return (
    <section className={styles.container}>
      <h2>
        Specialty Sundaes <span className={styles.price}>{sundaePrice}</span>
      </h2>
      <article className={styles.flavorContainer}>
        {sundaeFlavors.map((flavor) => (
          <div key={flavor._key} className={styles.flavorWrapper}>
            <h3>{flavor.title}</h3>
            <p>{flavor.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default MenuSundaeContent;
