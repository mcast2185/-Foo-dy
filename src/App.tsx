// import { 
//   setupIonicReact, 
//   IonPage, 
//   isPlatform
// } from '@ionic/react';
// import {Outlet, Route, Routes, useNavigate } from 'react-router-dom';
// import { useLoadScript } from '@react-google-maps/api';
// import { gapi } from 'gapi-script';
// import { useState, useEffect } from 'react';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
// import { Link } from 'react-router-dom';
// import Dashboard from './pages/dashboard';
// import Login from './pages/login';
// import Header from './components/header';



// setupIonicReact();

// const api_key: string = String(process.env.REACT_PUBLIC_G_API_KEY);
// const client_id: string = "966483059530-2bd3tkjisb06c8di41eo3j5rdcocaqkv.apps.googleusercontent.com";
// const libraries: any = ["places", "geometry"];
// const scriptSource = "https://apis.google.com/js/client.js";

// const start = () => {
//   GoogleAuth.initialize({
//     clientId: client_id,
//     scopes: ["profile", "email"]
//   });
// };

// !isPlatform("capacitor") && 
//   gapi.load('client:auth2', start);

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

//     document.head.appendChild(script);
//   }
// };
// // --|


// const App: React.FC = () => {
//   const [accessToken, setAccessToken] = useState<any>(null);
//   const navigate = useNavigate();
//   const {isLoaded} = useLoadScript({
//     googleMapsApiKey: api_key,
//     libraries: libraries
//   });


//   if (isLoaded) {
//     loadGoogleScript({
//       src: scriptSource,
//       id: 'gapiScript',
//       onLoad: () => console.log("Places library is loaded: App*"),
//     });
//   } else {
//     console.log("Libraries are not loaded");
//   };

//   accessToken !== null && sessionStorage.setItem("userToken", accessToken);

//   // useEffect(() => {
//   //   if (sessionStorage.length > 0) {
//   //     navigate("/dashboard");
//   //   }
//   // })

//   return (
//     // <IonPage>
//       <div className="app-wrapper" >
//         <Header/>
//           <Routes>

//             <Route path="" element={
//               <Login setAccessToken={
//                 (token: any) => {
//                   setAccessToken(token)}}/>}/>

//             {sessionStorage.length > 0 ? <>
//               <Route path="/dashboard" element={<Dashboard/>}/>
//               <Route path="/about" element={null}/>
//               <Route path="/contact" element={null}/>
//               </> : null}

//             <Route path="*" element={
//               <div style={{
//                 display: "flex", 
//                 justifyContent: "center", 
//                 alignItems: "center", 
//                 margin: "40vh"}}>
//                 <h1 > 404 page </h1>
//                 <p>Oops! Nothing to see here.</p>
//                 <Link to="/">Let's go back!</Link>
//               </div>
//             }/>
//           </Routes>
//           <Outlet/>
//         </div>
//     // </IonPage>
//   );
// };

// export default App;
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
import Banner from './components/banner';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';





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
    // <IonPage>
      <section style={{width: "100vw", height: "100vh", padding: "0", margin: "0", overflow: "scoll"}}>
        <Header/>
          <Routes>

            <Route path="" element={
              <Login setAccessToken={
                (token: any) => {
                  setAccessToken(token)}}/>}/>

            {sessionStorage.length > 0 ? <>
              <Route path="/dashboard" element={<Dashboard/>}/>              
              <Route path="/banner" element={<Banner/>}/>              
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              </> : null}

            <Route path="*" element={
              <div style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                alignContent: "center", 
                margin: "40vh"}}>
                <h1 > 404 page </h1>
                <p>Oops! Nothing to see here.</p>
                <Link style={{textDecoration: "none", color: "black"}} to="/">Let's go back!</Link>
              </div>
            }/>
          </Routes>

          <Outlet/>
        </section>
    // </IonPage>
  );
};

export default App;
