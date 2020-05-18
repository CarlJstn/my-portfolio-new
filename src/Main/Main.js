import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";

class Main extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "60px" }}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default Main;
