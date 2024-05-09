import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pageLink: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
  colorArray: [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ],
  filteredData: [],
  abilityList: [],
  typeList: [],
  locationList: [],
  speciesList: [],
  charactersticsList: [],
  groupList: [],
  habitatList: [],
  abilitiesSelect: "",
  typesSelect: "",
  locationSelect: "",
  speciesSelect: "",
  groupSelect: "",
  habitatSelect: "",
  error: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload];
    },
    setPageLink: (state, action) => {
      state.pageLink = action.payload;
    },
    setFilteredData: (state, action) => {
      if (action.payload.type === "full") {
        state.filteredData = [...state.filteredData, ...action.payload.data];
      } else {
        state.filteredData = action.payload;
      }
    },
    setLists: (state, action) => {
      state.abilityList = action.payload.abilities;
      state.typeList = action.payload.types;
      state.locationList = action.payload.locations;
      state.speciesList = action.payload.species;
      // state.charactersticsList = action.payload.characteristics;
      state.groupList = action.payload.groups;
      state.habitatList = action.payload.habitats;
    },
    setAbilitiesSelect: (state, action) => {
      state.abilitiesSelect = action.payload;
    },
    setTypesSelect: (state, action) => {
      state.typesSelect = action.payload;
    },
    setLocationSelect: (state, action) => {
      state.locationSelect = action.payload;
    },
    setSpeciesSelect: (state, action) => {
      state.speciesSelect = action.payload;
    },
    setGroupSelect: (state, action) => {
      state.groupSelect = action.payload;
    },
    setHabitatSelect: (state, action) => {
      state.habitatSelect = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPokemons,
  setPageLink,
  setFilteredData,
  setLists,
  setAbilitiesSelect,
  setTypesSelect,
  setLocationSelect,
  setSpeciesSelect,
  setGroupSelect,
  setHabitatSelect,
  setError,
} = homeSlice.actions;

export default homeSlice.reducer;
