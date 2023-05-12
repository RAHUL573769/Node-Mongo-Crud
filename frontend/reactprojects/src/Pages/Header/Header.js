import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="adduser">Add User</Link>
          <Link to="seeuser">See Users</Link>
          <Link to="login">Login</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
