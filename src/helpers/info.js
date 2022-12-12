import { SingleGameEvent } from "../components/SingleGame/SingleGameEvent";

export function ContentType({ matchInfo, singleGameDetails, type }) {
  if (type === "soccer") {
    return (
      <SingleGameEvent
        matchInfo={matchInfo}
        singleGameDetails={singleGameDetails}
      />
    );
  }
}
