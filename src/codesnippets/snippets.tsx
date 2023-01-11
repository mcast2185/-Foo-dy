import React from 'react'

// Setting the Lat and Lng for current geolocation .
  // const myLocation = async () => {
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   setLat(Number(coordinates.coords.latitude));
  //   setLng(Number(coordinates.coords.longitude));
  //   currentLocation = location;
  // };
  // myLocation().then(res => {
  //   return res;
  // });

//


// API call for Google search results.
// let data: any = await gapi.client.request({
    //         path: `https://www.googleapis.com/customsearch/v1?key=${input.key}&cx=${input.cx}&q=${input.q}&gl=${input.gl}&start=${input.start}&sort=${input.sort}`,
    //         method: "GET",
    //         params: input
    //       });
    // if (data.status === 200 ) {
    //   console.log("Query successful", data.result);
    //   axios
    //     .post(API_URL + "/data_handler", {
    //       kind: data.result.kind,
    //       context: data.result.context,
    //       items: data.result.items,
    //       url: data.result.url,
    //       queries: data.result.queries
    //     }, {withCredentials: true})
    //     .then(res => {
    //       console.log("Post data: ", res);
    //       return res.data;
    //     })
    //     .catch(err => err);
    // }
    // else {
    //   console.log("failed to execute APIquery");
    // };


    // Google search custom html code.
    // <div className="gcse-search" data-webSearchQueryAddition="term1 term2"></div>
    // <div className="gcse-searchresults" data-webSearchQueryAddition="term1 term2"></div>

  // useEffect(() => {
  //   loadGoogleScript({
  //     src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRShqSMbyvYoO_Q2p1XatFGytoIG5fYdM&callback=initMap",
  //     id: "mapGeocode",
  //     onload: () => console.log("mapGeocode is loaded")
  //   })
  // })


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



// at the bottom of the page we have snippets of code yet to be added (modal, accordian, avatar)
// this will be used within the menu pop up itself with the exception of avatar


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

{/* <div className="gcse-searchresults-only"></div> */}


    // loadGoogleScript({
    //   src: `https://cse.google.com/cse.js?cx=${searchEngineId}`,
    //   id: "cse",
    //   onload: console.log("Loaded cse script")
    // });


      // const start = () => {
  //   GoogleAuth.initialize({
  //     clientId: client_id,
  //     scopes: ["profile", "email"]
  //   });
  // };
  
  
  // useEffect(()=> {
  //   gapi.load('client:auth2', start);
  // }, []);