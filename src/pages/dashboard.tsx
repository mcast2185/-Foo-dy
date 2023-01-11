import { 
  IonCard, 
  IonCardContent, 
  IonHeader, 
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonTitle,
} from '@ionic/react';
import { useRef } from 'react';
import {useInView, useScroll, useSpring} from "framer-motion";

import sea from "../static/images/seaFood.png";
import ImageCarousel from '../components/carousel';
import Banner from '../components/banner';
import Footer from '../components/footer';
import styles from "../theme/dashboard.module.css";



const Dashboard: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  


  return (
    <section aria-details='component-content-wrapper' className={styles.section}>
      <main aria-details='main-content-wrapper'>
        <Banner/>
        <span aria-details="restaurant-detail-display" 
          className={styles.arrangedDetails}>
          <ImageCarousel/>
          <summary className={styles.summary}>
            <IonCard aria-details='inline-style' color="transparent" 
              style={{width: "400px", height: "375px"}}>
              <IonCardHeader>
                <IonCardTitle aria-details='inline-style' 
                  style={{fontFamily: 'Shrikhand, cursive', 
                  textDecoration: "underline", 
                  color: "white"}}>
                  Enjoy authentic plates near you
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </summary>
        </span> 
        <section aria-details='mid-page-section' className={styles.midSection}>
     
     {/* this is where we will hold our center content  */}

        </section>
        <IonHeader className={styles.ionHeader}>
          <IonTitle>Take a stroll through the city</IonTitle>
        </IonHeader>
          <article className={styles.article}
            id="section" ref={ref}>

            <span aria-details='inline-style' style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
              
              <div>
                <IonCard color="transparent" className={styles.ionCard}>
                  <IonCardHeader>
                    <IonCardTitle aria-details='inline-style' style={{
                      fontFamily: 'Shrikhand, cursive', textDecoration: "underline", 
                      color: "white", fontSize: "25px"}}>

                      From the sea to the table
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonImg src={sea} className={styles.ionImage}/>
                </IonCard>
              </div>
            </span>
            <span aria-details='inline-style' style={{
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>

              <article className={styles.details}>
                <IonCard aria-details='inline-style' style={{
                  width: "800px", height: "250px", marginLeft: "50px"}}>
                  <IonCardHeader>
                    <IonCardTitle aria-details='inline-style' style={{
                      fontFamily: 'Shrikhand, cursive', textDecoration: "underline"}}>

                      Enjoy authentic plates near you
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent className={styles.cardContent}>
                    {/* work on the overflow here for the content adding a scroll feature */}
                    {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
                    Here's a small text description for the card content. Nothing more, nothing less. Lorem ipsum dolor, sit 
                    amet consectetur adipisicing elit. Sunt assumenda necessitatibus dolorum cupiditate corrupti. Aspernatur 
                    tempore sed voluptas accusantium eos quasi repellendus blanditiis. Odit harum accusamus iste eaque 
                    distinctio magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti distinctio quas omnis 
                    suscipit natus, odio labore doloremque harum quibusdam, iure, doloribus repellendus! Qui corrupti pariatur 
                    dolore placeat, quam rerum animi.
                  </IonCardContent>
                </IonCard>
              </article>
            </span>
          </article>
        <Footer/>
      </main>
    </section>
  );
};

export default Dashboard;