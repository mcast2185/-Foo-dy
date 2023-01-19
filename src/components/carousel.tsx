import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styles from "../theme/carousel.module.css";
import chef from "../static/images/chef.jpg";
import fish from "../static/images/fish.jpg";
import steak from "../static/images/steak.jpg";

function ImageCarousel() {
  useEffect(() => {
    if (document.querySelector(".carousel-control-next-icon") || document.querySelector(".carousel-control-prev-icon")) {
      document.querySelector(".carousel-control-prev-icon")?.remove();
      document.querySelector(".carousel-control-next-icon")?.remove();
    } else {
      console.log("Tags could not be found");
    }
  }, []);

  return (
    <section aria-details='component-content-wrapper' className={styles.section}>
      <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
          <img aria-details='inline-style'style={{
            height: "500px", opacity: ".9", borderRadius: "3px"}}
            className="d-block w-100" src={chef} alt="First slide"/>
          <Carousel.Caption className={styles.carouselCaption}>
            <h4 className={styles.carouselHeader}>First slide label</h4>
            <p className={styles.carouselDesc}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img aria-details='inline-style'style={{
            height: "500px", opacity: ".9", borderRadius: "3px"}}
            className="d-block w-100" src={fish} alt="Second slide"/>
          <Carousel.Caption className={styles.carouselCaption}>
            <h4 className={styles.carouselHeader}>Second slide label</h4>
            <p className={styles.carouselDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img aria-details='inline-style'style={{
            height: "500px", opacity: ".9", borderRadius: "3px"}}
            className="d-block w-100" src={steak} alt="Third slide"/>
          <Carousel.Caption className={styles.carouselCaption}>
            <h4 className={styles.carouselHeader}>Third slide label</h4>
            <p className={styles.carouselDesc}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default ImageCarousel;