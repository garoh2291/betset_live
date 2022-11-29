import React, { useContext, useEffect, useState } from "react";
import { SportTypeContext } from "../../context";
import { useDispatch } from "react-redux";
import { SetGamesThunk } from "../../redux/game-slice";

import "./styles.css";
import { EventFilter } from "../EventFilter";
import { EventBody } from "../EventBody";

export const EventBox = () => {
  const { type } = useContext(SportTypeContext);
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch();

  //   const today = moment(new Date()).format("YYYYMMDD");
  //   console.log(today);

  useEffect(() => {
    if (fetching) {
      dispatch(SetGamesThunk(type));
    }
    setFetching(false);
  }, [fetching, type, dispatch]);

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
