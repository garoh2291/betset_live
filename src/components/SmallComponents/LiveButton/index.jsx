import React from "react";
import "./styles.css";

export const LiveButton = ({ changeDate, checked, label }) => {
  const functionDate = "live";
  return (
    <button
      className={
        checked === label
          ? "live_radio_button checkedLiveButton"
          : "live_radio_button"
      }
      onClick={() => changeDate({ functionDate, label })}
    >
      {label.toUpperCase()}
    </button>
  );
};
