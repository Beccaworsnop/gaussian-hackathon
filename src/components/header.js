import React from "react";
import "./../styles.css"; 

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.svg" alt="Bambi's Vision" className="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Learn</li>
          <li>Take Action</li>
          <li>Resources</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
