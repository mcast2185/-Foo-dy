import React, { useEffect} from 'react';

import "../theme/banner.module.css";
import styles from "../theme/banner.module.css";


const Banner: React.FC = () => {
  const list = document.getElementById("carouselList") as HTMLElement;
  const listTwo = list?.cloneNode(true) as HTMLElement;
  const carouselSlider = document.getElementById("carouselSlider") as HTMLElement;
  const DOMelement: any[] = [];
  let timer= 0;
  let count = 0;


  // if (list?.childNodes.length >= 7) {
  //   list?.childNodes[0].remove();
  // }; 

  // const hover = () => {
  //   clearInterval(id);
  // };
  // const unhover = () => {
  //   id = setInterval(start, 1000);
  // };

  // let start = () => {
  //   console.log("start");
  //   count +=1;
  //   if (count > 8000) {
  //     list.appendChild(DOMelement[timer]);
  //     timer += 1;
  //     return count = 0;
  //   };
  // };

  // let id = setInterval(start, 1000);

  // carouselSlider?.addEventListener("mouseenter", hover);
  // carouselSlider?.addEventListener("mouseleave", unhover);

  // useEffect(() => {
  //   listTwo?.childNodes.forEach((el, key) => {
  //     DOMelement.push(el as HTMLElement);
  //   });
  //   console.log("banner called");
  // }, []);

  

  return (
    <div>
      <div id="carousel" className={styles.bannerWrapper}>
        <div id="carouselSlider" className={styles.nestedBanner}>
          <ul id="carouselList" className={styles.bannerItems}>
            <li id="carouselItem1" className={styles.text} >
             #1 Lorem ipsum dolor sit amet asconsectetur adipisic. 
            </li>
            <li id="carouselItem2" className={styles.text} >
             #2 Lorem ipsum dolor sit amet consessctetur adipisicddding. 
            </li>
            <li id="carouselItem3" className={styles.text} >
             #3 Lorem ipsum dolor sit amet consectetur adipisicing. 
            </li>
            <li id="carouselItem4" className={styles.text} >
             #4 Lorem ipsum dolor enn uona sit amet consectetur adipisicing. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner;