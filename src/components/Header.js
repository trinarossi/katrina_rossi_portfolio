import React, { useContext, useState } from "react";
import { NavContext } from "../context/NavProvider";
import styles from "../styles/Header.module.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Header = () => {
  const { activeLinkId } = useContext(NavContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const navLinks = ["Home", "About", "Portfolio", "Contact"];

  const navLinksMobile = [
    { value: "Home", label: "Home"},
    { value: "About", label: "About"},
    { value: "Portfolio", label: "Portfolio"},
    { value: "Contact", label: "Contact"}
  ];
  
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

  const RenderDropDown = () => {
    const handleClickNav = (content) => {
      const scrollToId = `${content.toLowerCase()}Page`;
      document.getElementById(scrollToId).scrollIntoView({ behavior:"smooth" })
    }

    return (
      <Dropdown options={navLinksMobile}  placeholder="Menu" onChange={ (option) => {
        handleClickNav(option.value);
      }} className={styles.mobileNav}/>
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
          <RenderDropDown />
        </div>
      </div>
    </header>
  )
};

export default Header;