import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import RightArrow from '../../assets/icons/rightArrow.svg'
import styles from './Carousel.module.css';

const CarouselRightNavigation = ({data,swiper}) => {


    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    // useEffect(()=>{
    //     swiper.on("slideChange", function(){
    //         setIsEnd(swiper.isBeginning);
    //     })
    // })

    useEffect(() => {
        swiper.slideTo(0, null);
      }, [data]);

  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation

