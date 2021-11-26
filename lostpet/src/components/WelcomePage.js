import React from "react";
import logo from "../images/pets.png";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import "./welcomePage.css";

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="background"></div>
          <div className="main-container">
            <div className="title-text">
              <div className="title">Lost Pets</div>
              <h2>
                On this webstie you can create and view ads of lost or found pet
                to help you or owner to reunite with each other
              </h2>
              <div className="ui_buttons">
                <Link to="/AdList" className="item inline-block">
                  <button className="ui black button">Take me to posts</button>
                </Link>
                <button className="ui black button"> Sign In</button>
              </div>
            </div>
            <div className="logo">
              <img className="logoimage" src={logo} />
            </div>
          </div>
        
      </div>
    );
  }
}
