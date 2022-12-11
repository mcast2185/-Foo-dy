import { IonButton, IonItem } from '@ionic/react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import chef from "../static/images/chef.jpg";
import fish from "../static/images/fish.jpg";
import steak from "../static/images/steak.jpg";

function ImageCarousel() {
  const queryImgs = [];
  const queryNames = [];

  return (
    <div style={{width: "65%", height: "600px"}} >
     
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          style={{
            height: "600px", opacity: ".9", borderRadius: "3px"
          }}
          className="d-block w-100"
          src={chef}
          alt="First slide"
          />
        <Carousel.Caption style={{marginLeft: "-150px",background: "rgba(0,0,0,.5)", width: "98%", color: "whitesmoke", marginRight: "-6.5px", fontFamily: "Darker Grotesque, sans-serif"}}>
          <h4 style={{fontWeight: "bold"}}>First slide label</h4>
          <p style={{fontSize: "18px", fontWeight: "bold"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: "600px", opacity: ".9", borderRadius: "3px"
          }}
          className="d-block w-100"
          src={fish}
          alt="Second slide"
          />
        <Carousel.Caption style={{marginLeft: "-150px",background: "rgba(0,0,0,.5)", width: "98%", color: "whitesmoke", marginRight: "-6.5px", fontFamily: "Darker Grotesque, sans-serif"}}>
          <h4 style={{fontWeight: "bold"}}>Second slide label</h4>
          <p style={{fontSize: "18px", fontWeight: "bold"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: "600px", opacity: ".9", borderRadius: "3px"
          }}
          className="d-block w-100"
          src={steak}
          alt="Third slide"
          />
        <Carousel.Caption style={{marginLeft: "-150px",background: "rgba(0,0,0,.5)", width: "98%", color: "whitesmoke", marginRight: "-6.5px", fontFamily: "Darker Grotesque, sans-serif", fontWeight: "bold"}}>
          <h4 style={{fontWeight: "bold"}}>Third slide label</h4>
          <p style={{fontSize: "18px", fontWeight: "bold"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
  );
}

export default ImageCarousel;