import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PinMarker from "./pin-marker";

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={{
          width: "100%",
          height: "100%"
        }}
        styles={[
          {
            featureType: "all",
            elementType: "labels.text.fill"
            //stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke"
            //stylers: [{ color: "#000000" }, { lightness: 13 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            //stylers: [{ color: "#144b53" }, { lightness: 14 }, { weight: 1.4 }]
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f4f5f8" }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            //stylers: [{ color: "#4099ff" }, { lightness: 5 }]
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            //stylers: [{ color: "#000000" }]
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            //stylers: [{ color: "#0b434f" }, { lightness: 25 }],
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [{ color: "#4099ff" }, { lightness: 16 }]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#dde3f2" }]
          }
        ]}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
        <Marker
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />
        <Marker />

        <PinMarker />

        <InfoWindow>
          <div>
            <h1>Helo</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const LoadingContainer = props => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: "AIzaSyAno8NdQQ1dudqiRF5qQJMfIdD7byFa2io",
  LoadingContainer: LoadingContainer
})(MapContainer);
