import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
      <div className="navigation">
        <div className="container">
        <div>
          <Logo />
        </div>
        <div>
          <NavLink activeClassName="nav-active" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="nav-active" exact to="/search">
            Search
          </NavLink>
          <NavLink activeClassName="nav-active" exact to="/categories">
            Categories
          </NavLink>
          <NavLink activeClassName="nav-active" exact to="/about-us">
            About Us
          </NavLink>
        </div>
        
        <div className="search-container">
    <form action="/">
      <input type="text" placeholder="Search..." name="search"/>
      <button type="submit">Search</button>
    </form>
  </div>
        </div>
      </div>
  
  );
};

export default Navigation;