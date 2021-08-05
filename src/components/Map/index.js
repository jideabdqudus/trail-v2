import React from 'react'
import { Card, Skeleton } from "antd";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useSelector } from 'react-redux';
//Imports
import mapStyles from "./mapStyles"

const Maps = (props) => {
  const { programs} = useSelector((state) => state.program);
 const displayMarkers = () => {
    return programs?.map((program) => {
      return (
        <Marker
          key={program?.locations[0]?.long}
          id={program?.locations[0]?.long}
          position={{
            lat: program?.locations[0]?.lat,
            lng: program?.locations[0]?.long,
          }}
          onClick={() => {
            alert(program?.locations[0]?.name);
          }}
        />
      );
    });
  };
  return (
    <div className="mapped">
        {props.google === undefined ? (
          <Card>
            <Skeleton active />
          </Card>
        ) : (
          <div style={{ height: "600px", width: "100%" }}
            className="rant-card rant-card-bordered map-container"
          >
            <div className="rant-card-head">Impact by Geography</div>
            <div className="rant-card-body">
              <Map
                google={props.google}
                zoom={8}
                style={mapStylesToo}
                styles={mapStyles.mapStyle}
                initialCenter={{
                  lat: programs[0]?.locations[0]?.lat,
                  lng: programs[0]?.locations[0]?.long,
                }}
              >
                {displayMarkers()}
              </Map>
            </div>
          </div>
        )}
      </div>
  )
}

const mapStylesToo = {
  width: "100%",
  height: "100%",
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5vf0DbG-X2_Qdya9IPHl1ZbhPdn276gQ",
})(Maps)