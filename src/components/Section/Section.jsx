import React, { useState } from "react";
import styles from './Section.module.css';
import { CircularProgress } from "@mui/material";
import GridOfCards from "../GridOfCards/GridOfCards";
import Carousel from "../Carousel/Carousel";


const Section = ({ data, title }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div style={{ margin: "25px" }}>
      <div className={styles.title_container}>
        <div className={styles.left_heading}>{title}</div>
        <div className={styles.right_heading} onClick={handleToggle}>
          {!carouselToggle ? "Collapse":"Show All"}
        </div>
      </div>
      {data.length===0 ? (
        <CircularProgress />
      ) : !carouselToggle ? (
        <GridOfCards albums={data} />
      ) : (
        <Carousel data={data}/>
      )}
    </div>
  );
};

export default Section;
