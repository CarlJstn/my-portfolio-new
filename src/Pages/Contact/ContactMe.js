import React, { Component } from "react";
import { LinkedIn, GitHub } from "@material-ui/icons";

import WhatIUse from "./WhatIUse";

class ContactMe extends Component {
  state = { whatIUseShow: false };

  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };

  toggleWhatIUse = () => {
    const { whatIUseShow } = this.state;

    this.setState({ whatIUseShow: !whatIUseShow });
  };

  render() {
    const { whatIUseShow } = this.state;

    return (
      <div style={styles.contactMeContainer}>
        {whatIUseShow && (
          <WhatIUse handleSocialMediaClick={this.handleSocialMediaClick} />
        )}
        <div style={styles.contactMeMain}>
          {/* {whatIUseShow ? (
            <HighlightOff
              className="fade-in-easy"
              style={{ ...styles.whatIUseIcon, ...{ color: "#e64f4f" } }}
              onClick={this.toggleWhatIUse.bind(this)}
            />
          ) : (
            <HelpOutline
              className="fade-in-easy"
              style={styles.whatIUseIcon}
              onClick={this.toggleWhatIUse.bind(this)}
            />
          )} */}
          <div style={styles.contactMeTable}>
            <p style={styles.contactMeHeader}>CONTACT ME</p>
            <div style={styles.contactMeHeaderUnderline}></div>
            <p style={styles.contactMeInfo}>
              <span>
                <a
                  href="mailto:carljustinedg@gmail.com?subject = Hey! I've seen your portfolio"
                  style={styles.email}
                >
                  carljustinedg@gmail.com
                </a>
              </span>
            </p>
            <p
              style={{
                ...styles.contactMeInfo,
                ...{ marginBottom: "0" },
              }}
            >
              <span style={styles.socialMediaSpan}>
                <LinkedIn
                  style={styles.linkedInIcon}
                  onClick={this.handleSocialMediaClick.bind(
                    this,
                    "https://www.linkedin.com/in/carl-justine-de-guzman-501438185"
                  )}
                />
              </span>
              <span style={styles.socialMediaSpan}>
                <GitHub
                  style={styles.githubIcon}
                  onClick={this.handleSocialMediaClick.bind(
                    this,
                    "https://github.com/CarlJstn"
                  )}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  contactMeContainer: {
    position: "absolute",
    width: "90%",
    maxWidth: "400px",
    height: "60vh",
    minHeight: "400px",
    maxHeight: "500px",
    bottom: "-50%",
    left: "0px",
    right: "0px",
    margin: "0px auto",
    background: "#ffffff8f",
    borderRadius: "5px",
    border: "1px solid rgba(158, 158, 158, 0.31)",
    zIndex: "1",
  },
  contactMeMain: {
    padding: "20px",
    height: "100%",
    width: "calc(100% - 40px)",
    textAlign: "center",
    display: "table",
  },
  contactMeTable: {
    display: "table-cell",
    verticalAlign: "middle",
  },
  contactMeHeader: {
    color: "rgb(15, 84, 140)",
    fontWeight: "bold",
    fontSize: "35px",
  },
  contactMeHeaderUnderline: {
    background: "rgb(15, 84, 140)",
    width: "40%",
    height: "7px",
    borderRadius: "5px",
    display: "block",
    margin: "5px auto 40px",
  },
  email: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  },
  contactMeInfo: {
    fontSize: "20px",
    color: "black",
    textDecoration: "none",
    margin: "20px 0",
  },
  socialMediaSpan: {
    margin: "0 10px",
    cursor: "pointer",
  },
  linkedInIcon: {
    fontSize: "31px",
    position: "relative",
    top: "1px",
  },
  githubIcon: {
    fontSize: "26px",
    position: "relative",
    top: "-3px",
  },
  fbIcon: {
    fontSize: "30px",
    position: "relative",
    top: "0px",
  },
  whatIUseIcon: {
    position: "absolute",
    right: "10px",
    top: "10px",
    cursor: "pointer",
  },
};

export default ContactMe;
