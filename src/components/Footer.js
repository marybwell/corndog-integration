import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul>
         <a href="/"> <li>Home</li></a>
         <a href="/search"> <li>Search</li></a>
         <a href="/categories"> <li>Categories</li></a>
         <a href="/about-us"> <li>About Us</li></a>
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
