import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  setupIonicReact, 
  IonText, 
  IonPage, 
  IonTextarea, 
  IonApp,
  IonItem,
  IonMenu,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonMenuButton,
  isPlatform
} from '@ionic/react';
import React from 'react';

import "../theme/banner.module.css";
import styles from "../theme/banner.module.css";
import BannerCarousel from './bannerCarousel';



const Banner = () => {
  return (
    <div>
    <div className={styles.bannerWrapper}>
        <div className={styles.nestedBanner}>
          <div className={styles.bannerItems}>
            <p className={styles.text} >
              #1 Lorem ipsum dolor sit amet consectetur adipisicing. 
            </p>
            <p className={styles.text} >
              #2 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <p className={styles.text} >
              #3 Lorem ipsum dolor sit amet. 
            </p>
            <p className={styles.text} >
              #4 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;