import React from "react";

function SearchBar() {
  return (
    <div className="input-group">
      <div className="form-outline">
        <input
          id="search-focus"
          type="search"
          className="form-control"
          placeholder="Search"
        />
      </div>
      <button type="button" className="btn btn-primary">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
