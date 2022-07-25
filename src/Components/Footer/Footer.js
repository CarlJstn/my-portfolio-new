import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          background: "white",
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          color: "#2196F3",
          fontWeight: "bold",
        }}
      >
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "20px",
          }}
        >
          My Portfolio
        </p>
        <p
          style={{
            margin: "0 0 8px",
            color: "#2196F3",
            fontSize: "12px",
          }}
        >
          Carl Justine M. De Guzman | &copy; 2022
        </p>
      </div>
    );
  }
}

export default Footer;
