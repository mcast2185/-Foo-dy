import { 
  useRef, 
  useMemo, 
  useState, 
  useCallback
} from 'react';
import {
  Marker, 
  GoogleMap, 
  useLoadScript,
  MarkerClusterer
} from "@react-google-maps/api";
import { IonSpinner } from '@ionic/react';
import {Geolocation} from "@capacitor/geolocation";
import CustomIframe from './customIframe';
import { ApiFive } from '../temp/snippet';

type LatLit = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const apiKey = "AIzaSyBRShqSMbyvYoO_Q2p1XatFGytoIG5fYdM";
const libraries: any = ["places"];
const containerStyle = {
  "width": "100%",
  "height": "100%"
};


const Map = () => {
  const zoom: number = 10;
  const mapRef = useRef<GoogleMap>()
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [office, setOffice] = useState<LatLit>();
  const center: LatLit = useMemo(() => (
    {lat: Number(lat), lng: Number(lng)}), []);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: libraries
  });

  const myLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLat(coordinates.coords.latitude);
    setLng(coordinates.coords.longitude);
    return;
  };
  myLocation().then(res => {
    return res;
  });


  // office will be positions of our api returned geolocations...

  // is the function onload replicating the same effect as the attribute of center?
  // the second button in section one should shift the page down to our google maps in section three
  // use react-scroll library/dashboard
  // example: {dynamicLink("/", "Home")}
  // https://www.npmjs.com/package/react-scroll

  
  const houses = useMemo(() => 
    generateHouses(), []);

  const onLoad = useCallback((map: any) => 
    (mapRef.current = map), []);

  const options: MapOptions = useMemo(() => ({
    mapId: "3d862ff77d558bc4",
    disableDefaultUI: true,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    clickableIcons: false
  }), []);



  if (!isLoaded) return <div> <IonSpinner/> </div>;
  return (
    <CustomIframe load="auto" title="google-maps" 
      style={{width: "100%", height: "100%"}}>
      <GoogleMap zoom={zoom} options={options} center={center} 
        mapContainerStyle={containerStyle} onLoad={onLoad} id="map">
        {office && 
          <>
            <Marker position={office}/> 
            <MarkerClusterer>
              {(clusterer) => 
                <>
                  {houses.map((house) => (
                    <Marker key={house.lat} 
                      position={house} clusterer={clusterer}/> 
                  ))}
                </>
              }
            </MarkerClusterer>
          </>
        }
      </GoogleMap>
    </CustomIframe>
  )
}

const generateHouses = () => {
  const _houses: Array<LatLit> = [];
    ApiFive[0].items.forEach(el => {
      _houses.push({
        lat: Number(el.pagemap.geocoordinates[0].latitude),
        lng: Number(el.pagemap.geocoordinates[0].longitude) 
        
      })
    
  })
  return _houses
}

export default Map;