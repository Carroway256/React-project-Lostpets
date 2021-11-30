import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import logo from "../images/pets.png";
import header from "./header.css";
const Header = () => {
  const divStyle = {
    borderBottom: "1px solid black",
    paddingTop: "5px",
  };
  const groupStyle = {};
  const itempadd = {
    height:"10px",
    marginTop: "5px ",
    marginRight: "10px",
  };
  return (
    <div style={divStyle}>
      <div>
      <Link to="/" className="item">
        <img className="ui small centered image" src={logo}></img>
        </Link>
      </div>
      <div style={groupStyle}>
        <div className="ui secondary pointing menu">
          <Link to="/NewAd" className="item">
            <button className="ui black button   headerBtn">Create new ad</button>
          </Link>
          <Link to="/AdList" className="ui item">
            <button className="ui black button headerBtn">Show list of ads</button>
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
