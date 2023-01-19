import { 
  IonCard, 
  IonCardContent, 
  IonCardHeader,
  IonCardTitle,
  IonTitle,
} from '@ionic/react';
import { useRef } from 'react';
import {useInView} from "framer-motion";

import sea from "../static/images/seaFood.png";
import greek from "../static/images/greek.png";
import ImageCarousel from '../components/carousel';
import Banner from '../components/banner';
import Footer from '../components/footer';
import styles from "../theme/dashboard.module.css";
import SearchResultsProvider from '../components/SearchResultsProvider';
import { ApiThree } from '../temp/snippet';



const Dashboard: React.FC = () => {
  const ref = useRef(null);
  const sectionThreeRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const sectionThreeInView = useInView(ref, { once: true });


  const mouseOverEvent = () => {
    (document.getElementById("domEvent") as HTMLElement).addEventListener("mouseover", ev => {
      if ("mouseenter" || "mouseover") {
        (document.getElementById("domEvent") as HTMLElement).style.filter = "brightness(50%)";
        (document.getElementById("eventListener") as HTMLElement).style.opacity = ".8";
      };
    });
    (document.getElementById("domEvent") as HTMLElement).addEventListener("mouseout", ev => {
      if ("mouseleave" || "mouseout") {
        (document.getElementById("domEvent") as HTMLElement).style.filter = "brightness(100%)";
        (document.getElementById("eventListener") as HTMLElement).style.opacity = "0";
      };
    });
  };


  // rework this code

  // const mouseOverEventTwo = () => {
  //   (document.getElementById("greek") as HTMLElement).addEventListener("mouseover", ev => {
  //     if ("mouseenter" || "mouseover") {
  //       (document.getElementById("testing") as HTMLElement).style.transform = "translateX(-620px)";
  //       (document.getElementById("testing") as HTMLElement).style.opacity = "1";
  //     };
  //   });
  //   (document.getElementById("greek") as HTMLElement).addEventListener("mouseout", ev => {
  //     if ("mouseleave" || "mouseout") {
  //       (document.getElementById("testing") as HTMLElement).style.filter = "translateX(0px)";
  //       (document.getElementById("eventListener") as HTMLElement).style.opacity = "0";
  //     };
  //   });
  // };

  // if (isInView) { 
  //   mouseOverEventTwo();
  //   console.log(" added event");
  // }
  
  return (
    <>
    <main aria-details='component-content-wrapper' className={styles.dashboardContainer}>
      <Banner/>
      <main aria-details='main-content-wrapper' className={styles.mainSectionOne}>
        <section aria-details="upper-detail" 
          className={styles.sectionOneDetails}>
          <div className={styles.upperContent} >
            <div style={{ marginTop: "50px", position: "absolute", top: "1%", zIndex: "10", left: "9%"}}>
              <IonTitle className={styles.sectionOneHeader}>
                <i>
                  <h2 className={styles.h2}>Dine-in at Denver</h2>
                </i>
              </IonTitle>
            </div>
            <div className={styles.sectionOneCarouselWrapper} >
              <ImageCarousel/>
            </div>
          </div>
          <div className={styles.resultsContentWrapper} >
            <span className={styles.searchResultsWrapper}>
              <SearchResultsProvider/>
            </span>
          </div>
        </section> 
      </main>




      <main aria-details='center-content-wrapper' className={styles.mainSectionTwo}>
        <section aria-details="center-detail" className={styles.sectionTwoDetails}>
          <IonTitle className={styles.ionCenterHeader}>
            <h2 className={styles.sectionTwoH2}>
              <i>
                <div className={styles.nestedOne}>
                  <span className={styles.span}>Discover near by</span>
                </div>
                <div className={styles.nestedTwo}>
                  <span className={styles.span}>restaurants</span>
                </div>
              </i>
            </h2>
          </IonTitle>
        </section>
        <section ref={ref} aria-details='inline-style' style={{opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateX(-200px)"}}>
          <div className={styles.sectionTwoImgWrapper}>
            <img src={sea} onMouseOver={mouseOverEvent} 
              className={styles.sectionTwoImg} id="domEvent"/>
            <span>
              <h1 id="eventListener" className={styles.sectionTwoImgLabel}>
                {`
                  ${ApiThree[0].items[7].pagemap.restaurant[0].name}: 
                  ${ApiThree[0].items[7].pagemap.restaurant[0].servescuisine}
                `}
              </h1> 
            </span>
          </div>
        </section>


        <main className={styles.sectionTwoLowerWrapper}>
          <section aria-details='inline-style' style={{opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateX(-250px)", transition: "3.5s ease-in-out"}}>
            <div className={styles.sectionTwoImgContainer}>
              <span id="testing">
                <img src={greek} className={styles.sectionTwoNextImg} id="greek"/>
              </span>
            </div>
          </section>
        </main>
      </main>


      { sectionThreeInView &&
        <main className={styles.mainSectionThree}>
          <main className={styles.sectionThree}>
            <section className={styles.sectionThreeCardWrapper} >
              <IonCard aria-details='inline-style' style={{padding: "0", margin: "0",
                width: "100%", height: "225px", backgroundColor: "rgba(135, 13, 2, 0.1)",
                border: "1.5px solid black", display: "flex", flexDirection: "column"}}>
                <IonCardHeader style={{fontFamily: 'Bebas Neue, cursive',
                  textDecoration: "none", backgroundColor: "rgba(0, 0, 0, 0.7)", height: "40px"}}>
                  <IonCardTitle aria-details='inline-style'>
                    <p className={styles.sectionThreeNestedTitle}>
                      Enjoy authentic plates near you
                    </p>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className={styles.sectionThreeCardContent}>
                <p className={styles.contentText}>
                  Here's a small text description for the card content. Nothing more, nothing less. 
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt assumenda 
                  necessitatibus dolorum cupiditate corrupti. Aspernatur distinc.
                </p>
                </IonCardContent>
              </IonCard>
            </section>  
            <section ref={sectionThreeRef}>



            </section>
          </main>
        </main>
      }
      <main aria-details='footer-wrapper'><Footer/></main>
    </main>
    </>
  );
};

export default Dashboard;
