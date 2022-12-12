import React from "react";
import "./styles.css";

export const SingleGame = (props) => {
  const { label, matchInfo, onHandle } = props;
  return (
    <button
      className={
        matchInfo === label
          ? "single_game_type_button single_active_button"
          : "single_game_type_button"
      }
      onClick={() => onHandle(label)}
    >
      {label}
    </button>
  );
};
