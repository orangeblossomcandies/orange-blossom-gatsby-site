import React from "react";
import * as styles from "./menuDrinkContent.module.css";

const menuDrinkContent = ({ drinkVarieties }) => {
  return (
    <section className={styles.container}>
      <h2>Drinks</h2>
      <article className={styles.drinkVarieties}>
        {drinkVarieties.map((drink) => (
          <div key={drink._key} className={styles.drinkWrapper}>
            <h3>
              {drink.title} <span className={styles.price}>{drink.price}</span>
            </h3>
            <p>{drink.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default menuDrinkContent;
