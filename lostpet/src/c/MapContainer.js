import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { GOOGLE_MAP_URL } from "./APIS";
export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.lat) {
      return <div>Loading props...</div>;
    }
    return (
      <div style={{ position: 'relative', width: '70vw', height: '80vh' }}>
        <Map
          resetBoundsOnResize={true}
          google={this.props.google}
          defaultZoom={5}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
          style={this.props.style}
        >
          <Marker lat={this.props.lat} lng={this.props.lng} text="My Marker" />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_URL,
})(MapContainer);
