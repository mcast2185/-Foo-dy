import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonIcon, 
} from '@ionic/react';
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import {gapi} from "gapi-script";
import { useEffect, useState } from 'react';
import { logoGoogle } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

import styles from "../theme/login.module.css";
import userImg from "../static/images/userImg.png";


const client_id: string = String(process.env.REACT_APP_CLIENT_ID);


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
      setAccessToken(token);
    }; 
  });

  return (
  <section className={styles.section}>
    <IonCard className={styles.ionCard}>
      <IonCardContent className={styles.cardContent}>
        <img alt="user" aria-label="user-image" src={userImg}
          className={styles.userImg}/>

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
  </section>
  );
};

export default Login;
