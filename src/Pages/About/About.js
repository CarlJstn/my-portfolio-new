import React, { Component } from "react";

import Indicator from "./Indicator";
import Landing from "./Landing";
import Skills from "./Skills";
import Experience from "./Experience";

class About extends Component {
  render() {
    return (
      <div className="fade-in-easy">
        <Indicator />
        <Landing />
        <Skills />
        <Experience />
      </div>
    );
  }
}

export default About;
