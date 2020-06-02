import React, { Component } from "react";

import HeaderLink from "./HeaderLink";

class Header extends Component {
  state = { activeLink: window.location.pathname };

  componentDidMount() {
    window.onpopstate = (e) => {
      this.setState({ activeLink: window.location.pathname });
    };
  }

  componentDidUpdate() {
    window.onpopstate = (e) => {
      this.setState({ activeLink: window.location.pathname });
    };
  }

  handleClick = (to) => {
    this.setState({ activeLink: to });
  };

  render() {
    const { activeLink } = this.state;
    return (
      <div
        style={{
          width: "100",
          padding: "20px",
          top: "0",
          zIndex: "2",
          background: "rgba(255, 255, 255, 0.81)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          textAlign: "center",
          position: "sticky",
          WebkitBoxShadow: "0px 0px 20px -9px rgba(0,0,0,0.75)",
          MozBoxShadow: "0px 0px 20px -9px rgba(0,0,0,0.75)",
          boxShadow: "0px 0px 20px -9px rgba(0,0,0,0.75)",
        }}
      >
        <HeaderLink
          to="/"
          text="About"
          activeLink={activeLink}
          handleClick={this.handleClick.bind(this)}
          hasSeparator
        />
        <HeaderLink
          to="/projects"
          text="Projects"
          activeLink={activeLink}
          handleClick={this.handleClick.bind(this)}
          hasSeparator
        />
        <HeaderLink
          to="/contact"
          text="Contact"
          activeLink={activeLink}
          handleClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

export default Header;
