import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonText, 
  IonPage, 
  IonItem,
  IonMenu,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonImg,
  IonList,
  IonLabel,
  IonModal,
  IonInput,
  IonNavLink
} from '@ionic/react';
import { useEffect, useState, useRef } from 'react';
import { logoIonic, logoReact, logoCapacitor, logoTwitter, logoFacebook, logoLinkedin, logOut } from 'ionicons/icons';
import {Geolocation} from "@capacitor/geolocation";
import { GoogleMap, useGoogleMap, useLoadScript } from '@react-google-maps/api';
import { Link, useNavigate } from 'react-router-dom';
import { OverlayEventDetail } from '@ionic/core/components';

import dish from "../static/images/dish.png"


// at the bottom of the page we have snippets of code yet to be added (modal, accordian, avatar)
// this will be used within the menu pop up itself with the exception of avatar


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
          <IonToolbar color="light">
            <IonTitle style={{marginRight: "16px", fontFamily: "Shrikhand"}}>
              Menu:
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList lines="inset">
            <IonItem>
              <IonLabel>
                <Link to='/dashboard' style={{textDecoration: "none", color: "white"}}>
                  Home
                </Link> 
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>                
                <Link to='/about' style={{textDecoration: "none", color: "white"}}>
                  About Us
                </Link> 
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>                
                <Link to='/contact'style={{textDecoration: "none", color: "white"}}>
                  Contact 
                </Link> 
              </IonLabel>
            </IonItem>
            <IonItem >
              <IonLabel>
                Social Media
                <IonList lines='inset'>
                  <IonItem>
                    <IonLabel>
                      <IonIcon icon={logoTwitter} style={{color: "royalblue", fontSize: "20px"}}/> {" "}
                      Twitter
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel> 
                      <IonIcon icon={logoFacebook} style={{color: "royalblue", fontSize: "20px"}}/> {" "}
                      Facebook
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel> 
                      <IonIcon icon={logoLinkedin} style={{color: "royalblue", fontSize: "20px"}}/> {" "}
                      LinkedIn
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonLabel>
            </IonItem>
          </IonList>
          <IonItem color="light" style={{position: "absolute", bottom: "0", width: "100%"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
              <IonIcon icon={logOut} style={{color: "royalblue", fontSize: "30px", marginRight: "5px"}}/> {" "}
              <IonLabel>Sign out {" "}</IonLabel>
            </div>
            </IonItem>
        </IonContent>
      </IonMenu>

      {/* <IonPage id="main-content"> */}
      <IonItem id="main-content">
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
            pointerEvents: "none", 
            display: "flex", 
            justifyContent: "center",
            paddingTop: "5px",
            fontFamily: "Shrikhand"}}>
            <IonText style={{ display: "flex", 
            justifyContent: "center",
            alignContent: "center",}}>
              <h1 style={{display: "flex", justifyContent: "center"}} id="foody" onClick={onClickEvent}>
                [Foo{<IonImg style={{height: "27.5px", width: "30.5px", marginTop: "6px", padding: "3px"}} src={dish}></IonImg>}dy] {' '} 
              </h1>
            </IonText>
          </div>

          <IonText style={{pointerEvents: "none", display: "flex", justifyContent: "right", alignItems: "center"}}>
            <p style={{fontSize: "10.5px", fontWeight: "lighter", margin: "0", fontFamily: "Darker Grotesque, sans-serif"}}> Powered By:</p>
            <IonItem style={{fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>
              <IonIcon icon={logoReact} style={{color: "royalblue", fontSize: "20px"}}/>
              React|{' '} 
            </IonItem>
            <IonItem style={{fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>
              <IonIcon icon={logoIonic} style={{color: "royalblue", fontSize: "20px"}}/>
              Ionic|{' '}
            </IonItem>
            <IonItem style={{fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>
              <IonIcon icon={logoCapacitor} style={{color: "royalblue", fontSize: "20px"}}/>
              Capacitor|
            </IonItem>
          </IonText>
        </IonHeader>
      </IonItem>
      {/* </IonPage> */}
    </>
  )
};

export default Header;


// const modal = useRef<HTMLIonModalElement>(null);
// const input = useRef<HTMLIonInputElement>(null);

// const [message, setMessage] = useState(
//   'This modal example uses triggers to automatically open a modal when the button is clicked.'
// );

// function confirm() {
//   modal.current?.dismiss(input.current?.value, 'confirm');
// }

// function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
//   if (ev.detail.role === 'confirm') {
//     setMessage(`Hello, ${ev.detail.data}!`);
//   }
// }



//       <IonContent className="ion-padding">
//         <IonButton id="open-modal" expand="block">
//           Open
//         </IonButton>
//         <p>{message}</p>
//         <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
//           <IonHeader>
//             <IonToolbar>
//               <IonButtons slot="start">
//                 <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
//               </IonButtons>
//               <IonTitle>Welcome</IonTitle>
//               <IonButtons slot="end">
//                 <IonButton strong={true} onClick={() => confirm()}>
//                   Confirm
//                 </IonButton>
//               </IonButtons>
//             </IonToolbar>
//           </IonHeader>
//           <IonContent className="ion-padding">
//             <IonItem>
//               <IonLabel position="stacked">Enter your name</IonLabel>
//               <IonInput ref={input} type="text" placeholder="Your name" />
//             </IonItem>
//           </IonContent>
//         </IonModal>
//       </IonContent>





{/* <>
<IonChip>
  <IonAvatar>
    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </IonAvatar>
  <IonLabel>Chip Avatar</IonLabel>
</IonChip>
</> */}




// <IonAccordionGroup>
// <IonAccordion value="first">
//   <IonItem slot="header" color="light">
//     <IonLabel>First Accordion</IonLabel>
//   </IonItem>
//   <div className="ion-padding" slot="content">
//     First Content
//   </div>
// </IonAccordion>
// <IonAccordion value="second">
//   <IonItem slot="header" color="light">
//     <IonLabel>Second Accordion</IonLabel>
//   </IonItem>
//   <div className="ion-padding" slot="content">
//     Second Content
//   </div>
// </IonAccordion>
// <IonAccordion value="third">
//   <IonItem slot="header" color="light">
//     <IonLabel>Third Accordion</IonLabel>
//   </IonItem>
//   <div className="ion-padding" slot="content">
//     Third Content
//   </div>
// </IonAccordion>
// </IonAccordionGroup>