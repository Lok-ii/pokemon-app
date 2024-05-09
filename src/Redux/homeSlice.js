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
  open: false,
  filteredData: [],
  abilityList: [],
  typeList: [],
  locationList: [],
  speciesList: [],
  charactersticsList: [],
  groupList: [],
  habitatList: [],
  filterOptions: {
    ability: "",
    type: "",
    location: "",
    species: "",
    group: "",
    habitat: "",
  },
  error: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload];
    },
    setOpen: (state, action) => {
      state.open = action.payload;
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
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedFilters: (state, action) => {
      state.filterOptions = {
        ...state.filterOptions,
        [action.payload.name]: action.payload.value,
      };
      console.log(state.filterOptions);
    },
  },
});

export const {
  setPokemons,
  setPageLink,
  setFilteredData,
  setLists,
  setError,
  setSelectedFilters,
  setOpen,
} = homeSlice.actions;

export default homeSlice.reducer;
