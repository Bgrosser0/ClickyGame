import React from "react";

const Footer = props => (
  <div className={`navbar${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

export default Footer;
