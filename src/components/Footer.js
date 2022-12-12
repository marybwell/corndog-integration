import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul>
          <li>Popular</li>
          <li>Search</li>
          <li>Categories</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="container">
        <div className="logo-footer">
          <Logo />
        </div>
        <p>Corn Dog inc. Copyright ©</p>
      </div>
    </div>
  );
};

export default Footer;
