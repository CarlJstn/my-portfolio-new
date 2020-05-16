import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ to, text, hasSeparator }) => {
  return (
    <>
      <NavLink className="header-link" style={styles.link} to={to}>
        {text}
      </NavLink>
      {hasSeparator && <span style={styles.separator}>|</span>}
    </>
  );
};

const styles = {
  link: {
    margin: "0 8px",
    color: "#2196F3",
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  separator: {
    margin: "0 2%",
    color: "#2196F3",
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default HeaderLink;
