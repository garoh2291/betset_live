import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SportTypeContext } from "../../context";
import { IMG_URL } from "../../data";
import { returnDate } from "../../helpers";
import { MatchScore } from "../SmallComponents/MatchScores";
import { setSingleGame } from "../../redux/game-slice";
import "./styles.css";

export const EventByGame = ({ game }) => {
  const { type } = useContext(SportTypeContext);
  const dispatch = useDispatch();
  const onGameHandler = () => {
    localStorage.setItem("singleGame", JSON.stringify(game));
    dispatch(setSingleGame({ game }));
  };
  return (
    <div
      // to={`/${game.Eid}`}
      onClick={onGameHandler}
      className="game_event_card"
    >
      <div className="event_card_main_info">
        {game.Eps !== "NS" ? <div className="live_game_indicator"></div> : ""}
        {game.Eps !== "NS" ? (
          <div className="event_time_checker">{game.Eps} </div>
        ) : (
          <div className="event_non_start_time">{returnDate(game)}</div>
        )}
        <div className="event_sides_info">
          <div className="player_info">
            {game.T1[0].Img ? (
              <div className="player_img_wrap">
                <img src={`${IMG_URL}/${game.T1[0].Img}`} alt="name" />
              </div>
            ) : (
              ""
            )}
            {type === "tennis" && game.Esrv === 1 ? (
              <h6 className="player_info_text">
                <i className="active_tennis_game bx bxs-tennis-ball"></i>{" "}
                {game.T1[0].Nm}
              </h6>
            ) : (
              <h6 className="player_info_text">{game.T1[0].Nm}</h6>
            )}
          </div>
          <div className="player_info">
            {game.T2[0].Img ? (
              <div className="player_img_wrap">
                <img src={`${IMG_URL}/${game.T2[0].Img}`} alt="name" />
              </div>
            ) : (
              ""
            )}
            {type === "tennis" && game.Esrv === 2 ? (
              <h6 className="player_info_text">
                <i className="active_tennis_game bx bxs-tennis-ball"></i>{" "}
                {game.T2[0].Nm}
              </h6>
            ) : (
              <h6 className="player_info_text">{game.T2[0].Nm}</h6>
            )}{" "}
          </div>
        </div>
      </div>
      {<MatchScore game={game} type={type} />}
    </div>
  );
};
