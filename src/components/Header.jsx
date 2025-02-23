import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('token');
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">ShoppyGlobe</Link>
        </div>
        <ul className="nav-links">
          {token ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
