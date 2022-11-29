import React from "react";
import { useSelector } from "react-redux";
import { EventsByLeague } from "../EventsByLeague";
import "./styles.css";

export const EventBody = () => {
  const { games, status, error } = useSelector((state) => state.games);
  if (!games) {
    if (error) {
      return (
        <div className="event_body_wrapper">
          <div className="no_live">Something Wrong , try again </div>
        </div>
      );
    }

    return (
      <div className="event_body_wrapper">
        <div className="no_live">Loading Events</div>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="event_body_wrapper">
        <div className="no_live">Loading Events</div>
      </div>
    );
  }

  return (
    <div className="event_body_wrapper">
      {!games.length ? (
        <div className="no_live">
          There are no live games currently in progress
        </div>
      ) : (
        games.map((league) => (
          <EventsByLeague key={league.Sid} league={league} />
        ))
      )}
    </div>
  );
};
