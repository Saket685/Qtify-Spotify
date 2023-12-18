import React from "react";
import styles from "./Searchbox.module.css";
import SearchIcon from "../../assets/searchIcon.png";

const Searchbox = () => {
  return (
    <span className={styles.input_box}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search a album of your choice"
      />
      <div className={styles.icon_box}>
        <img className={styles.icon} src={SearchIcon} alt="search-icon" />
      </div>
    </span>
  );
};

export default Searchbox;
