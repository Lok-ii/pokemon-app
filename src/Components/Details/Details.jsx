import { useEffect } from "react";
import { getAbilities, getByName } from "../../utils/fetchPokemons";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbilities,
  setDetails,
  setLoading,
  setTab,
} from "../../Redux/detailsSlice";
import colorData from "../../Data/colorData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Title from "./Title";
import BasicInfo from "./BasicInfo";
import { useParams } from "react-router-dom";
import loader from "../../assets/loader.gif";
import FlavourText from "./FlavourText";
import Moves from "./Moves";
import Tabs from "./Tabs";
import Stats from "./Stats";

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { details, loading, abilities, selectedTab } = useSelector(
    (store) => store.details
  );

  const pokemonByName = async () => {
    dispatch(setLoading(true));
    const pokemon = await getByName(params.name);
    dispatch(setDetails(pokemon));

    const abilityArray = pokemon.abilities.map((item) => {
      const abilities = getAbilities(item.ability.url);
      return abilities;
    });
    const abilities = await Promise.all(abilityArray);
    dispatch(setAbilities(abilities));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    pokemonByName();
    setTab("baseStats");

    return () => setTab("baseStats");
  }, []);
  return !loading ? (
    <div className="w-full h-full flex justify-between rounded-lg">
      {details && abilities && (
        <>
          <div className="w-[65%] h-full fixed top-0 left-0 rounded-l-lg px-16 py-8 flex flex-col items-center gap-8 overflow-y-auto">
            <Title details={details} />
            <BasicInfo details={details} />
            {details.types && (
              <>
                <Tabs />
                {selectedTab === "moves" && (
                  <Moves color={colorData[details?.types[0]?.type.name]} />
                )}
                {selectedTab === "baseStats" && <Stats />}
                {selectedTab === "flavour" && (
                  <FlavourText abilities={abilities} />
                )}
              </>
            )}
          </div>
          {details.types && (
            <div
              className="w-[35%] h-full fixed right-0 top-0 rounded-r-lg flex items-center justify-center"
              style={{
                backgroundColor: colorData[details?.types[0]?.type.name],
              }}
            >
              <LazyLoadImage
                alt={details.name}
                src={
                  details.sprites.other["dream_world"].front_default
                    ? details.sprites.other["dream_world"].front_default
                    : details.sprites.other.home.front_default
                }
                width={"95%"}
                effect="blur"
              />
            </div>
          )}
        </>
      )}
    </div>
  ) : (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <img src={loader} alt="" />
    </div>
  );
};

export default Details;
