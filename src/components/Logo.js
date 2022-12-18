import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink exact to="/">
          <img className="logo" src="../images/logocorndog.png" alt="logo" />
        </NavLink>
    )
}

export default Logo;