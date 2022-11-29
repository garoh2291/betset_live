import { useState } from "react";
import { SportTypeContext } from "..";
import { useLocation } from "react-router-dom";

export const SportTypeContextProvider = ({ children }) => {
  const location = useLocation();
  const sportType = location.pathname.substring(1)
    ? location.pathname.substring(1)
    : "soccer";

  const [type, setType] = useState(sportType);
  return (
    <SportTypeContext.Provider value={{ type, setType }}>
      {children}
    </SportTypeContext.Provider>
  );
};
