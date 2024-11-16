import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../themetext/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import ThemeText from '../themetext/ThemeText';

const NavBar = ({ cartItems, onEmptyCart }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav 
      className={`navbar navbar-expand-lg ${theme === 'dark' ? 'text-white' : 'text-dark'}`} 
      style={{ backgroundColor: theme === 'dark' ? '#f1faee' : '#333' }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: theme === 'dark' ? 'black' : 'white' }}>
          MarketThundra
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/clips" style={{ color: theme === 'dark' ? 'black' : 'white' }}>
                Clips
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia" style={{ color: theme === 'dark' ? 'black' : 'white' }}>
                Historia
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <CartWidget itemCount={cartItems} onEmptyCart={onEmptyCart} />
          <ThemeText />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
