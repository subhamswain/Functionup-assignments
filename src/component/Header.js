import React, { useState } from "react";
import styles from "./Header.module.css";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Twitter</div>
        
        <div className={styles.menu}>
          <ul className={isMenuOpen ? styles.menuListOpen : styles.menuList}>
            <li className={styles.menuItem}>
              <a href="#home">Home</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#about">About</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#videos">Videos</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#contact">Contact</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#login">Login</a>
            </li>
          </ul>
          <button className={styles.menuBtn} onClick={toggleMenu}>
            <span className={styles.menuIcon}>&#9776;</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
