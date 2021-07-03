import React, { useState } from "react";
import * as styles from "./navBar.module.css";
import { Link } from "gatsby";
import { MdMenu, MdClear } from "react-icons/md";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
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
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClear className={styles.mobileIcon} />
          ) : (
            <MdMenu className={styles.mobileIcon} />
          )}
        </button>
        <ul className={navbarOpen ? styles.showMenu : styles.menuNav}>
          <li>
            <Link
              className={styles.mobileNavLink}
              to="/"
              onClick={() => closeMenu()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.mobileNavLink}
              to="/about/"
              onClick={() => closeMenu()}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.mobileNavLink}
              to="/menu/"
              onClick={() => closeMenu()}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              className={styles.mobileNavLink}
              to="/contact/"
              onClick={() => closeMenu()}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
