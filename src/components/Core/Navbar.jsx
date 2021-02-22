import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-nav">
      <div className="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                New Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Kid
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
