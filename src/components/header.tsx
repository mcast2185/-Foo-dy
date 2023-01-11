import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonText, 
  IonItem,
  IonMenu,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonImg,
  IonList,
  IonLabel,
} from '@ionic/react';
import { 
  logoIonic, 
  logoReact, 
  logoCapacitor, 
  logoTwitter, 
  logoFacebook, 
  logoLinkedin, 
  logOut 
} from 'ionicons/icons';
import { Link, useNavigate } from 'react-router-dom';

import styles from "../theme/header.module.css";
import dish from "../static/images/dish.png";


const Header = () => {
  const navigate = useNavigate();
  const onClickEvent = () => {
    navigate("/");
    console.log("Nav");
  };

  return (
    <section aria-details='component-content-wrapper'>
      <IonMenu contentId='main-content'>
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle className={styles.ionTitle}>
              Menu:
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList lines="inset">
            <IonItem>
              <IonLabel>
                <Link to='/dashboard' aria-details='inline-style' 
                  style={{textDecoration: "none", color: "white"}}>
                  Home
                </Link> 
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>                
                <Link to='/about' aria-details='inline-style' 
                  style={{textDecoration: "none", color: "white"}}>
                  About Us
                </Link> 
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>                
                <Link to='/contact' aria-details='inline-style' 
                  style={{textDecoration: "none", color: "white"}}>
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
                      <IonIcon icon={logoTwitter} 
                        className={styles.ionMediaIcon}/> {" "}
                      Twitter
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel> 
                      <IonIcon icon={logoFacebook} 
                        className={styles.ionMediaIcon}/> {" "}
                      Facebook
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel> 
                      <IonIcon icon={logoLinkedin} 
                        className={styles.ionMediaIcon}/> {" "}
                      LinkedIn
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonLabel>
            </IonItem>
          </IonList>
          <IonItem color="light" className={styles.ionItem}>
            <section aria-details='sign-out-container' 
              className={styles.signOutSection}>
              <IonIcon icon={logOut} className={styles.ionLogOutIcon}/> {" "}
              <IonLabel>Sign out {" "}</IonLabel>
            </section>
          </IonItem>
        </IonContent>
      </IonMenu>

      <IonItem id="main-content">
        <IonHeader className={styles.ionHeader}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
          </IonToolbar>
          <section aria-details='title-wrapper' className={styles.titleWrapper}>
            <IonText className={styles.ionTextHeader}>
              <h1 className={styles.titleHeader} id="foody" onClick={onClickEvent}>
                [Foo{ <IonImg src={dish} aria-details='inline-style' 
                  style={{height: "27.5px", width: "30.5px", marginTop: "6px", padding: "3px"}}/>
                }dy] {' '} 

              </h1>
            </IonText>
          </section>
          <IonText className={styles.ionTextIcons}>
            <p className={styles.label}> Powered By:</p>
            <IonItem aria-details='inline-style' style={{
              fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>

              <IonIcon icon={logoReact} className={styles.ionMediaIcon}/>
              React|{' '} 
            </IonItem>
            <IonItem aria-details='inline-style' style={{
              fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>

              <IonIcon icon={logoIonic} className={styles.ionMediaIcon}/>
              Ionic|{' '}
            </IonItem>
            <IonItem aria-details='inline-style' style={{
              fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>

              <IonIcon icon={logoCapacitor} className={styles.ionMediaIcon}/>
              Capacitor|
            </IonItem>
          </IonText>
        </IonHeader>
      </IonItem>
    </section>
  )
};

export default Header;