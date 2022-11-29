import React, { useState } from "react";
import { LiveButton } from "../SmallComponents/LiveButton";
import "./styles.css";

export const EventFilter = () => {
  const [checked, setChecked] = useState("live");

  const changeDate = (date) => {
    setChecked(date);
  };
  return (
    <div className="event_filter_section">
      <LiveButton changeDate={changeDate} checked={checked} label={"live"} />
    </div>
  );
};
