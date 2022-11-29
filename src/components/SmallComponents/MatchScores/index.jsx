import React from "react";

export const MatchScore = ({ type, game }) => {
  return (
    <>
      {type === "tennis" ? (
        <div className="tennis_card_scores_info">
          {game.Tr1S1 ? (
            <div className="tennis_card_scores_info_set">
              <p className="event_result">{game.Tr1S1}</p>
              <p className="event_result">{game.Tr2S1}</p>
            </div>
          ) : (
            ""
          )}
          {game.Tr1S2 ? (
            <div className="tennis_card_scores_info_set">
              <p className="event_result">{game.Tr1S2}</p>
              <p className="event_result">{game.Tr2S2}</p>
            </div>
          ) : (
            ""
          )}
          {game.Tr1S3 ? (
            <div className="tennis_card_scores_info_set">
              <p className="event_result">{game.Tr1S3}</p>
              <p className="event_result">{game.Tr2S3}</p>
            </div>
          ) : (
            ""
          )}
          {game.Tr1S4 ? (
            <div className="tennis_card_scores_info_set">
              <p className="event_result">{game.Tr1S4}</p>
              <p className="event_result">{game.Tr2S4}</p>
            </div>
          ) : (
            ""
          )}
          {game.Tr1S5 ? (
            <div className="tennis_card_scores_info_set">
              <p className="event_result">{game.Tr1S5}</p>
              <p className="event_result">{game.Tr2S5}</p>
            </div>
          ) : (
            ""
          )}
          {game.Tr1S1 ? (
            <div className="tennis_card_scores_info_set tennis_card_scores_info_game">
              <p className="event_result">{game.Tr1G}</p>
              <p className="event_result">{game.Tr2G}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="event_card_scores_info">
          <p className="event_result">{game.Tr1}</p>
          <p className="event_result">{game.Tr2}</p>
        </div>
      )}
    </>
  );
};
