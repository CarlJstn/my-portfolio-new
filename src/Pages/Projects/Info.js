import React, { Component } from "react";
import { InfoOutlined } from "@material-ui/icons";

class Info extends Component {
  render() {
    const { show, text, handleMouseOver, handleMouseOut } = this.props;

    return (
      <>
        <InfoOutlined
          style={styles.infoIcon}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
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
    top: "3px",
    margin: "0 3px 0 0",
    fontSize: "18px",
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
    bottom: "106%",
    left: "-10px",
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
    top: "-4px",
    left: "-1px",
  },
};

export default Info;
