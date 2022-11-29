import React from "react";
import "./styles.css";

export const LiveButton = ({ changeDate, checked, label }) => {
  return (
    <button
      className={
        checked === label
          ? "live_radio_button checkedLiveButton"
          : "live_radio_button"
      }
      onClick={() => changeDate("live")}
    >
      {label.toUpperCase()}
    </button>
  );
};
