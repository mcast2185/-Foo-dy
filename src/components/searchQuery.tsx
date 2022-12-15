import React, {useState, useEffect} from 'react';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import  axios from 'axios';
import { isPlatform } from '@ionic/core';
import { IonButton } from '@ionic/react';
import {GoogleMap} from "@react-google-maps/api";
import {Geolocation} from "@capacitor/geolocation";


// the gl key for input is for our geolocation

const clientId = String(process.env.REACT_PUBLIC_G_CLIENT_ID);
const apiKey = String(process.env.REACT_PUBLIC_G_API_KEY);
const searchEngineId = "54fd67d12dc924033";
const API_URL = "http://localhost:5050";
let currentLocation!: number[];
const input = {
  key: apiKey,
  cx: searchEngineId,
  gl: currentLocation,
  q: "restaurants near me",
  start: 1
}

if (!isPlatform('capacitor')){
  GoogleAuth.initialize({
    clientId: clientId,
    scopes: ["profile", "email", "https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest"]
  });
  console.log("GoogleAuth initialized");
};



const SearchResults = ({results}: any) => {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const location = [lat,lng]

  const myLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLat(coordinates.coords.latitude);
    setLng(coordinates.coords.longitude);
    currentLocation = location;
  };
  myLocation().then(res => {
    return res
  });



  const executeApiQuery = async () => {
    let data: any = await gapi.client.request({
            path: `https://www.googleapis.com/customsearch/v1?key=${input.key}&cx=${input.cx}&q=${input.q}&gl=${input.gl}&start=${input.start}`,
            method: "GET",
            params: input
          })
    if (data.status === 200 ) {
      console.log("Query successful", data.result);
      axios
        .post(API_URL + "/data_handler", {
          kind: data.result.kind,
          context: data.result.context,
          items: data.result.items,
          url: data.result.url,
          queries: data.result.queries
        }, {withCredentials: true})
        .then(res => {
          console.log("Post data: ",res)
          return res.data
        })
        .catch(err => err)
    }
  }

  return (
    <div id="csAPI">
      <IonButton onClick={() => executeApiQuery()}>Click here</IonButton>
      <button onClick={()=> executeApiQuery()}>click</button>
    </div>
  )
}

export default SearchResults;
