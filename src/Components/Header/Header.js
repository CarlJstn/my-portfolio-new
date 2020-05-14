import React, { Component } from "react";

import HeaderLink from "./HeaderLink";

class Header extends Component {
  render() {
    return (
      <div className="w-full p-5 bg-blue-600 text-center fixed">
        <HeaderLink to="/" text="About" hasSeparator />
        <HeaderLink to="/projects" text="Projects" hasSeparator />
        <HeaderLink to="/contact" text="Contact" />
      </div>
    );
  }
}

export default Header;
