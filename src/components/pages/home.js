import React from "react";
import axios from "axios";
import GoogleMaps from "../common/maps";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    this.getCountries();
  }
  getCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;latlng")
      .then(response => {
        this.setState(
          {
            countries: response.data
          },
          () => {
            console.log(this.state.countries);
          }
        );
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };
  render() {
    return (
      <div className="container-fluid home">
        <div id="map">
          <GoogleMaps data={this.state.countries} />
        </div>
      </div>
    );
  }
}

export default Home;
