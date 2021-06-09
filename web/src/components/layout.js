import React from "react";
import Header from "./header";
import NavBar from "./navBar";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <div>{children}</div>
    <footer className={styles.footer}>
      <div>
        <StaticImage
          src="../assets/roundlogo.png"
          width={200}
          height={200}
          className={styles.logo}
        />
      </div>
      <div>
        <h3>About</h3>
        <p>
          Orange Blossom Candies & Cream is a mother and daughter owned ice
          cream parlor and candy shop located in Montverde just beside Montverde
          Academy.
        </p>
      </div>
      <div>
        <h3>Address</h3>
        <p>
          <span>16937 Lakeside Dr</span>
          <span>Montverde, FL</span>
          <span>34756</span>
        </p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          <span>Orangeblossomcandy@gmail.com</span>
          <span>TEL: (352) 531-1139</span>
          <span>
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
          </span>
        </p>
      </div>
      <div>
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
      <div>
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
