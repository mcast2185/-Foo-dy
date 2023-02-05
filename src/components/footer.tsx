import { 
  IonFooter, 
  IonIcon, 
  IonItem, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { 
  logoIonic, 
  logoReact, 
  logoCapacitor,
  logoFacebook,
  logoTwitter,
  logoLinkedin
} from 'ionicons/icons';

import styles from "../theme/footer.module.css";


const Footer = () => {
  return (
    <IonFooter collapse="fade" className={styles.ionFooter}>
      <IonToolbar>
        <div className={styles.footerWrapper}>
          <div className={styles.footerSlot}>
            <div>
              <IonTitle className={styles.footerTitle}>© 2023 [Foo·dy] | all rights reserved</IonTitle>
            </div>
            <div>
              <div className={styles.ionTextIcons}>
                <IonItem aria-details='inline-style' style={{
                  fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>

                  <IonIcon icon={logoTwitter} className={styles.ionMediaIcon}/>

                </IonItem>
                <IonItem aria-details='inline-style' style={{
                  fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>

                  <IonIcon icon={logoFacebook} className={styles.ionMediaIcon}/>

                </IonItem>
                <IonItem aria-details='inline-style' style={{
                  fontSize: "9.5px", fontWeight: "bold", marginRight: "-15px"}}>

                  <IonIcon icon={logoLinkedin} className={styles.ionMediaIcon}/>

                </IonItem>
              </div>
            </div>
            <div>
              <div className={styles.ionTextIcons}>
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
              </div>
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonFooter>
  )
}

export default Footer;