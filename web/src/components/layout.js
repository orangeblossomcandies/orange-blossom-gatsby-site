import React from "react";
import Header from "./header";
import NavBar from "./navBar";
import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <div>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          COPYRIGHT &copy; {new Date().getFullYear()} ORANGE BLOSSOM CANDIES
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
