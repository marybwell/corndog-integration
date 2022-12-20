import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo';

const Navigation = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function submitForm(event) {
    history.push(`/search`, { q: query });
    event.preventDefault();
  }

  return (
    <div className="navigation">
      <div className="container">
        <div>
          <Logo />
        </div>
        <div className={`navigation-menu ${isDropdownOpen ? 'active' : ''}`}>
          <div onClick={() => { setIsDropdownOpen(false) }} className="navigation-items">
            <NavLink className="navigation-item" activeClassName="nav-active" exact to="/">
              Home
            </NavLink>
            <NavLink className="navigation-item" activeClassName="nav-active" exact to="/search">
              Search
            </NavLink>
            <NavLink className="navigation-item" activeClassName="nav-active" exact to="/categories">
              Categories
            </NavLink>
            <NavLink className="navigation-item" activeClassName="nav-active" exact to="/about-us">
              About Us
            </NavLink>
          </div>

          <div className="search-container">
            <form onSubmit={submitForm}>
              <input
                type="text"
                placeholder="Search..."
                name="search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        { !isDropdownOpen && <div onClick={() => { setIsDropdownOpen(true) }}className="navigation-burger">
          <FontAwesomeIcon icon={faBars} />
        </div>}
        { isDropdownOpen && <div onClick={() => { setIsDropdownOpen(false) }} className="navigation-close">
          <FontAwesomeIcon icon={faXmark} />
        </div>}
      </div>
    </div>
  );
};

export default Navigation;
