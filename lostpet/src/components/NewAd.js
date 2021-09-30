import React from "react";
import { connect } from "react-redux";
import AdForm from "./AdForm";
import Header from "./Header";
class NewAd extends React.Component {
  isSignedIn = this.props.isSignedIn;
  onSubmit = (formValues) => {};
  render() {
    const divStyle = {
      textAlign: "center",
      margin: "50px",
    };
    const isSignedIn = this.props.isSignedIn;

    return (
      <div>
        <Header />
        <div>
          <h1 style={divStyle}>Create Ad</h1>
          <AdForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps)(NewAd);
