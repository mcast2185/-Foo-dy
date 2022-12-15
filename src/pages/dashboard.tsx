import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonItem
} from '@ionic/react';
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import {gapi} from "gapi-script";
import { useEffect } from 'react';
import { logoGoogle } from 'ionicons/icons';



import background from "../static/images/background.jpg";
import ImageCarousel from '../components/carousel';
import Banner from '../components/banner';
import Footer from '../components/footer';



const Dashboard: React.FC = () => {

  

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      height: "100%",
      width: "100%",
      display: "flex", 
      flexDirection: "column",
      overflowX: "hidden",
      overflowY: "auto",
      position: "relative"
      }}>
      <div>
        <Banner/>
        <div style={{
          display: "flex",
          padding: "20px",
          marginTop: "50px",
          marginBottom: "50px",
          position: "relative",
          justifyContent: "space-between",
          top: "0"}}>
          <ImageCarousel/>
          <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Darker Grotesque, sans-serif"}}>
          testing
          </h1>
        </div> 
        
        <div style={{
          background: "rgba(0,0,0,.5)", 
          height: "470px", 
          width: "90%", 
          color: "tomato", 
          fontFamily: "Darker Grotesque, sans-serif", 
          marginRight: "5%", 
          marginLeft: "5%", 
          marginTop: "150px",
          padding: "25px",
          borderRadius: "7px"
          }}>
          <div >
            <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Darker Grotesque, sans-serif"}}>
              testing
            </h1>
          </div>
          <div >
            <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Darker Grotesque, sans-serif"}}>
              testing
            </h1>  
          </div>
          <div >
            <h1 style={{background: "rgba(0,0,0,.5)", height: "15vh", width: "15vw", color: "tomato", fontFamily: "Darker Grotesque, sans-serif"}}>
              testing
            </h1>
          </div>
        </div>

        
        <div style={{
          background: "rgba(0,0,0,.1)", 
          height: "500px", 
          width: "100%", 
          color: "tomato", 
          fontFamily: "Darker Grotesque, sans-serif", 
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
          padding: "25px",
          borderRadius: "7px"
          }}>
          <div>

          </div>

        </div>

        <Footer/>
      </div>
    </div>


  );
};

export default Dashboard;