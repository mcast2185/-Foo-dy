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
  isPlatform
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { logoIonic, logoReact, logoCapacitor } from 'ionicons/icons';
import {Geolocation} from "@capacitor/geolocation";
import { GoogleMap, useGoogleMap, useLoadScript } from '@react-google-maps/api';
import { Link, useNavigate } from 'react-router-dom';


// consider a continuous revolving banner below the header
// location icon with geocoding labeling the city your in


const loadGoogleScript = ({src, id, onLoad}: any) => {
  const exist = document.getElementById(id)
  if (exist) {
    console.log("Script already exist");
    return;
  } else {
    const script = document.createElement("script");
    script.setAttribute("id", id);
    script.src = src;
    script.defer = true;
    script.onload = () => {
      onLoad && onLoad();
      console.log("Script is loaded");
    };

    document.head.appendChild(script);
  }
};






const Header = () => {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const navigate = useNavigate()

  useEffect(() => {
    loadGoogleScript({
      src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRShqSMbyvYoO_Q2p1XatFGytoIG5fYdM&callback=initMap",
      id: "mapGeocode",
      onload: () => console.log("mapGeocode is loaded")
    })
    // window.google = google
  })

  const myLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLat(coordinates.coords.latitude);
    setLng(coordinates.coords.longitude);
    return;
  };
  myLocation().then(res => res);


  const onClickEvent = () => {
    navigate("/");
    console.log("Nav");
    
  }


  return (
    <>
      <IonMenu contentId='main-content'>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle style={{marginRight: "15px", fontFamily: "Shrikhand"}}>
            Menu:
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        This is the menu content.
      </IonContent>
      </IonMenu>

      <IonPage id="main-content">
      <IonItem>
        <IonHeader style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "25px",
          width: "100%", 
          objectFit: "contain"}}>
          
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>

          <div style={{
            // pointerEvents: "none", 
            display: "flex", 
            justifyContent: "center", 
            fontFamily: "Shrikhand"}}>
            <IonText>
              <h1 id="foody" onClick={onClickEvent}>
                [Foo·dy] 
              </h1>
            </IonText>
          </div>

          <IonText style={{pointerEvents: "none", display: "flex", justifyContent: "right"}}>
            <IonItem style={{fontSize: "13.5px", fontWeight: "bold"}}>
              <IonIcon icon={logoReact} style={{color: "royalblue"}}/>
              React|{' '} 
            </IonItem>
            <IonItem style={{fontSize: "13.5px", fontWeight: "bold"}}>
              <IonIcon icon={logoIonic} style={{color: "royalblue"}}/>
              Ionic|{' '}
            </IonItem>
            <IonItem style={{fontSize: "13.5px", fontWeight: "bold"}}>
              <IonIcon icon={logoCapacitor} style={{color: "royalblue"}}/>
              Capacitor|
            </IonItem>
          </IonText>
        </IonHeader>
      </IonItem>
      </IonPage>
    </>
  )
};

export default Header;