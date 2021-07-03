import React from "react";
import * as styles from "./header.module.css";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      info: sanityInfo {
        address
        hours
      }
      menu: sanityMenu {
        flavorOfTheMonth
      }
    }
  `);
  const info = (data || {}).info;
  const menu = (data || {}).menu;
  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.address}>{info.address}</div>
      <div className={styles.hours}>
        {info.hours.map((hours, index) => (
          <div key={index}>{hours}</div>
        ))}
      </div>
      <div className={styles.flavorOfWeek}>
        Flavor of the month: {menu.flavorOfTheMonth}
      </div>
    </div>
  );
};

export default Header;
