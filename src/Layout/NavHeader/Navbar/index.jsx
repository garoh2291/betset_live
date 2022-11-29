import React, { useContext } from "react";
import { SportTypeContext } from "../../../context";
import { NAVBAR_PAGES } from "../../../data";
import { NavItem } from "./NavItem";
import "./styles.css";

const { football, hockey, basketball, tennis } = NAVBAR_PAGES;

export const Navbar = () => {
  const { setType } = useContext(SportTypeContext);

  const onSportChange = (newType) => {
    newType === "" ? setType("soccer") : setType(newType);
  };
  return (
    <nav className="navigation_header_bar">
      <ul className="navigation_header_menu">
        <NavItem
          link={football.link}
          label={football.label}
          onSportChange={onSportChange}
        />
        <NavItem
          link={hockey.link}
          label={hockey.label}
          onSportChange={onSportChange}
        />
        <NavItem
          link={basketball.link}
          label={basketball.label}
          onSportChange={onSportChange}
        />
        <NavItem
          link={tennis.link}
          label={tennis.label}
          onSportChange={onSportChange}
        />
      </ul>
    </nav>
  );
};
