import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonPage,
  IonRippleEffect,
  IonSpinner, 
} from '@ionic/react';
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth"
import {gapi} from "gapi-script";
import { useEffect, useState } from 'react';
import { logoGoogle } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

import userImg from "../static/images/userImg.png";
import foodyBg from "../static/images/foodyBG.jpg";


// const client_id = process.env.REACT_PUBLIC_G_CLIENT_ID
const client_id: string = "966483059530-2bd3tkjisb06c8di41eo3j5rdcocaqkv.apps.googleusercontent.com"


const Login = ({setAccessToken}: any) => {
  const [token, setToken] = useState<any>(null)
  const navigate = useNavigate()
  useEffect(()=> {
    const start = () => {
      GoogleAuth.initialize({
        clientId: client_id,
        scopes: ["profile", "email"]
      })
    };
    gapi.load('client:auth2', start);
  
  });



  const signIn = async () => {
    let user = await GoogleAuth.signIn();
    setToken(user.authentication.accessToken);
  };

  useEffect(() => {
    if (token !== null){
      navigate("/dashboard");
      // window.location.replace("/dashboard");
      setAccessToken(token)
    }; 
  });

  return (
  <div style={{
    backgroundImage: `url(${foodyBg})`,
    backgroundSize: "contain",
    width: "100vw", height: "100vh",
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    }}>

    <IonCard style={{width: "350px", height: "450px"}}>
      <IonCardContent style={{
        padding: "25px", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"}}>

      <img alt="User" src={userImg} style={{
        width: "250px", 
        height: "200px"}}/>

      <IonCardHeader>
        <IonCardSubtitle>
          For access to this webpage
        </IonCardSubtitle>
        <IonCardTitle>
          Sign-in {' '} 
        </IonCardTitle>
      </IonCardHeader>
      <IonButton
        fill="outline" 
        type="button" 
        onClick={()=> signIn()}>
        <IonIcon 
          slot='start' 
          icon={logoGoogle}/>
          Login With Google
      </IonButton>
      </IonCardContent>
      <IonCardContent style={{fontSize: "8"}}>
        All account information provided is safely secured by google OAuth2.
      </IonCardContent>
    </IonCard>
  </div>
  );
};

export default Login;
