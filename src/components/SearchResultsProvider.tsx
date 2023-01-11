import { useState, createContext, useContext } from 'react';
import { IonButton } from '@ionic/react';
import { Geolocation } from "@capacitor/geolocation";



// Variables established outside of the component. No need to occupy data each time our component is called if not needed. 
// Need to rework the .env file in order to properly conceal this sensitive information. 
const apiKey = "AIzaSyBRShqSMbyvYoO_Q2p1XatFGytoIG5fYdM";
const searchEngineId = "54fd67d12dc924033";
const API_URL = "http://localhost:5050";
const ResultContext = createContext({});




const SearchResultsProvider = ({children}: any) => {
  const [resultsApi, setResultsApi] = useState<any>([]);
  const [currentLocation, setCurrentLocation] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const input = {
    key: apiKey,
    cx: searchEngineId,
    gl: currentLocation,
    q: `restaurants+near+me`,
    start: 2,
    sort: "review-rating:d:s"
  };


// Setting the Lat and Lng for current geolocation .
  const myLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setCurrentLocation([Number(coordinates.coords.latitude), Number(coordinates.coords.longitude)]);
  };
  myLocation().then(res => {
    return res;
  });


// API call for Google search results.
  const executeApiQuery = async () => {
    myLocation();
    setIsLoading(true);
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${input.key}&cx=${input.cx}&q=${input.q}&gl=${input.gl}&start=${input.start}&sort=${input.sort}`)
    .then(async response => {
      const data = await response.json();
      setResultsApi(data);
      setIsLoading(false);
      console.log(data);
    });
  };



  return (
    <div id="csAPI">
      <ResultContext.Provider value={{resultsApi, setResultsApi, isLoading, setIsLoading, input}}>
        {children}
      </ResultContext.Provider>
      <IonButton onClick={() => executeApiQuery()}>Click here</IonButton>
    </div>
  );
}
export const useResultContext = () => useContext(ResultContext);
export default SearchResultsProvider;
