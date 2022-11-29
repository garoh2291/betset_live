import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavItem = ({ label, link, onSportChange }) => {
  return (
    <li className="nav__item">
      <NavLink
        to={`/${link}`}
        onClick={() => onSportChange(link)}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {label}
      </NavLink>
    </li>
  );
};
