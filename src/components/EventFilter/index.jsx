import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { SportTypeContext } from "../../context";
import { SetDateGamesThunk, SetLiveGamesThunk } from "../../redux/game-slice";
import { DateButton } from "../SmallComponents/DateButton";
import { LiveButton } from "../SmallComponents/LiveButton";
import "./styles.css";

export const EventFilter = () => {
  const { setActive, type } = useContext(SportTypeContext);
  const [checked, setChecked] = useState("live");
  const dispatch = useDispatch();

  const changeDate = (args) => {
    const { label, functionDate } = args;
    setChecked(label);
    const date = functionDate;

    if (functionDate === "live") {
      setActive(true);
      dispatch(SetLiveGamesThunk(type));
    } else {
      setActive(false);
      dispatch(SetDateGamesThunk({ type, date }));
      console.log(checked);
    }
  };
  return (
    <div className="event_filter_section">
      <LiveButton changeDate={changeDate} checked={checked} label={"live"} />
      <DateButton
        changeDate={changeDate}
        checked={checked}
        label={"yesterday"}
      />
      <DateButton changeDate={changeDate} checked={checked} label={"today"} />
      <DateButton
        changeDate={changeDate}
        checked={checked}
        label={"tomorrow"}
      />
    </div>
  );
};
