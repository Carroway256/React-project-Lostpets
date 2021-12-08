import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import firebase from "firebase/app";
import "firebase/auth";
import "./main.css";
import { firebaseConfig, provider } from "../firebase/config";
class GoogleAuth extends React.Component {
  /* componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientSecret: "TLLZXHzARNaa6T0xvzk8Ay-u",
          apiKey: 
          clientId:
            
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
*/
  SignInFb = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {})
      .catch((error) => {});
  };

  /*
  firebaseCheck = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("jest zalogowant");
      } else {
        console.log("niejest");
      }
    });
  };
   onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
*/
  render() {
    return (
      <div>
        <button onClick={this.SignInFb} className="ui facebook button ">
          Sign in Facebook
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
