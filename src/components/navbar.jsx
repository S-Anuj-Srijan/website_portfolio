// src/components/ComponentName.jsx

import React from 'react';
import '../styles/navbar.css'; // (Optional if you have CSS)

function Navbar(props) {
  return (
    <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tech/passion">Passion</a></li>
          <li><a href="/tech/abtme">Tech</a></li>
          <li><a href="/tech/music">Hobbies</a></li>
          <li><a href="https://github.com/S-Anuj-Srijan/website_portfolio">Game</a></li>
        </ul>
      </nav>
  );
}

export default Navbar;
