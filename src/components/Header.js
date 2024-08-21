import React from 'react';
import '../styles/app.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">Etifak Store</a>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
        <Link to="/product/1">Product</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
