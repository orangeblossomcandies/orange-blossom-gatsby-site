import React from "react";
import Header from "./header";
import NavBar from "./navBar";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <div>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <StaticImage src="../assets/roundlogo.png" width={200} height={200} />
      </div>

      <div className={styles.container}>
        <h3>About</h3>
        <p>
          Orange Blossom Candies & Cream is a mother and daughter owned ice
          cream parlor and candy shop located in Montverde just beside Montverde
          Academy.
        </p>
      </div>
      <div className={styles.container}>
        <h3>Address</h3>
        <p>
          <span>16937 Lakeside Dr</span>
          <span>Montverde, FL</span>
          <span>34756</span>
        </p>
      </div>
      <div className={styles.container}>
        <h3>Contact</h3>
        <p>
          <span>Orangeblossomcandy@gmail.com</span>
          <span>TEL: (352) 531-1139</span>
          <span>
            <a href="https://facebook.com">
              <FontAwesomeIcon
                icon={faFacebookF}
                color="#db7342"
                className={styles.facebookIcon}
                size="2x"
              />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.instaIcon}
                color="#db7342"
                size="2x"
              />
            </a>
          </span>
        </p>
      </div>
      <div className={styles.container}>
        <h3>Hours</h3>
        <p>
          <span>Monday 12-8PM</span>
          <span>Tuesday 12-8PM</span>
          <span>Wednesday 12-8PM</span>
          <span>Thursday 12-6PM</span>
          <span>FRI-SAT CLOSED</span>
          <span>Sunday 12-6PM</span>
        </p>
      </div>
      <div className={styles.container}>
        <h3>Site Map</h3>
        <span>Home</span>
        <span>About</span>
        <span>Menu</span>
        <span>Contact</span>
      </div>
    </footer>
  </>
);

export default Layout;
