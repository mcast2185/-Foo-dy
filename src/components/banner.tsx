import React, { useEffect, useRef } from 'react';
import  { CreateAnimation}  from '@ionic/react';

import "../theme/banner.module.css";
import styles from "../theme/banner.module.css";


const Banner: React.FC = () => {

  return (
    <div>
      <div id="carousel" className={styles.bannerWrapper}>
        <div id="carouselSlider" className={styles.nestedBanner}>
        <CreateAnimation
          easing='ease'
          play={true}
          pause={false}
          duration={40000}
          iterations={Infinity}
          fromTo={[
            { property: 'transform', fromValue: 'translateX(75%)', toValue: 'translateX(-115%)' },
            { property: 'opacity', fromValue: '1', toValue: '1' }
          ]}>
          <ul id="carouselList" className={styles.bannerItems}>
            <li id="carouselItem" className={styles.text} >
             #1 Lorem ipsum dolor sit amet asconsectetur adipisic. 
            </li>
            <li id="carouselItem" className={styles.text} >
             #2 Lorem ipsum dolor sit amet consessctetur adipisicddding. 
            </li>
            <li id="carouselItem" className={styles.text} >
             #3 Lorem ipsum dolor sit amet consectetur adipisicing. 
            </li>
            <li id="carouselItem" className={styles.text} >
             #4 Lorem ipsum dolor enn uona sit amet consectetur adipisicing. 
            </li>
          </ul>
          </CreateAnimation>

        </div>
      </div>
    </div>
  )
}

export default Banner;