// Carousel.js
import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { Navigation, Pagination } from "swiper/modules";
import { useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";
import { ReactComponent as LeftArrow } from '../../assets/icons/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/rightArrow.svg';

function Controls({ data }) {
    const swiper = useSwiper();
  
    useEffect(() => {
      swiper.slideTo(0, null);
    }, [data]);
  
    return (
      <div>
        <LeftArrow className={styles.leftNavigation} onClick={() => swiper.slidePrev()}/>
        <RightArrow className={styles.rightNavigation} onClick={() => swiper.slideNext()}/>
      </div>
    );
  }

const Carousel = ({ data,isForSongs=false}) => {

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data} />
        {data.map((item, index) => (
          <SwiperSlide key={index}>
          {isForSongs? (<Card
              image_url={item.image}
              likes={isForSongs && item.likes}
              title={item.title}
              forSongs={isForSongs}
            />):(<Card
              image_url={item.image}
              followers={item.follows}
              title={item.title}
              noOfSongs={item.songs.length}
            />)}
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
