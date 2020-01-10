import React from "react";

import DogPage from "./components/containers/DogPage";
import LoginPage from "./components/containers/LoginPage";

import { HashRouter as Router, Route } from "react-router-dom";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <h1 style={style}>Dog App</h1>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dog" component={DogPage} />
      </Router>
    </React.Fragment>
  );
}

const style = {
  textAlign: "center",
  fontFamily: "cursive",
  color: "#f50057"
};
