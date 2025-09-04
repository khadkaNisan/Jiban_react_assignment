import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a href="./index.html">
          <img
            className="logo"
            src="../image/Trekking_logo___Premium_Vector-removebg-preview.png"
            alt="logo"
          />
        </a>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search for destinations, tours, or activities..."
          />
          <button>Search</button>
        </div>
      </div>

      <div className="header-icons">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#featured-destinations">Destinations</a>
          </li>
          <li>
            <a href="#tours">Tours</a>
          </li>
          <li>
            <a href="../page/aboutUs.html">About</a>
          </li>
          <li>
            <a href="../page/login_signUp.html">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
