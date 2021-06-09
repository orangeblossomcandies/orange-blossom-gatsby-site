import React from "react";
import * as styles from "./navBar.module.css";
import { Link } from "gatsby";

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
        <div>ICONS</div>
      </div>
    </nav>
  );
};

export default navBar;
