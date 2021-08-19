import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import logo from "../images/pets.png";
const Header = () => {
  const divStyle = {
    borderBottom: "1px solid black",
    paddingTop: "5px",
  };
  const groupStyle = {};
  const itempadd = {
    height:"20%",
    marginTop: "5px ",
    marginRight: "10px",
  };
  return (
    <div style={divStyle}>
      <div>
        <img className="ui small centered image" src={logo}></img>
      </div>
      <div style={groupStyle}>
        <div className="ui secondary pointing menu">
          <Link to="/NewAd" className="item">
            <button className="ui black button">Create new ad</button>
          </Link>
          <Link to="/AdList" className="ui item">
            <button className="ui black button">Show list of ads</button>
          </Link>
          <div className="right menu " style={itempadd}>
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
