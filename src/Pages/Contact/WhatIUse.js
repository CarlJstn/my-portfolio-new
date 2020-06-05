import React, { Component } from "react";

class WhatIUse extends Component {
  render() {
    const { handleSocialMediaClick } = this.props;
    return (
      <>
        <div className="fade-in" style={styles.whatIUsePopUp}>
          <p style={styles.whatIUseHeader}>WHAT I USE TO BUILD THIS</p>
          <div style={styles.whatIUseHeaderUnderline}></div>
          <p
            style={styles.whatIUseInfo}
            onClick={handleSocialMediaClick.bind(
              this,
              "https://material-ui.com/"
            )}
          >
            Material-UI
          </p>
          <p
            style={styles.whatIUseInfo}
            onClick={handleSocialMediaClick.bind(
              this,
              "https://fonts.google.com/specimen/Open+Sans?sidebar.open&selection.family=Open+Sans:wght@300"
            )}
          >
            Google Open Sans font
          </p>
          <p
            style={styles.whatIUseInfo}
            onClick={handleSocialMediaClick.bind(
              this,
              "https://fonts.google.com/specimen/Open+Sans+Condensed?sidebar.open&selection.family=Open+Sans:wght@300"
            )}
          >
            Google Open Sans Condensed font
          </p>
          <p
            style={styles.whatIUseInfo}
            onClick={handleSocialMediaClick.bind(
              this,
              "https://matthew.wagerfield.com/parallax/"
            )}
          >
            parallax.js
          </p>
          <p
            style={styles.whatIUseInfo}
            onClick={handleSocialMediaClick.bind(this, "https://unsplash.com/")}
          >
            Unsplash
          </p>
        </div>
        <div className="fade-in" style={styles.arrow}></div>
      </>
    );
  }
}

const styles = {
  whatIUsePopUp: {
    position: "absolute",
    right: "-5px",
    top: "44px",
    width: "90%",
    height: "fit-content",
    background: "white",
    zIndex: "1",
    border: "1px solid rgba(128, 128, 128, 0.28)",
    borderRadius: "5px",
    padding: "0 10px 15px",
  },
  arrow: {
    width: "0px",
    height: "0px",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    borderBottom: "15px solid white",
    position: "absolute",
    right: "6px",
    top: "32px",
    zIndex: "2",
  },
  whatIUseHeader: {
    margin: "20px 15px 0",
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
  },
  whatIUseHeaderUnderline: {
    width: "150px",
    height: "8px",
    background: "rgba(0, 0, 0, 0.15)",
    borderRadius: "5px",
    margin: "10px auto 40px",
  },
  whatIUseInfo: {
    cursor: "pointer",
    width: "fit-content",
    margin: "10px auto",
    textAlign: "center",
    fontSize: "18px",
    color: "#0095f7",
  },
};

export default WhatIUse;
