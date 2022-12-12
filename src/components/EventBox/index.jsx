import React, { useContext, useEffect, useState } from "react";
import { SportTypeContext } from "../../context";
import { useDispatch } from "react-redux";
import { SetDateGamesThunk, SetLiveGamesThunk } from "../../redux/game-slice";

import "./styles.css";
import { EventFilter } from "../EventFilter";
import { EventBody } from "../EventBody";

export const EventBox = () => {
  const { type, active, date } = useContext(SportTypeContext);
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching) {
      active
        ? dispatch(SetLiveGamesThunk(type))
        : dispatch(SetDateGamesThunk({ type, date }));
    }
    setFetching(false);
  }, [fetching, type, dispatch, active, date]);

  // useEffect(() => {
  //   const select = setInterval(() => {
  //     setFetching(true);
  //   }, 40000);
  //   return () => clearInterval(select);
  // }, [fetching]);
  return (
    <div className="event_box_wrapper">
      <EventFilter />
      <EventBody />
    </div>
  );
};
