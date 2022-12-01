import React, { useState } from "react";

const SearchBar = ({ getSearchValue }) => {
  return (
    <div className="search-bar">
      <h1>Student List</h1>
      <input
        type={"text"}
        placeholder={"Search student..."}
        onChange={(e) => getSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
