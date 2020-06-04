import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "../Pages/NotFound/NotFound";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

class Main extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "60px" }}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
