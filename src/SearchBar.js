import React from "react";

function SearchBar({ handleInputChange, inputValue }) {
  return (
    <div className="container">
      <div className="input-group row-cols-12">
        <div className="form-outline">
          <input
            id="search-focus"
            type="search"
            className="form-control"
            placeholder="Search movie title..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
