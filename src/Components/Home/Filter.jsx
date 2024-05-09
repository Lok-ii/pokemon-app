import Select from "react-select";
import { getFilterLists, getSpecificData } from "../../utils/fetchPokemons";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setFilteredData,
  setLists,
  setSelectedFilters,
} from "../../Redux/homeSlice";
import { useEffect } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const {
    pokemons,
    filteredData,
    abilityList,
    typeList,
    locationList,
    speciesList,
    filterOptions,
    groupList,
    habitatList,
    error,
  } = useSelector((store) => store.home);
  const getLists = async () => {
    const listData = await getFilterLists();
    dispatch(setLists(listData));
  };

  const listArray = [
    {
      label: "ability",
      options: abilityList,
    },
    {
      label: "type",
      options: typeList,
    },
    {
      label: "location",
      options: locationList,
    },
    {
      label: "species",
      options: speciesList,
    },
    {
      label: "group",
      options: groupList,
    },
    {
      label: "habitat",
      options: habitatList,
    },
  ];

  useEffect(() => {
    getLists();
  }, []);

  useEffect(() => {
    const filterPokemons = async () => {
      let filterArray = [...filteredData];
      if (filterOptions.ability !== "") {
        filterArray = filterArray.filter((pokemon) => {
          return pokemon.abilities.some((e) => {
            return e.ability.name === filterOptions.ability;
          });
        });
      }

      if (filterOptions.type !== "") {
        filterArray = filterArray.filter((pokemon) => {
          return pokemon.types.some((e) => {
            return e.type.name === filterOptions.type;
          });
        });
      }
      if (filterOptions.location !== "") {
        filterArray = filterArray.filter((pokemon) => {
          return pokemon.locations.some((e) => {
            return e.location_area.name === filterOptions.location;
          });
        });
      }

      if (filterOptions.species !== "") {
        filterArray = filterArray.filter((pokemon) => {
          return pokemon.species.name === filterOptions.species;
        });
      }

      if (filterOptions.habitat !== "") {
        const getHabitatData = await getSpecificData(filterOptions.habitat);

        filterArray = filterArray.filter((pokemon) => {
          return getHabitatData.some((e) => e.name === pokemon.name);
        });
      }

      if (
        Object.values(filterOptions).every((e) => e == "") &&
        filterArray.length == 0
      ) {
        dispatch(setFilteredData(pokemons));
        dispatch(setError(""));
      } else if (
        filterArray.length > 0 &&
        Object.values(filterOptions).some((e) => e != "")
      ) {
        dispatch(setFilteredData(filterArray));
        dispatch(setError(""));
      } else {
        dispatch(setFilteredData(pokemons));
        dispatch(setError("No Results Found"));
      }
    };
    filterPokemons();
  }, [dispatch, filterOptions, pokemons]);

  const selectValues = (value, name) => {
    dispatch(setSelectedFilters({ name, value }));
  };
  return (
    <div className="w-full flex flex-col gap-4 sticky top-[14.7rem] z-[90] bg-white">
      <div className="w-full flex items-center flex-wrap justify-around">
        {listArray.map((list, idx) => {
          return (
            <Select
              key={"select" + idx}
              ref={list.ref}
              className="basic-single w-[15rem]"
              classNamePrefix="select"
              defaultValue={""}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isSearchable={true}
              name={list.label}
              options={list.options}
              onChange={(e) => {
                if (e && e.label !== "habitat" && e.label !== "group") {
                  selectValues(e.label, list.label);
                } else if (
                  e &&
                  (e.label === "habitat" || e.label === "group")
                ) {
                  selectValues(e.id, list.label);
                } else {
                  selectValues("", list.label);
                }
              }}
              placeholder={`Select ${list.label}`}
            />
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center">{error}</div>
    </div>
  );
};

export default Filter;
