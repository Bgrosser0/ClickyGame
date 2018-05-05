import React from "react";

const Header = props => (
  <div className={`navbar${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

export default Header;
