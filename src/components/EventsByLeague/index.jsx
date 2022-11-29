import React, { useContext } from "react";
import { SportTypeContext } from "../../context";
import { EventByGame } from "../EventByGame";
import "./styles.css";

export const EventsByLeague = ({ league }) => {
  const { type } = useContext(SportTypeContext);
  const { Events } = league;
  console.log(league);
  return (
    <div className="league_match_wrapper">
      <div className="league_info">
        {type === "soccer" ? (
          <div className="league_info_img">
            <img
              src={`https://static.livescore.com/i2/fh/${league.Ccd}.jpg`}
              alt="league_img"
            />
          </div>
        ) : (
          ""
        )}

        <div className="league_info_text">
          <h6 className="league_info_name">{league.Sdn}</h6>
          <p className="leafue_info_country">{league.Cnm}</p>
        </div>
      </div>
      {Events.map((game) => (
        <EventByGame key={game.Eid} game={game} />
      ))}
    </div>
  );
};
