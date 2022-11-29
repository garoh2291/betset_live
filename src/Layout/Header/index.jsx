import React from "react";
import darkLogo from "../../assets/images/logo_dark.png";
import "./styles.css";

export const Header = () => {
  return (
    <div className="header_layout">
      <div className="logo_header_wrapper">
        <a href="https://betset.me/" target={"_blank"} rel="noreferrer">
          <img src={darkLogo} alt="logo" />
        </a>
      </div>
    </div>
  );
};
