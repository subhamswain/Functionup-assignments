import React from "react";
import styles from "./HeroSection.module.css";
import heroImg from "./assets/shoieuhs.jpg";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Welcome to our Website</h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            tellus enim.
          </p>
          <button className={styles.heroButton}>Learn More</button>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
