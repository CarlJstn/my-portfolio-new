import React, { Component } from "react";

import ContactMe from "./ContactMe";

class Contact extends Component {
  render() {
    return (
      <div className="fade-in-easy">
        <div style={styles.contactContainer}>
          <div style={styles.headerBg}>
            <div style={styles.headerBgOverlay}></div>
            <ContactMe />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  contactContainer: {
    position: "relative",
    height: "100vh",
    minHeight: "567px",
  },
  headerBg: {
    width: "100vw",
    height: "50vh",
    minHeight: "300px",
    position: "relative",
  },
  headerBgImage: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  headerBgOverlay: {
    background: "rgba(0, 46, 82, 0.88)",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "1",
  },
};

export default Contact;
