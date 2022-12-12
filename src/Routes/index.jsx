import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { BasketballPage } from "../pages/BasketballPage";
import { FootballPage } from "../pages/FootballPage";
import { HockeyPage } from "../pages/HockeyPage";
import { SingleGamePage } from "../pages/SingleGamePage";
import { TennisPage } from "../pages/TennisPage";

export const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="" element={<FootballPage />} />
      <Route path="/:gameId" element={<SingleGamePage />} />
      <Route path="tennis" element={<TennisPage />} />
      <Route path="hockey" element={<HockeyPage />} />
      <Route path="basketball" element={<BasketballPage />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};
