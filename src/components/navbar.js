import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./logo.svg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <a href="#">Learn</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Kid’s Corner</a></li>
              <li><a href="./learn/">Educational Corner</a></li>
              <li><a href="#">Stories</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Take Action</a></li>
        <li><a href="#">Ressources</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
