import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => (
  <div>
    <NavLink
      exact
      to="/"
      exactstyle={linkStyles}
      activeStyle={{ background: "darkblue" }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exactstyle={linkStyles}
      activeStyle={{ background: "darkblue" }}
    >
      About
    </NavLink>
    <NavLink
      to="/Login"
      exactstyle={linkStyles}
      activeStyle={{ background: "darkblue" }}
    >
      Login
    </NavLink>
  </div>
);

export default NavBar;
