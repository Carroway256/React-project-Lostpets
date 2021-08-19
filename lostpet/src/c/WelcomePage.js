import React from "react";
import logo from "../images/pets.png";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className="maindiv">
        <div className="logo">
          <img className="logoimage" src={logo} />
        </div>
        <div className="title-text">
        <div className="title">Lost Pets</div>
        <h2>
          On this webstie you can create and view ads of lost or found pet to
          help you or owner<br></br> to reunite with each other
        </h2>
        <br></br>
        <Link to="/AdList" className="item">
          <button className="ui black button">Take me to adds</button>
        </Link>
        <br></br>
        <br></br>
        <GoogleAuth />
        </div>
      </div>
    );
  }
}
