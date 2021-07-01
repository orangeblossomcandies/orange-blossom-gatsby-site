import React from "react";
import * as styles from "./navBar.module.css";
import { Link } from "gatsby";
import { MdMenu } from "react-icons/md";

const navBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.contactWrapper}>
        <Link to="/">ORANGE BLOSSOM</Link>
      </div>
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
      <div className={styles.mobileIconWrapper}>
        <MdMenu className={styles.mobileIcon} />
      </div>
    </nav>
  );
};

export default navBar;
