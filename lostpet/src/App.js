import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NewAd from "./c/NewAd";
import AdList from "./c/AdList"
import Header from "./c/Header";

import SingleAd from "./c/SingleAd";
import WelcomePage from "./c/WelcomePage";
import * as firebase from "firebase/app";
import { firebaseConfig as config } from "./firebase/config";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import "firebase/auth";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={WelcomePage}></Route>
        <Route path="/AdList/:id" exact component={SingleAd} />
        <Route path="/AdList" exact component={AdList}></Route>
        <Route path="/NewAd" exact component={NewAd} />
      </BrowserRouter>
    </div>
  );
};
export default App;
