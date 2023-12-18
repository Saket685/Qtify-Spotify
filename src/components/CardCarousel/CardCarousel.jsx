import * as React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./CardCarousel.module.css";
import RightArrow from "../../assets/icons/RightArrow";
import LeftArrow from "../../assets/icons/LeftArrow";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CardCarousel = () => {
  const swiper = useSwiper();

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={styles.sky_blue}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.sky_blue}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.sky_blue}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.sky_blue}>Slide 4</SwiperSlide>
      </Swiper>

      <button onClick={goPrev}><LeftArrow /></button>
      <button onClick={goNext}><RightArrow /></button>
    </div>
  );
};

export default CardCarousel;
