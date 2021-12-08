import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-info">
        <div className="container bg-info">
          <Link to={"/movie-list"} >
            <b className="navbar-brand bg-info">
              <i className="bi bi-film bg-info"></i> React{" "}
              <span className="bg-info">Movies</span>
            </b>
          </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
