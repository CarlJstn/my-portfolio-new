import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ to, text, activeLink, handleClick, hasSeparator }) => {
  return (
    <>
      <span style={styles.linkContainer}>
        <NavLink
          className="header-link"
          style={styles.link}
          to={to}
          onClick={handleClick.bind(this, to)}
        >
          {text}
        </NavLink>
        {activeLink === to && (
          <span className="fade-in" style={styles.activeIndicator}></span>
        )}
      </span>

      {hasSeparator && <span style={styles.separator}>|</span>}
    </>
  );
};

const styles = {
  linkContainer: {
    position: "relative",
  },
  link: {
    color: "#2196F3",
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: "bold",
    WebkitTapHighlightColor: "transparent",
  },
  separator: {
    margin: "0 2%",
    color: "#2196F3",
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  activeIndicator: {
    borderRadius: "10px",
    position: "absolute",
    height: "7px",
    width: "15px",
    background: "rgb(33, 150, 243)",
    left: "40%",
    bottom: "-12px",
  },
};

export default HeaderLink;
