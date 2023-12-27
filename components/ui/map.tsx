"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function GoogleMaps() {
  const position1 = { lat :26.82783899849272, lng: 75.8524579802551};
  const position2 = {lat: 30.345, lng: 78.031985}
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [position, setPosition] = useState(position1);

  return (
    <APIProvider apiKey="AIzaSyBAi8dE58UCX0blqwVUKRv8z7Yw0zGPYDs">
      <div className="mx-auto" style={{ height: "60vh", width: "90%" }}>
        <Map zoom={15} center={position1} mapId="2356584220fb1eb7">
          <AdvancedMarker position={position1} onClick={() => {setOpen1(true)
          
        }}>
            <Pin
              background={"red"}
              borderColor={"black"}
              glyphColor={"black"}
            />
          </AdvancedMarker>

          {open1 && (
            <InfoWindow position={position1} onCloseClick={() => setOpen1(false)}>
              <p>Im in dehradun</p>
            </InfoWindow>
          )}
          <AdvancedMarker position={position2} onClick={() => 
          {
            setOpen2(true)
            setPosition(position2)
        }}>
            <Pin
              background={"red"}
              borderColor={"black"}
              glyphColor={"black"}
            />
          </AdvancedMarker>

          {open2 && (
            <InfoWindow position={position2} onCloseClick={() => setOpen2(false)}>
              <p>Im in dehradun2</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}