import React from "react";
import * as styles from "./carouselCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const carouselCard = ({ imageSrc, name, body }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src={imageSrc} alt="Google review avatar" />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.rating}>
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
      </div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default carouselCard;
