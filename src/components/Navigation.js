import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

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
    </div>
  );
};

export default Navigation;
