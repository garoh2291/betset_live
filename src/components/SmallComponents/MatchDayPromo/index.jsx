import moment from "moment";
import React from "react";
import { sportType } from "../../../helpers";
import "./styles.css";

export const MatchDayPromo = (props) => {
  const { game } = props;
  if (!game) {
    return <h3>Loading</h3>;
  }
  return (
    <div className="match_of_day_promo_wrapper">
      <h6 className="banner_main_text">Match Of The Day</h6>
      <div className="match_day_header">
        <p>{game.league.en}</p>
        {sportType(game.sport)}
      </div>
      <div className="match_day_sides">
        <div className="match_day_side">
          <p>{game.team1.en}</p>
        </div>
        <div className="match_day_time">
          <p>{moment(game.date).format("DD MMM")}</p>
          <p>{moment(game.date).utc().format("HH:mm")}</p>
        </div>
        <div className="match_day_side">
          <p>{game.team2.en}</p>
        </div>
      </div>
    </div>
  );
};
