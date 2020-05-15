import React, { Component } from "react";
import { Language, GitHub } from "@material-ui/icons";

class WebLink extends Component {
  render() {
    const { github, show, text, handleMouseOver, handleMouseOut } = this.props;

    return (
      <>
        {github ? (
          <GitHub
            style={styles.infoIcon}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        ) : (
          <Language
            style={styles.infoIcon}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        )}

        {show && (
          <>
            <div style={styles.info}>{text}</div>
            <div style={styles.arrow}></div>
          </>
        )}
      </>
    );
  }
}

const styles = {
  infoIcon: {
    position: "relative",
    margin: "0 5px",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
  },
  info: {
    position: "absolute",
    background: "white",
    color: "black",
    zIndex: "1",
    padding: "10px",
    width: "250px",
    bottom: "149%",
    left: "-120px",
    fontSize: "15px",
    borderRadius: "5px",
  },
  arrow: {
    width: "0px",
    height: "0px",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: "10px solid white",
    position: "absolute",
    top: "-15px",
    left: "7px",
  },
};

export default WebLink;
