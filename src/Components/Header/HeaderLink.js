import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ to, text, hasSeparator }) => {
  return (
    <>
      <NavLink className="mx-1 text-white text-xl" to={to}>
        {text}
      </NavLink>
      {hasSeparator && <span className="mx-3 text-white text-xl">|</span>}
    </>
  );
};

export default HeaderLink;
