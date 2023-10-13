import React, { useState } from 'react';
import '../css/style.css'
import logo from '../img/logo.svg'
import {IoCloseOutline} from 'react-icons/io5'

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const toggleSearchBar = () => {
    setSearchBarActive(!searchBarActive);
    document.body.classList.toggle("active");
  };

  const closeSearchBar = () => {
    setSearchBarActive(false);
    document.body.classList.remove("active");
  };

  return (
    <div>
      <header className={`header section ${navbarActive ? 'active' : ''}`} data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} width="129" height="40" alt="Blogy logo" />
          </a>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#" className="navbar-link hover:underline" data-nav-link>
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover:underline" data-nav-link>
                  Recent Post
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover:underline" data-nav-link>
                  Membership
                </a>
              </li>
            </ul>
          </nav>
          <div className="wrapper">
            <button className="search-btn" aria-label="search" data-search-toggler onClick={toggleSearchBar}>
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
              <span className="span">Search</span>
            </button>
            <button className={`nav-toggle-btn ${navbarActive ? 'active' : ''}`} aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}>
              <span className="span one"></span>
              <span className="span two"></span>
              <span className="span three"></span>
            </button>
            <a href="#" className="btn">
              Join
            </a>
          </div>
        </div>
      </header>
      <div className={`search-bar ${searchBarActive ? 'active' : ''}`} data-search-bar>
        <div className="input-wrapper">
          <input type="search" name="search" placeholder="Search" className="input-field" />
          <button className="search-close-btn" aria-label="close search bar" data-search-toggler onClick={closeSearchBar}>
            <IoCloseOutline/>
          </button>
        </div>
        <p className="search-bar-text">Please enter at least 3 characters</p>
      </div>
      <div className={`overlay ${searchBarActive ? 'active' : ''}`} data-overlay onClick={closeSearchBar}></div>
    </div>
  );
};

export default Header;
