import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/">About</NavLink>
        </li>
        <li>
            <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
