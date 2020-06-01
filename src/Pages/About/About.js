import React, { Component } from "react";

import Indicator from "./Indicator";
import Landing from "./Landing";
import Skills from "./Skills";

class About extends Component {
  render() {
    return (
      <div className="fade-in-easy">
        <Indicator />

        <Landing />
        <Skills />
        <div style={styles.expContainer}></div>
      </div>
    );
  }
}
const styles = {
  expContainer: {
    height: "100vh",
    width: "100%",
    background: "lightgray",
  },
};

export default About;
