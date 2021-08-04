import React from 'react'
import { Card, Skeleton } from "antd";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useSelector } from 'react-redux';

//Imports
import mapStyles from "./mapStyles"

const Maps = () => {
 const displayMarkers = () => {
    // return this.props.programs.programs?.map((program) => {
    //   return (
    //     <Marker
    //       key={program?.locations[0]?.long}
    //       id={program?.locations[0]?.long}
    //       position={{
    //         lat: program?.locations[0]?.lat,
    //         lng: program?.locations[0]?.long,
    //       }}
    //       onClick={() => {
    //         alert(program?.locations[0]?.name);
    //       }}
    //     />
    //   );
    // });
  };
  return (
    <div>
        {/* {this.props.google === undefined ? (
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
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                styles={googleMapStyle.mapStyle}
                initialCenter={{
                  lat: this.props.programs.programs[0]?.locations[0]?.lat,
                  lng: this.props.programs.programs[0]?.locations[0]?.long,
                }}
              >
                {this.displayMarkers()}
              </Map>
            </div>
          </div>
        )} */}
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