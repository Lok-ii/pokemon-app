import Select from "react-select";
import { getFilterLists } from "../../utils/fetchPokemons";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbilitiesSelect,
  setError,
  setFilteredData,
  setGroupSelect,
  setHabitatSelect,
  setLists,
  setLocationSelect,
  setSpeciesSelect,
  setTypesSelect,
} from "../../Redux/homeSlice";
import { useEffect, useRef } from "react";

const Filter = () => {
  const abilityRef = useRef("");
  const typeRef = useRef("");
  const locationRef = useRef("");
  const habitatRef = useRef("");
  const groupRef = useRef("");
  const speciesRef = useRef("");
  const dispatch = useDispatch();
  const {
    pokemons,
    filteredData,
    abilityList,
    typeList,
    locationList,
    speciesList,
    charactersticsList,
    groupList,
    habitatList,
    abilitiesSelect,
    typesSelect,
    locationSelect,
    speciesSelect,
    groupSelect,
    habitatSelect,
    error,
  } = useSelector((store) => store.home);
  const getLists = async () => {
    const listData = await getFilterLists();
    dispatch(setLists(listData));
  };

  const listArray = [
    {
      label: "Ability",
      options: abilityList,
      ref: abilityRef,
    },
    {
      label: "Types",
      options: typeList,
      ref: typeRef,
    },
    {
      label: "Locations",
      options: locationList,
      ref: locationRef,
    },
    {
      label: "Species",
      options: speciesList,
      ref: speciesRef,
    },
    {
      label: "Groups",
      options: groupList,
      ref: groupRef,
    },
    {
      label: "Habitats",
      options: habitatList,
      ref: habitatRef,
    },
  ];

  useEffect(() => {
    getLists();
  }, []);

  useEffect(() => {
    let filterArray = [];
    if (abilityRef.current.getValue.length !== 0) {
      filterArray = filteredData.filter((pokemon) => {
        return pokemon.abilities.some((e) => {
          console.log(e.ability.name, abilityRef.current.getValue[0].label);
          return e.ability.name === abilityRef.current.getValue[0].label;
        });
      });
    }

    if (typeRef.current.getValue.length !== 0) {
      filterArray = filterArray.filter((pokemon) => {
        return pokemon.types.some((e) => {
          console.log(e.type.name, typeRef.current.getValue[0].label);
          return e.type.name === typeRef.current.getValue[0].label;
        });
      });
    }

    if (filterArray.length > 0) {
      dispatch(setFilteredData(filterArray));
      dispatch(setError(""));
    } else {
      dispatch(setFilteredData(pokemons));
      dispatch(setError("No Results Found"));
    }

    if (
      abilityRef.current.getValue.length === 0 &&
      typeRef.current.getValue.length === 0 &&
      locationRef.current.getValue.length === 0 &&
      speciesRef.current.getValue.length === 0 &&
      groupRef.current.getValue.length === 0 &&
      habitatRef.current.getValue.length === 0
    ) {
      dispatch(setFilteredData(pokemons));
      dispatch(setError(""));
    }
  }, [
    abilityRef.current,
    typeRef.current,
    locationRef.current,
    speciesRef.current,
    groupRef.current,
    habitatRef.current,
    dispatch,
  ]);
  // const selectValues = (value, type) => {
  //   if (type === "Ability") {
  //     dispatch(setAbilitiesSelect(value));
  //   } else if (type === "Types") {
  //     dispatch(setTypesSelect(value));
  //   } else if (type === "Groups") {
  //     dispatch(setGroupSelect(value));
  //   } else if (type === "Habitats") {
  //     dispatch(setHabitatSelect(value));
  //   } else if (type === "Species") {
  //     dispatch(setSpeciesSelect(value));
  //   } else if (type === "Locations") {
  //     dispatch(setLocationSelect(value));
  //   }
  // };
  return (
    <div className="w-full flex flex-col gap-4">
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
              name="color"
              options={list.options}
              onInputChange={() => {
                console.log(list.ref.current.getValue());
              }}
              placeholder={`Select ${list.label}`}
            />
          );
        })}
      </div>
      <div>{error}</div>
    </div>
  );
};

export default Filter;
