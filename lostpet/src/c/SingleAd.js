import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import MapContainer from "./MapContainer";
import Header from "./Header";
import "./singleAd.css";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}
function Isfound(data) {
  if (data.data.found == "Found") {
    return <h3>I was found</h3>;
  }
  return <h3>I was lost</h3>;
}
export default function SingleAd(props) {
  const actualMapStyle= { height: "100%", width: "100%" }
  const [data, setdata] = useState(0);
  const id = props.match.params.id;
  useEffect(() => {
    var docRef = projectFirestore.collection("ads").doc(`${id}`);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let x = doc.data();

          setdata(x);
          useForceUpdate();
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    
    <div>
      <Header />
      <div className="divStyle">
        <div className="divPhotoText">
          <div className="petImage">
            <img
              src={data.url}
              width="100%"
              height="100%"
              className="imgStyle"
            ></img>
          </div>
          <div className="divText">
            <Isfound data={data}></Isfound>
            <h3 className="textStyle"> Description : </h3>
            <div className="textStyle">{data.description}</div>
            <h3 className="textStyle"> Contact :</h3>
            <div className="textStyle">{data.contact}</div>
          </div>
        </div>
        <div className="mapStyle">
          <MapContainer style={actualMapStyle}lat={data.lat} lng={data.lng} />
        </div>
      </div>
    </div>
  );
}
