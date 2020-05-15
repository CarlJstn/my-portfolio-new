import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ to, text, hasSeparator }) => {
  return (
    <>
      <NavLink
        style={{
          margin: "0 8px",
          color: "#2196F3",
          fontSize: "20px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
        to={to}
      >
        {text}
      </NavLink>
      {hasSeparator && (
        <span
          style={{
            margin: "0 2%",
            color: "#2196F3",
            fontSize: "20px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          |
        </span>
      )}
    </>
  );
};

export default HeaderLink;
