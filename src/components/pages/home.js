import React from "react";
import GoogleMaps from "../common/maps";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div id="map">
          <GoogleMaps />
        </div>
      </div>
    );
  }
}

export default Home;
