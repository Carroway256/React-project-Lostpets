import React from "react";
import Header from "./Header";
import { projectFirestore } from "../firebase/config";
import { Link } from "react-router-dom";
import "./main.css";
export default class AdList extends React.Component {
  state = {
    items: [],
  };
  componentDidMount() {
    let documents = [];
    const unsub = projectFirestore.collection("ads");
    unsub.onSnapshot((querySnapshot) => {
      const intems = [];
      querySnapshot.forEach((doc) => {
        intems.push({ id: doc.id, info: doc.data() });
      });
      this.setState({ items: intems });
    });
  }
  renderList() {
    return this.state.items.map((ad) => {
      return (
       
            <div key={ad.id} className="">
              <Link to={{ pathname: `/AdList/${ad.id}`, state: { id: "5" } }}>
                <img
                  src={ad.info.url}
                  width="100%"
                  height="100%"
                  className="imgStyle2 "
                ></img>
              </Link>
          </div>

      );
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <div className="postsHead">
            <h1>Posts</h1>
          </div>
          <div className="">
            <div className="postsContainer">{this.renderList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
