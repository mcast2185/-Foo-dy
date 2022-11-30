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
import {Carousel} from "react-responsive-carousel";

import chef from "../static/images/chef.jpg";
import fish from "../static/images/fish.jpg";
import steak from "../static/images/steak.jpg";

const Dashboard: React.FC = () => {


  return (
    <div style={{
      pointerEvents: "none",
      background: "white",
      height: "100vh",
      width: "100vw",
      display: "flex", 
      marginTop: "60px"}}>
      <IonCard 
        className="ion-padding" 
        style={{
          width: "700px", 
          height: "550px"}}>
        <IonCardContent>
          <p> Hello welcome to [Foo·dy] </p>
          <Carousel>
                <div>
                    <img src={chef} />
                    <p className="legend">Chef</p>
                </div>
                <div>
                    <img src={fish} />
                    <p className="legend">Fish</p>
                </div>
                <div>
                    <img src={steak}/>
                    <p className="legend">Steak</p>
                </div>
            </Carousel>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Dashboard;