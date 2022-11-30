import { 
  setupIonicReact, 
  IonPage, 
  isPlatform
} from '@ionic/react';
import {Outlet, Route, Routes } from 'react-router-dom';
import { useLoadScript } from '@react-google-maps/api';
import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Link } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Header from './components/header';



setupIonicReact();

const api_key: string = String(process.env.REACT_PUBLIC_G_API_KEY);
const client_id: string = "966483059530-2bd3tkjisb06c8di41eo3j5rdcocaqkv.apps.googleusercontent.com";
const libraries: any = ["places", "geometry"];
const scriptSource = "https://apis.google.com/js/client.js";

const start = () => {
  GoogleAuth.initialize({
    clientId: client_id,
    scopes: ["profile", "email"]
  });
};

!isPlatform("capacitor") && 
  gapi.load('client:auth2', start);

// this should be a redux function-->
const loadGoogleScript = ({src, id, onLoad}: any) => {
  const exist = document.getElementById(id)
  if (exist) {
    console.log("Script already exist: App*");
    return;
  } else {
    const script = document.createElement("script");
    script.setAttribute("id", id);
    script.src = src;
    script.defer = true;
    script.async = true;
    script.onload = () => {
      onLoad && onLoad();
      console.log("Script is loaded: App*");
    };
    // console.log(document.head.appendChild(script));

    document.head.appendChild(script);
  }
};
// --|


const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<any>(null);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: api_key,
    libraries: libraries
  });


  if (isLoaded) {
    loadGoogleScript({
      src: scriptSource,
      id: 'gapiScript',
      onLoad: () => console.log("Places library is loaded: App*"),
    });
  } else {
    console.log("Libraries are not loaded");
  };

  accessToken !== null && sessionStorage.setItem("userToken", accessToken);

  

  return (
    <IonPage>
      <div className="app-wrapper" >
        <Header/>
          <Routes>

            <Route path="" element={
              <Login setAccessToken={
                (token: any) => {
                  setAccessToken(token)}}/>}/>

            {sessionStorage.length > 0 ? <>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/about" element={null}/>
              <Route path="/contact" element={null}/>
              </> : null}

            <Route path="*" element={
              <div style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                margin: "40vh"}}>
                <h1 > 404 page </h1>
                <p>Oops! Nothing to see here.</p>
                <Link to="/">Let's go back!</Link>
              </div>
            }/>
          </Routes>
        </div>
      <Outlet/>
    </IonPage>
  );
};

export default App;





// import { 
//   IonContent, 
//   IonHeader, 
//   IonIcon, 
//   setupIonicReact, 
//   IonText, 
//   IonPage, 
//   IonTextarea, 
//   IonApp,
//   IonItem
// } from '@ionic/react';
// import {Outlet } from 'react-router-dom';
// import { useLoadScript } from '@react-google-maps/api';
// import "./theme/menu.css"
// import Page from './pages/Page';

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
// import './theme/variables.css';
// import { useEffect } from 'react';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
// import { logoIonic, logoReact, logoCapacitor } from 'ionicons/icons';
// import { Icon } from 'ionicons/dist/types/components/icon/icon';



// setupIonicReact();

// const api_key: string = String(process.env.REACT_PUBLIC_G_API_KEY)
// const client_id: string = "966483059530-2bd3tkjisb06c8di41eo3j5rdcocaqkv.apps.googleusercontent.com";
// const libraries: any = ["places"];
// const scriptSource = "https://apis.google.com/js/client.js";

// // this should be a redux function-->
// const loadGoogleScript = ({src, id, onLoad}: any) => {
//   const exist = document.getElementById(id)
//   if (exist) {
//     console.log("Script already exist: App*");
//     return;
//   } else {
//     const script = document.createElement("script");
//     script.setAttribute("id", id);
//     script.src = src;
//     script.defer = true;
//     script.async = true;
//     script.onload = () => {
//       onLoad && onLoad();
//       console.log("Script is loaded: App*");
//     };
//     // console.log(document.head.appendChild(script));

//     document.head.appendChild(script);
//   }
// };
// // --|



// const App: React.FC = () => {
//   const {isLoaded} = useLoadScript({
//     googleMapsApiKey: api_key,
//     libraries: libraries
//   });

//   useEffect(()=> {
//     const start = () => {
//       GoogleAuth.initialize({
//         clientId: client_id,
//         scopes: ["profile", "email"]
//       })
//     };
//     gapi.load('client:auth2', start);
  
//   })

//   if (isLoaded) {
//     loadGoogleScript({
//       src: scriptSource,
//       id: 'gapiScript',
//       onLoad: () => console.log("Places library is loaded: App*"),
//     });
//   } else {
//     console.log("Libraries are not loaded");
//   };

//   return (
//     // <IonApp>
//       <IonPage>
        
//         <IonHeader slot='top'>
//           <IonItem>


//             <IonText style={{display: "flex", justifyContent: "end", alignContent: "center", width: "100%", height: "100%"}}>
//               <IonItem style={{fontSize: "12.5px", fontWeight: "bold", marginTop: "19px"}}>
//                 <IonIcon icon={logoReact} style={{color: "royalblue"}} />
//                 {' '} React |{' '} 
//               </IonItem>
//               <IonItem style={{fontSize: "12.5px", fontWeight: "bold", marginTop: "19px"}}>
//                 <IonIcon icon={logoIonic} style={{color: "royalblue"}}/>
//                 {' '} Ionic|{' '}
//               </IonItem>
//               <IonItem style={{fontSize: "12.5px", fontWeight: "bold", marginTop: "19px"}}>
//                 <IonIcon icon={logoCapacitor} style={{color: "royalblue"}}/>
//                 {' '} Capacitor|
//               </IonItem>
//             </IonText>


//           </IonItem>
//         </IonHeader>
//         <Outlet/>
//       </IonPage>
//     // </IonApp>
//   );
// };

// export default App;
