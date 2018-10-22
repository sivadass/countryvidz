import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Loader from "../common/loader";

class MapContainer extends React.Component {
  onMarkerClick = (props, marker, e) => {
    this.props.history.push(`/details/${encodeURIComponent(props.name)}`);
  };

  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return <Loader />;
    }
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 20,
          lng: 77
        }}
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
            featureType: "administrative.country",
            elementType: "geometry.fill",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#144b53" }, { lightness: 14 }, { weight: 1.4 }]
            //stylers: [{ visibility: "off" }]
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
        {data.map((country, index) => {
          return (
            <Marker
              key={index}
              name={country.name}
              code={country.alpha2Code}
              position={{ lat: country.latlng[0], lng: country.latlng[1] }}
              onClick={this.onMarkerClick}
              icon={{
                url:
                  "https://res.cloudinary.com/sivadass/image/upload/v1540032807/icons/map-pin.svg",
                anchor: new google.maps.Point(0, 32),
                scaledSize: new google.maps.Size(32, 32)
              }}
            />
          );
        })}
      </Map>
    );
  }
}

MapContainer.propTypes = {
  data: PropTypes.array
};

const MapContainerWithRouter = withRouter(MapContainer);

const LoadingContainer = props => <Loader />;

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer
})(MapContainerWithRouter);
