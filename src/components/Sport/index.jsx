import "./styles.css";
import { EventBox } from "../EventBox";
import { getWindowDimensions } from "../../helpers/windowSizes";
import { useEffect, useState } from "react";
import * as moment from "moment";
import { MatchDayPromo } from "../SmallComponents/MatchDayPromo";

export const Sports = () => {
  const { width } = getWindowDimensions();
  const [matchDay, setMatchDay] = useState("");
  const s = new Date();
  const dt = moment(s).format("YYYY-MM-DD HH:mm:ss");
  const dt1 = new Date(`${dt}`);

  const finalDate = moment(dt1).utc(8).toISOString();

  useEffect(() => {
    fetch(`https://betsetnew.herokuapp.com/game?complete_gte=${finalDate}`)
      .then((res) => res.json())
      .then((data) => {
        const game = data.find((match) => match.matchDay !== "no");
        setMatchDay(game);
      });
  }, [setMatchDay, finalDate]);

  console.log(width);
  return (
    <div className="game_section_main_wrapper">
      {/* {width >= 900 ? <div className="addiditional_content"></div> : ""} */}
      <EventBox />
      {/* {width >= 900 ? (
        <div className="addiditional_content">
          <MatchDayPromo game={matchDay} />
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};
