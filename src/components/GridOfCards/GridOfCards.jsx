import React from "react";
import Card from "../Card/Card";
import styles from "./GridOfCards.module.css";

const GridOfCards = ({ albums }) => {
  return (
    <div>
      <div className={styles.container}>
        {albums.map((album) => {
          return (
            <Card
              image_url={album.image}
              followers={album.follows}
              title={album.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridOfCards;
