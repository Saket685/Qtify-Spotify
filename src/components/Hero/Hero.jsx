import React from "react";
import HeroImage from "../../assets/hero.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <img src={HeroImage} alt="hero" />
    </div>
  );
};

export default Hero;
