import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export const getPokemons = async (url) => {
  const response = await axios.get(url);
  const linkArray = response.data.results.map((item) => axios.get(item.url));
  const pokemonData = await Promise.all(linkArray);
  let pokemons = pokemonData.map((item) => item.data);
  const detailedData = pokemons.map((data) =>
    axios.get(data.location_area_encounters)
  );
  const resolveDetails = await Promise.all(detailedData);
  pokemons = resolveDetails.map((item, idx) => {
    return { ...pokemons[idx], locations: item.data };
  });
  return { pokemons, next: response.data.next, count: response.data.count };
};

export const getPokemonList = async () => {
  const response = await axios.get(`${baseUrl}/pokemon?limit=1025`);
  const linkArray = response.data.results.map((item) => {
    return { label: item.name, value: item.url };
  });
  return linkArray;
};

export const getByName = async (name) => {
  try {
    const pokemon = await axios.get(`${baseUrl}/pokemon/${name}`);
    return { success: true, ...pokemon.data };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Go back or you can get electrocuted",
    };
  }
};

export const getAbilities = async (url) => {
  const abilities = await axios.get(url);
  return abilities.data;
};

export const getMoves = async (moves) => {
  const moveUrls = moves.map((item) => {
    return axios.get(item.move.url);
  });
  const moveData = await Promise.all(moveUrls);
  const sendMoves = moveData.map((item) => item.data);
  console.log(sendMoves);
  return sendMoves;
};

export const getFilterLists = async () => {
  const types = await axios.get(`${baseUrl}/type?limit=21`);
  const typesData = types.data.results
    .map((item) => {
      return item.name !== "unknown" && item.name !== "shadow"
        ? {
            label: item.name,
            value: item.url,
            id: item.url.split("/")[6],
          }
        : "";
    })
    .filter((item) => {
      return item !== "";
    });

  const abilities = await axios.get(`${baseUrl}/ability?limit=367`);
  const abilitiesData = abilities.data.results.map((item) => {
    return {
      label: item.name,
      value: item.url,
      id: item.url.split("/")[6],
    };
  });
  abilitiesData.sort((a, b) => a.label.localeCompare(b.label));

  const locations = await axios.get(`${baseUrl}/location-area?limit=1054`);
  const locationsData = locations.data.results.map((item) => {
    return {
      label: item.name,
      value: item.url,
      id: item.url.split("/")[6],
    };
  });

  const species = await axios.get(`${baseUrl}/pokemon-species?limit=1025`);
  const speciesData = species.data.results.map((item) => {
    return {
      label: item.name,
      value: item.url,
      id: item.url.split("/")[6],
    };
  });

  const groups = await axios.get(`${baseUrl}/egg-group/`);
  let groupsData = groups.data.results.map((item) => {
    return {
      label: item.name,
      value: item.url,
      id: item.url.split("/")[6],
    };
  });

  const habitats = await axios.get(`${baseUrl}/pokemon-habitat/`);
  const habitatsData = habitats.data.results.map((item) => {
    return {
      label: item.name,
      value: item.url,
      id: item.url.split("/")[6],
    };
  });

  return {
    types: typesData,
    abilities: abilitiesData,
    locations: locationsData,
    groups: groupsData,
    species: speciesData,
    habitats: habitatsData,
  };
};

export const getSpecificData = async (url) => {
  const data = await axios.get(`${baseUrl}/${url}`);
  return data.data;
};
