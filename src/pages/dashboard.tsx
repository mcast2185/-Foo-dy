import { IonTitle} from '@ionic/react';
import { useRef } from 'react';
import {useInView} from "framer-motion";

import sea from "../static/images/seaFood.png";
import greek from "../static/images/greek.png";
import ImageCarousel from '../components/carousel';
import Banner from '../components/banner';
import Footer from '../components/footer';
import styles from "../theme/dashboard.module.css";
import SearchResultsProvider from '../components/SearchResultsProvider';
import { ApiThree, ApiFour, ApiFive } from '../temp/snippet';
import Map from '../components/maps';
import { Link } from 'react-scroll';



const Dashboard: React.FC = () => {
  const ref = useRef(null);
  const sectionThreeRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const sectionThreeInView = useInView(sectionThreeRef, { once: true });


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


  const mouseOverEventTwo = () => {
    (document.getElementById("greek") as HTMLElement).addEventListener("mouseover", ev => {
      if ("mouseenter" || "mouseover") {
        (document.getElementById("greek") as HTMLElement).style.filter = "brightness(50%)";
        (document.getElementById("eventListenerTwo") as HTMLElement).style.opacity = ".8";
      };
    });
    (document.getElementById("greek") as HTMLElement).addEventListener("mouseout", ev => {
      if ("mouseleave" || "mouseout") {
        (document.getElementById("greek") as HTMLElement).style.filter = "brightness(100%)";
        (document.getElementById("eventListenerTwo") as HTMLElement).style.opacity = "0";
      };
    });
  };


  const dynamicLink = (route: string, linkText: string) => {
    return (
      <div className='nav-link-wrapper'>
        <Link to={route} duration={1000} activeClass='nav-link-active'>
          {linkText}
        </Link>
      </div>
    )
  };
  // const aaa = () => {
  //   ApiFive[0].items.forEach(el => {
  //     console.log(el.pagemap.geocoordinates[0]);
  //   })
  // }
  // isInView && aaa();

  return (
    <>
    <main aria-details='component-content-wrapper' className={styles.dashboardContainer}>
      <Banner/>
      <main aria-details='main-content-wrapper' className={styles.mainSectionOne}>
        <section aria-details="upper-detail" 
          className={styles.sectionOneDetails}>
          <div className={styles.upperContent} >
            <div aria-details='inline-style' style={{ marginTop: "50px", 
              position: "absolute", top: "1%", zIndex: "10", left: "9%"}}>
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

      <main ref={ref} aria-details='center-content-wrapper' className={styles.mainSectionTwo}>
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
        <section ref={ref}>
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
          <div className={styles.sectionTwoImgContainer}>
            <img src={greek} onMouseOver={mouseOverEventTwo}
              className={styles.sectionTwoNextImg} id="greek"/>
            <span>
              <h1 id="eventListenerTwo" className={styles.sectionTwoImgLabelTwo}>
                {`
                  ${ApiFour[0].pagemap.restaurant[0].name}: 
                  ${ApiFour[0].pagemap.restaurant[0].servescuisine}
                `}
              </h1> 
            </span>
          </div>
        </main>
        <span ref={sectionThreeRef} 
        aria-details='section-three-animation-ref-point'/>
      </main>


      { sectionThreeInView &&
        <main className={styles.mainSectionThree}>
          <main className={styles.sectionThree}>
            <span className={styles.sectionThreeTitleWrapper} >
              <IonTitle className={styles.sectionThreeHeader}>
                <h2 className={styles.sectionThreeH2}>
                  <i> Find your next meal here! </i>
                </h2>
              </IonTitle>
            </span>
            <section className={styles.sectionThreeGmapWrapper}>
              <Map/>
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
