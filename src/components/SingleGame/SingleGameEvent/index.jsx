import moment from "moment";
import React from "react";
import { nonStartDate } from "../../../helpers";
import "./styles.css";

export const SingleGameEvent = (props) => {
  const { matchInfo, singleGameDetails } = props;
  console.log(singleGameDetails);

  if (!singleGameDetails) {
    return <h2>Loading</h2>;
  }
  const matchDate = moment(nonStartDate(singleGameDetails)).format(
    "DD MMM YYYY"
  );
  console.log(matchDate);
  return (
    <div className="single_game_main_event_wrapper">
      {matchInfo === "Info" ? (
        <h6 className="info_header_single_game">MATCH INFO</h6>
      ) : (
        ""
      )}
      <div className="single_game_informative_text_div">
        {matchDate ? (
          <div className="single_game_info_text_part">
            <div className="single_game_date">
              <div className="single_img">
                <img
                  src="https://www.livescore.com/ls-web-assets/svgs/common/calendar-62a86ad26c51fe49ea1c6abb202a15b4.svg"
                  alt="calendar"
                />
              </div>
              <p className="single_small_info">{matchDate}</p>
            </div>
            {singleGameDetails.Refs ? (
              <div className="single_game_refery">
                <div className="single_img">
                  <img
                    src="https://www.livescore.com/ls-web-assets/svgs/common/referee-d0e056d51a19081940f87521c60a495b.svg"
                    alt="calendar"
                  />
                </div>
                <p className="single_small_info">{`${singleGameDetails.Refs[0].Nm}(${singleGameDetails.Refs[0].Cn})`}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        {singleGameDetails.Vnm ? (
          <div className="single_game_info_text_part">
            <div className="single_game_stadium">
              <div className="single_img">
                <img
                  src="https://www.livescore.com/ls-web-assets/svgs/common/venue-bb6d741e46d7436e13f2cf6ce72436b8.svg"
                  alt="calendar"
                />
              </div>
              <p className="single_small_info">{singleGameDetails.Vnm}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
