import moment from "moment";
import React from "react";
import { IMG_URL } from "../../../data";
import { nonStartDate, returnDate } from "../../../helpers";
import "./styles.css";

export const SingleGameInfo = ({ singleGame }) => {
  const matchDate = moment(nonStartDate(singleGame)).format("DD-MMM");
  return (
    <div className="single_game_info">
      <div className="single_game_side">
        <div className="single_game_side_img">
          <img src={`${IMG_URL}/${singleGame.T1[0].Img}`} alt="name" />
        </div>
        <h6>{singleGame.T1[0].Nm}</h6>
      </div>
      <div className="single_game_match_info">
        {singleGame.Eps !== "NS" ? (
          <>
            <h5>{`${singleGame.Tr1} - ${singleGame.Tr2}`}</h5>
            <p>{singleGame.Eps}</p>
          </>
        ) : (
          <>
            <h5>{returnDate(singleGame)}</h5>
            <p>{matchDate}</p>
          </>
        )}
      </div>
      <div className="single_game_side">
        <div className="single_game_side_img">
          <img src={`${IMG_URL}/${singleGame.T2[0].Img}`} alt="name" />
        </div>
        <h6>{singleGame.T2[0].Nm}</h6>
      </div>{" "}
    </div>
  );
};
