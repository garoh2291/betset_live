import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { options } from "../../../redux/game-slice";
import { useParams } from "react-router-dom";
import { SingleGameEvent } from "../SingleGameEvent";
import { SingleGame } from "../SingleGameFilter";
import { SingleGameInfo } from "../SingleGameInfo";
import "./styles.css";
import { BACKEND_URL } from "../../../data";
import { SportTypeContext } from "../../../context";
import { ContentType } from "../../../helpers/info";

export const SingleGameBody = () => {
  const { singleGame } = useSelector((state) => state.games);
  const [singleGameDetails, setSingleGameDetails] = useState(null);
  const [matchInfo, setMatchInfo] = useState("Info");
  const { type } = useContext(SportTypeContext);

  const params = useParams();
  const gameId = params.gameId;

  useEffect(() => {
    console.log(matchInfo);
    if (matchInfo === "Info") {
      async function getDetail() {
        try {
          const res = await fetch(
            `${BACKEND_URL}/get-info?Category=soccer&Eid=${gameId}`,
            options
          );
          if (!res.ok) {
            throw new Error("something is wrong");
          }
          const data = await res.json();

          setSingleGameDetails(data);
        } catch (error) {
          console.log(error);
        }
      }

      getDetail();
    }
  }, [matchInfo, setSingleGameDetails, gameId]);

  const changeInfoHandler = (info) => {
    console.log(info);
    setMatchInfo(info);
  };

  if (!singleGame) {
    return <h6>Loading</h6>;
  }
  return (
    <div className="single_game_body_wrapper">
      <SingleGameInfo singleGame={singleGame} />
      <div className="single_game_body_filter">
        <SingleGame
          label={"Info"}
          matchInfo={matchInfo}
          onHandle={changeInfoHandler}
        />
        <SingleGame
          label={"Summary"}
          matchInfo={matchInfo}
          onHandle={changeInfoHandler}
        />
        {singleGame.Eps !== "NS" ? (
          <SingleGame
            label={"Statistics"}
            matchInfo={matchInfo}
            onHandle={changeInfoHandler}
          />
        ) : (
          ""
        )}
        <SingleGame
          label={"Line-Ups"}
          matchInfo={matchInfo}
          onHandle={changeInfoHandler}
        />
      </div>
      {ContentType({ matchInfo, singleGameDetails, type })}
    </div>
  );
};
