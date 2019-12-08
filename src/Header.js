import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
  <div className="header">
  <div className="header-right">
  <nav>
     <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/users">
        Users
     </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </nav>
  </div>
</div>
  );
}
export default Header;