import React from "react";
import { Field, reduxForm } from "redux-form";
import { createAd } from "../actions";
import { connect } from "react-redux";
import { projectStorage } from "../firebase/config";
import "./main.css";
import Crop from "./crop";
import Map from "./Map";
class AdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: null,
      percentage: null,
      cropo: null,
      lat: null,
      lng: null,
    };
    this.updateCropo = this.updateCropo.bind(this);
    this.updateLatLng = this.updateLatLng.bind(this);
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  updateLatLng = (lat, lng) => {
    this.setState({ lat: lat });
    this.setState({ lng: lng });
  };
  updateCropo = (img) => {
    this.setState({ Image: img });
    const storageRef = projectStorage.ref(img.name);
    storageRef.put(img).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(percentage);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();

        this.setState({ url: url });
      }
    );
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    formValues.fileUpload = this.state.url;
    formValues.lat = this.state.lat;
    formValues.lng = this.state.lng;
    this.props.createAd(formValues);
  };
  render() {
    return (
      <div className="marginSides">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <Field
            name="contact"
            component={this.renderInput}
            label="Phone number or email addres to contact"
          />
          <label>Have you lost or found this pet ?</label>
          <div>
            <label>
              <Field
                name="found"
                component="input"
                type="radio"
                value="Found"
              />{" "}
              Found
            </label>
            <label>
              <Field name="found" component="input" type="radio" value="Lost" />{" "}
              Lost
            </label>
            <br></br>
          </div>
          <br></br>
          <Crop triggerupdateCropo={this.updateCropo} />
          <br></br>
          <Map
            google={this.props.google}
            center={{ lat: 18.5204, lng: 73.8567 }}
            height="400px"
            zoom={15}
            triggerupdateLatLng={this.updateLatLng}
          ></Map>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="ui button primary" disabled={!this.state.url}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  if (!formValues.contact) {
    errors.contact = "You must add way of contacting";
  }
  if (!formValues.fileUpload) {
    errors.fileUpload = "You must select photo";
  }
  return errors;
};
const formWrapped = reduxForm({
  form: "adForm",
  validate,
})(AdForm);

export default connect(null, { createAd })(formWrapped);
