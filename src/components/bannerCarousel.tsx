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
  isPlatform,
  IonList
} from '@ionic/react';

import React, {useEffect} from 'react';
import styles from "../theme/bannerCarousel.module.css";

const BannerCarousel: React.FC = () => {
  const coursel = () => {
    let carouselSlider = document.getElementById("carouselSlider") as HTMLElement;
    let list = document.getElementById("carouselList") as HTMLElement;
    let list2 = list;

    const speed = 1;

    let width = list.offsetWidth
    let x = 0;
    let x2 = width;


    const hover = () => {
      clearInterval(a);
      clearInterval(b);
    }
  
    const unhover = () => {
      a = setInterval(moveFirst, 10);
      b = setInterval(moveSecond, 10);
    }

    const moveFirst = () => {
      x -= speed;
  
      if (width >= Math.abs(x)) {
        list.style.left = `${x}px`;
      } else {
        x = width;
      }
    }
  
    const moveSecond = () => {
      x2 -= speed;
      
      if (list2.offsetWidth >= Math.abs(x2)) {
        list2.style.left = `${x2}px`;
      } else {
        x2 = width;
      }
    }


    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);


  
    const clone = () => {
      carouselSlider.appendChild(list2);
      list2.style.left = `${width}px`;

      carouselSlider.addEventListener("mouseenter", hover);
      carouselSlider.addEventListener("mouseleave", unhover);
    }
  
    clone();
  
  }
  
  useEffect(() => {

    coursel();
  }, [])

  return (
    <section id="carousel" className={styles.carousel}>
      <div id="carouselSlider" className={styles.carouselSlider}>
        <ul id="carouselList" className={styles.carouselList}>
          <li id="carouselItem" className={styles.carouselItem}>
            <span>1</span>
          </li>
          <li id="carouselItem" className={styles.carouselItem}>
            <span>2</span>
          </li>
          <li id="carouselItem" className={styles.carouselItem}>
            <span>3</span>
          </li>
          <li id="carouselItem" className={styles.carouselItem}>
            <span>4</span>
          </li>
          <li id="carouselItem" className={styles.carouselItem}>
            <span>5</span>
          </li>
          <li id="carouselItem" className={styles.carouselItem}>
            <span>6</span>
          </li>
        </ul>
      </div>
    </section>
  )
}


// const BannerCarousel: React.FC<JSX.Element | JSX.IntrinsicElements> = ({children}: any) => {
  // const [current, setCurrent] = useState<number>(0);
  // const [translateX, setTranslateX] = useState<number>(0);
  // const containerRef = useRef<any>();
  // const intervalRef = useRef<any | null>(null);

  // const actionHandler = useCallback((mode: string) => {
  //   containerRef.current.style.transitionDuration = "5000ms"; 
  //   if (mode === "next") {
  //     if (current > children.length) {
  //       setTranslateX(containerRef.current.clientWidth * (children.length + 1));
  //       // setCurrent(1);
  //     } else {
  //       setTranslateX(containerRef.current.clientWidth * (current + 1));
  //       setCurrent((prev) => ++prev);
  //     }
  //   };
  // }, [current, children]);

  // useEffect(() => {
  //   const transitionEnd = () => {
  //     if (current < 1) {
  //       containerRef.current.style.transitionDuration = "0ms";
  //       setTranslateX(containerRef.current.clientWidth * current)
  //     }

  //     if (current > children.length) {
  //       containerRef.current.style.transitionDuration = "0ms";
  //       // setTranslateX(containerRef.current.clientWidth * children.length)

  //     }
  //   };
  //   document.addEventListener("transitionend", transitionEnd);

  //   return () => {
  //     document.removeEventListener("transitionend", transitionEnd);
  //   }
  // }, [current, children]);

  // useEffect(() => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current)
  //   }
  //   intervalRef.current = setInterval(() => {
  //     actionHandler("next");
  //   }, 1800);
  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current)
  //     }
  //   }
  // }, [actionHandler]);

  // const slides = useMemo(() => {
  //   if (children.length > 1) {
  //     const arry: JSX.Element[] = [];
  //     for (let i =0; i< children.length; i++){
  //       arry.push(
  //         <li key={children.length + i} classNameName={styles.slide}>
  //           {children[i]}
  //         </li>
  //       );
  //     };

  //     let newone = arry.reduce((accumulator: any, currentValue: any) => {
  //       if (arry.includes(accumulator)) {
  //         let removed = [arry.splice(arry.indexOf(accumulator))];
  //         arry.length < 1 ? arry.push(...removed[0]) : console.log("nope");
  //         return [...removed[0], ...arry, accumulator, currentValue];
  //       };
      
  //       return accumulator;
  //      });


  //     return [newone];

  //   }
    
  //   return (
  //   <li classNameName={styles.slide}>
  //     {children[0]}
  //   </li>
  // )}, [children]);


  // useLayoutEffect(() => {
  //   setTranslateX(containerRef.current!.clientWidth * current)
  // }, []);



  // return (
    // <section classNameName={styles.bannerCarousel}>
    //   style={{transform: `translate3d(${-translateX}px, 0, 0)`} }
    //      <ul classNameName={`${styles.container} ${styles.animate}`} 
    //     <ul classNameName={styles.container} 
    //       ref={containerRef}>
    //       {slides}
    //     </ul>


    // </section>




    // <section classNameName={styles.bannerCarousel}>
    // <IonContent>
    //   <IonList classNameName={styles.container}>

    //   </IonList>
    // </IonContent>
    // </section>
  // )
// }

export default BannerCarousel;