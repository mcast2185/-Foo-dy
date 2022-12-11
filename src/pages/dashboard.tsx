import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
} from '@ionic/react';
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import {gapi} from "gapi-script";
import { useEffect } from 'react';
import { logoGoogle } from 'ionicons/icons';

import background from "../static/images/background.jpg";
import ImageCarousel from '../components/carousel';
import Banner from '../components/banner';


const Dashboard: React.FC = () => {

  // document.getElementById("main-content")?.setAttribute("class", "0")

  return (
    
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      height: "100vh",
      width: "100vw",
      display: "flex", 
      flexDirection: "column",
      objectFit: "cover",
      overflowX: "hidden",
      overflowY: "auto",
      position: "relative"
    }}>
      <Banner/>
      <div style={{
        display: "flex",
        padding: "20px",
        marginTop: "50px",
        marginBottom: "50px",
        position: "relative",
        top: "0",
        justifyContent: "space-between"}}>
        <ImageCarousel/>
        <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Darker Grotesque, sans-serif"}}>
         testing
        </h1>
      </div> 


      {/* =Katibeh&family=Murecho */}

      <div >
        <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Katibeh"}}>
         testing
        </h1>
       
      </div>
      <div >
        <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Murecho"}}>
         testing
        </h1>
       
      </div>
      <div >

        <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Bebas Neue, cursive"}}>
         testing
        </h1>
       
      </div>

    </div>
  );
};

export default Dashboard;