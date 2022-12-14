import { IonFooter, IonItem, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'

const Footer = () => {
  return (
    <IonFooter collapse="fade" style={{height: "140px", width: "100%", paddingBottom: "0", marginTop: "auto", marginBottom: "0", zIndex: "10", display: "flex"}}>
    <IonToolbar>
      <IonTitle>Footer</IonTitle>
    </IonToolbar>
  </IonFooter>

  )
}

export default Footer;