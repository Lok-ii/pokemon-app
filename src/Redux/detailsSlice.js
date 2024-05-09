import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
  loading: false,
  abilities: [],
  bookmarks: [],
  moves: [],
  selectedTab: "baseStats",
};

const detailsSlice = createSlice({
  name: "details",
  initialState: initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAbilities: (state, action) => {
      state.abilities = action.payload;
    },
    setMoves: (state, action) => {
      state.moves = action.payload;
    },
    setBookmarks: (state, action) => {
      if (state.bookmarks.indexOf(action.payload) == -1) {
        state.bookmarks.push(action.payload);
      } else {
        state.bookmarks.splice(state.bookmarks.indexOf(action.payload), 1);
      }
    },
    setTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setDetails, setLoading, setAbilities, setBookmarks, setMoves, setTab } =
  detailsSlice.actions;

export default detailsSlice.reducer;
