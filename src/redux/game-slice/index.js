import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BACKEND_URL } from "../../data";
import { localGame } from "../../helpers";

const timeZone = -(new Date().getTimezoneOffset() / 60);

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  },
};

export const SetLiveGamesThunk = createAsyncThunk(
  "games/SetGamesThunk",
  async function (type, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BACKEND_URL}/list-live?Category=${type}&Timezone=${timeZone}`,
        options
      );
      if (!response.ok) {
        throw new Error("something is wrong");
      }
      const data = await response.json();
      return data.Stages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const SetDateGamesThunk = createAsyncThunk(
  "games/SetDateGamesThunk",
  async function ({ type, date }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BACKEND_URL}/list-by-date?Category=${type}&Date=${date}&Timezone=${timeZone}`,
        options
      );
      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      return data.Stages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

export const gameSlice = createSlice({
  name: "games",
  initialState: {
    singleGame: localGame(),
    games: null,
    status: null,
    error: null,
  },
  reducers: {
    setGames(state, action) {
      const gamesFromBackend = action.payload.games;
      return {
        ...state,
        games: gamesFromBackend,
      };
    },
    setSingleGame(state, action) {
      const choosenGame = action.payload.game;
      return {
        ...state,
        singleGame: choosenGame,
      };
    },
  },
  extraReducers: {
    [SetLiveGamesThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [SetLiveGamesThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.games = action.payload;
    },
    [SetLiveGamesThunk.rejected]: setError,
    [SetDateGamesThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [SetDateGamesThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.games = action.payload;
    },
    [SetDateGamesThunk.rejected]: setError,
  },
});

export const { setGames, setSingleGame } = gameSlice.actions;

export default gameSlice.reducer;
