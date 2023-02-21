import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const navLinks = ["Home", "About", "Portfolio", "Contact"];
  const renderNavLink = (content) => {
    return (
      <ul key={content}>
        <li>
          <button>{content}</button>
        </li>
      </ul>
    )
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <h1>Katrina Rossi</h1>
          <nav>
            {navLinks.map((nav) => renderNavLink(nav))}
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Header;