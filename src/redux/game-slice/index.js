import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BACKEND_URL } from "../../data";

const timeZone = -(new Date().getTimezoneOffset() / 60);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  },
};

export const SetGamesThunk = createAsyncThunk(
  "games/SetGamesThunk",
  // function (type, { dispatch, rejectWithValue }) {
  //   fetch(
  //     `${BACKEND_URL}/list-live?Category=${type}&Timezone=${timeZone}`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const games = data.Stages;
  //       dispatch(setGames({ games }));
  //     })
  //     .catch((err) => rejectWithValue(err.message));
  // }

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

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

export const gameSlice = createSlice({
  name: "games",
  initialState: {
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
  },
  extraReducers: {
    [SetGamesThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [SetGamesThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.games = action.payload;
    },
    [SetGamesThunk.rejected]: setError,
  },
});

export const { setGames } = gameSlice.actions;

export default gameSlice.reducer;
