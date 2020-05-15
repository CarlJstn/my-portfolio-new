import React, { Component } from "react";

import HeaderLink from "./HeaderLink";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: "100",
          padding: "20px",
          top: "0",
          zIndex: "2",
          background: "#ffffffed",
          textAlign: "center",
          position: "sticky",
          WebkitBoxShadow: "0px 0px 20px -9px rgba(0,0,0,0.75)",
          MozBoxShadow: "0px 0px 20px -9px rgba(0,0,0,0.75)",
          boxShadow: "0px 0px 20px -9px rgba(0,0,0,0.75)",
        }}
      >
        <HeaderLink to="/" text="About" hasSeparator />
        <HeaderLink to="/projects" text="Projects" hasSeparator />
        <HeaderLink to="/contact" text="Contact" />
      </div>
    );
  }
}

export default Header;
