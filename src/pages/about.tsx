import { IonCard, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem } from '@ionic/react';
import {useEffect} from 'react';
import SearchResultsProvider from '../components/SearchResultsProvider';
import ReviewResults from '../components/reviewResults';







const About = () => {
  useEffect(() => {
    // loadGoogleScript({
    //   src: `https://cse.google.com/cse.js?cx=${searchEngineId}`,
    //   id: "cse",
    //   onload: console.log("Loaded cse script"),
    // })
  }, []);





  return (
    <>
<ReviewResults/>
      <div>About</div>

    </>
  )
}



export default About;