import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game-slice";

export default configureStore({
  reducer: {
    games: gameSlice,
  },
});
