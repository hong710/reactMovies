import React from "react";

function SearchBar({ handleInputChange, inputValue }) {
  return (
    <div className=" container ">
      
        <div className="d-flex">
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
  );
}

export default SearchBar;
