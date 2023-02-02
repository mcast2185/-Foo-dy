import React, { useEffect, useRef } from 'react';
import styles from "../theme/about.module.css";


const About: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<Array<HTMLDivElement | null>>([null, null, null]);

  useEffect(() => {
    const handleScroll = () => {
      if (!backgroundRef.current) {
        return;
      }
  
      const offset = window.pageYOffset;
      layerRefs.current.forEach((layer, i) => {
        if (!layer) {
          return;
        }
  
        layer.style.transform = `translateZ(${i * -1}px) translateY(${offset * i / layerRefs.current.length}%)`;
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="background" ref={backgroundRef}>
      <div
        className="layer layer1"
        ref={(el) => {
          if (el) {
            layerRefs.current[0] = el;
          }
        }}
      />
      <div
        className="layer layer2"
        ref={(el) => {
          if (el) {
            layerRefs.current[1] = el;
          }
        }}
      />
      <div
        className="layer layer3"
        ref={(el) => {
          if (el) {
            layerRefs.current[2] = el;
          }
        }}
      />
    </div>
  );
};



export default About;