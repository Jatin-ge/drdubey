"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Maps = () => {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);
  if(!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return null;

  return (
    <APIProvider apiKey="AIzaSyBAi8dE58UCX0blqwVUKRv8z7Yw0zGPYDs" >
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} >
          
        </Map>
      </div>
    </APIProvider>
   
  );
}
export default Maps;