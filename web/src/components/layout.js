import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Header from "./header";
import NavBar from "./navBar";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      info: sanityInfo {
        address
        email
        phone
        hours
      }
    }
  `);
  const info = (data || {}).info;
  return (
    <>
      <Header />
      <NavBar />
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.logoContainer}>
          <StaticImage src="../assets/roundlogo.png" width={200} height={200} />
        </div>
        <div className={styles.container}>
          <h3>Address</h3>
          <p>{info.address}</p>
        </div>
        <div className={styles.container}>
          <h3>Contact</h3>
          <p>
            <span>{info.email}</span>
            <span>TEL: {info.phone}</span>
            <span>
              <a href="https://facebook.com/orangeblossomcandiesandcream/">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color="#db7342"
                  className={styles.facebookIcon}
                  size="lg"
                />
              </a>
              <a href="https://www.instagram.com/orangeblossomcandiesandcream/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.instaIcon}
                  color="#db7342"
                  size="lg"
                />
              </a>
            </span>
          </p>
        </div>
        <div className={styles.container}>
          <h3>Hours</h3>
          {info.hours.map((hours, index) => (
            <p key={index}>{hours}</p>
          ))}
        </div>
        <div className={styles.container}>
          <h3>Site Map</h3>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/about/">About</Link>
          </span>
          <span>
            <Link to="/menu/">Menu</Link>
          </span>
          <span>
            <Link to="/contact/">Contact</Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
