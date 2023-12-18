import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import LeftArrow from '../../assets/icons/leftArrow.svg'
import styles from './Carousel.module.css';

const CarouselLeftNavigation = ({data,swiper}) => {


    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    // useEffect(() => {
    //     const handleSlideChange = () => {
    //       setIsBeginning(swiper.isBeginning);
    //     };
    
    //     swiper.on('slideChange', handleSlideChange);
    
    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //       swiper.off('slideChange', handleSlideChange);
    //     };
    //   }, [swiper]);

    useEffect(() => {
        swiper.slideTo(0, null);
      }, [data]);
    

  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation

