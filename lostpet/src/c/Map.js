import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import Geocode from "react-geocode";
import { GOOGLE_MAP_URL } from "./APIS.js";
Geocode.setApiKey(GOOGLE_MAP_URL);
Geocode.enableDebug();
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
    };
  }
  onPlaceSelected = (place) => {
    let latValue = place.geometry.location.lat();
    let lngValue = place.geometry.location.lng();

    this.setState({
      markerPosition: {
        lat: latValue,
        lng: lngValue,
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
    this.setState({
      markerPosition: {
        lat: newLat,
        lng: newLng,
      },
      mapPosition: {
        lat: newLat,
        lng: newLng,
      },
    });

    this.props.triggerupdateLatLng(newLat, newLng);
  };
  render() {
    const googleMapURL =`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_URL}&libraries=places`
    const AsyncMap = withScriptjs(
      withGoogleMap((props, state) => (
        <div>
          <GoogleMap
            google={this.props.google}
            defaultZoom={this.props.zoom}
            defaultCenter={{
              lat: this.state.mapPosition.lat,
              lng: this.state.mapPosition.lng,
            }}
          >
            <Autocomplete
              style={{
                width: "100%",
                height: "60px",
                paddingLeft: "16px",
                marginTop: "2px",
                marginBottom: "100px",
              }}
              onPlaceSelected={this.onPlaceSelected}
              types={["(regions)"]}
            />
            <Marker
              google={this.props.google}
              name={"here"}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              position={{
                lat: this.state.markerPosition.lat,
                lng: this.state.markerPosition.lng,
              }}
            />
            <Marker />
          </GoogleMap>
        </div>
      ))
    );
    let map;
    if (this.props.center.lat !== undefined) {
      
      map = (
        <div>
          <AsyncMap
            googleMapURL={googleMapURL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: this.props.height }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}
export default Map;
