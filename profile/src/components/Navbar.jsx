import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <h3>Prince Soni</h3>
      </div>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#skills">Skills</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </nav>

    </header>
  );
}