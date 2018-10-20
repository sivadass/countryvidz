import React from "react";
import { InfoWindow, Marker } from "google-maps-react";

class PinMarker extends React.Component {
  constructor(props) {
    super(props);
  }
  handleMarkerClick = () => {
    console.log("clicked");
  };
  render() {
    return (
      <Marker
        onClick={this.handleMarkerClick}
        name={"Your position"}
        position={{
          lat: 37.762391,
          lng: -122.439192
        }}
        icon={{
          url:
            "https://res.cloudinary.com/sivadass/image/upload/v1540032807/icons/map-pin.svg",
          anchor: new google.maps.Point(16, 16),
          scaledSize: new google.maps.Size(32, 32)
        }}
      />
    );
  }
}

export default PinMarker;
