import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
  loading: false,
  abilities: [],
  bookmarks: [],
  moves: [],
  selectedTab: "baseStats",
  selectList: [],
  compareOnePokemon: "bulbasaur",
  compareTwoPokemon: "venusaur",
  compareOneData: {},
  compareTwoData: {},
  abilitiesOne: {},
  abilitiesTwo: {},
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
      if (action.payload.type === "local") {
        state.bookmarks = action.payload.data;
      } else {
        if (state.bookmarks.some((e) => e.id === action.payload.id)) {
          state.bookmarks = state.bookmarks.filter(
            (e) => e.id !== action.payload.id
          );
        } else {
          state.bookmarks = [...state.bookmarks, action.payload];
        }
      }
      console.log(state.bookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
    },
    setSelectList: (state, action) => {
      state.selectList = action.payload;
    },
    setTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setCompareOne: (state, action) => {
      state.compareOnePokemon = action.payload;
    },
    setCompareTwo: (state, action) => {
      state.compareTwoPokemon = action.payload;
    },
    setCompareOneData: (state, action) => {
      state.compareOneData = action.payload;
    },
    setCompareTwoData: (state, action) => {
      state.compareTwoData = action.payload;
    },
    setAbilitiesOne: (state, action) => {
      state.abilitiesOne = action.payload;
    },
    setAbilitiesTwo: (state, action) => {
      state.abilitiesTwo = action.payload;
    },
  },
});

export const {
  setDetails,
  setLoading,
  setAbilities,
  setBookmarks,
  setMoves,
  setTab,
  setSelectList,
  setCompareOne,
  setCompareTwo,
  setCompareOneData,
  setCompareTwoData,
  setAbilitiesOne,
  setAbilitiesTwo,
} = detailsSlice.actions;

export default detailsSlice.reducer;
