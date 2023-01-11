import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';

import styles from "../theme/footer.module.css";


const Footer = () => {
  return (
    <IonFooter collapse="fade" className={styles.ionFooter}>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
  )
}

export default Footer;