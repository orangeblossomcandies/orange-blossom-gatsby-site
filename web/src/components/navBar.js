import React from "react";
import * as styles from "./navBar.module.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.linksWrapper}>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about/">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/menu/">
              Menu
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/contact/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.contactWrapper}>
        <div>(352) 531-1139</div>
        <div>
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.mobileIcon}>
        <FontAwesomeIcon icon={faBars} size="3x" />
      </div>
    </nav>
  );
};

export default navBar;
