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
          duration={55000}
          iterations={Infinity}
          fromTo={[
            { property: 'transform', fromValue: 'translateX(72.5%)', toValue: 'translateX(-97%)' },
            { property: 'opacity', fromValue: '1', toValue: '1' }
          ]}>
          <ul id="carouselList" className={styles.bannerItems}>
            <li id="carouselItem" className={styles.text} >
             <p className={styles.textP}>#1 Lorem ipsum dolor sit amet asconsectetur adipisic. </p>
            </li>
            <li id="carouselItem" className={styles.text} >
             <p className={styles.textP}>#2 Lorem ipsum dolor sit amet consessctetur adipisicddding. </p>
            </li>
            <li id="carouselItem" className={styles.text} >
             <p className={styles.textP}>#3 Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </li>
            <li id="carouselItem" className={styles.text} >
             <p className={styles.textP}>#4 Lorem ipsum dolor enn uona sit amet consectetur adipisicing. </p>
            </li>
          </ul>
          </CreateAnimation>

        </div>
      </div>
    </div>
  )
}

export default Banner;