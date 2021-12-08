import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-info">
        <div className="container bg-info">
          <a className="navbar-brand bg-info" href="#index">
            <i className="bi bi-film bg-info"></i> React{" "}
            <span className="bg-info">Movies</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
