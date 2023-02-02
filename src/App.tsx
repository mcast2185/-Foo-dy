import { setupIonicReact} from '@ionic/react';
import {Outlet, Route, Routes, Link } from 'react-router-dom';
import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

import styles from './theme/app.module.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Header from './components/header';
import Banner from './components/banner';
import About from './pages/about';
import Contact from './pages/contact';


setupIonicReact();
const client_id: string = "966483059530-2bd3tkjisb06c8di41eo3j5rdcocaqkv.apps.googleusercontent.com";


const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<any>(null);

  useEffect(() => {
    const start = () => {
      GoogleAuth.initialize({
        clientId: client_id,
        scopes: ["profile", "email"]
      });
    };
  gapi.load('client:auth2', start)}, []);
  
  accessToken !== null && sessionStorage.setItem("userToken", accessToken);

  return (
    <section className={styles.section}>
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
          <article className={styles.article}>
            <h1 > 404 page </h1>
            <p>Oops! Nothing to see here.</p>
            <Link className={styles.articleLink} to="/">
              Let's go back!
            </Link>
          </article>
        }/>
      </Routes>
      <Outlet/>
    </section>
  );
};

export default App;
