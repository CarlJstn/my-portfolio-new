import React, { Component } from "react";

import ContactMe from "./ContactMe";

class Contact extends Component {
  state = { whatIUseShow: false };

  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  handleWhatIUseToggle = () => {
    const { whatIUseShow } = this.state;

    this.setState({ whatIUseShow: !whatIUseShow });
  };

  render() {
    const { whatIUseShow } = this.state;

    return (
      <div className="fade-in-easy">
        <div style={styles.contactContainer}>
          <div style={styles.headerBg}>
            <div style={styles.headerBgOverlay}></div>
            <img
              src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1591263471/portfolio/contact-me_xxfrwy.jpg"
              alt="telephone"
              style={styles.headerBgImage}
            />

            <ContactMe
              whatIUseShow={whatIUseShow}
              handleWhatIUseToggle={this.handleWhatIUseToggle}
            />
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
    background: "rgba(0, 46, 82, 0.76)",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "1",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  },
};

export default Contact;
