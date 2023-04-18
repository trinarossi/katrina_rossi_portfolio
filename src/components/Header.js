import React, { useContext } from "react";
import { NavContext } from "../context/NavProvider";
import styles from "../styles/Header.module.css";

const Header = () => {
  const { activeLinkId } = useContext(NavContext);
  console.log(activeLinkId);

  const navLinks = ["Home", "About", "Portfolio", "Contact"];
  
  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Page`;
    const handleClickNav = () => {
      
      document.getElementById(scrollToId).scrollIntoView({ behavior:"smooth" })
    }

    return (
      <ul key={content}>
        <li>
          <button className={activeLinkId === content ? styles.activeClass : ""} onClick={handleClickNav}>{content}</button>
        </li>
      </ul>
    )
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <img className={styles.signature} src="/images/signature.png" />
          <nav>
            {navLinks.map((nav) => renderNavLink(nav))}
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Header;