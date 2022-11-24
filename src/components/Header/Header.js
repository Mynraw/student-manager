import React from "react";

const Header = () => {
  return (
    <header className="header-app">
      <div>
        <h1>Student Manager</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href={"#test"}>Home</a>
          </li>
          <li>
            <a href={"#test"}>About</a>
          </li>
          <li>
            <a href={"#test"}>Exit</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
