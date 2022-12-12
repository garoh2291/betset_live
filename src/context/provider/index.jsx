import { useState } from "react";
import { SportTypeContext } from "..";
import { useLocation } from "react-router-dom";
import moment from "moment";

export const SportTypeContextProvider = ({ children }) => {
  const location = useLocation();
  const sportType = location.pathname.substring(1)
    ? location.pathname.substring(1)
    : "soccer";

  const today = new Date();
  // console.log(date);

  const [date, setDate] = useState(moment(new Date()).format("YYYYMMDD"));

  const [type, setType] = useState(sportType);

  const [active, setActive] = useState(true);

  return (
    <SportTypeContext.Provider
      value={{ type, setType, active, setActive, date, setDate, today }}
    >
      {children}
    </SportTypeContext.Provider>
  );
};
