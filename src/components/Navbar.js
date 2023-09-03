import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="centre">
        <div className="logo">
          <p className="logoName">Dictionary App</p>
        </div>

        <div className="item">
          <nav className="link">
            <Link className="Linnk" to="/">
              Home
            </Link>
            <Link className="Linnk" to="/history">
              History
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
