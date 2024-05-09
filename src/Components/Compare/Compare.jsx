import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import {
  getAbilities,
  getByName,
  getPokemonList,
} from "../../utils/fetchPokemons";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbilitiesOne,
  setAbilitiesTwo,
  setCompareOne,
  setCompareOneData,
  setCompareTwo,
  setCompareTwoData,
  setLoading,
  setSelectList,
} from "../../Redux/detailsSlice";
import "react-lazy-load-image-component/src/effects/blur.css";
import SubData from "./SubData";
import FrontPage from "../Home/FrontPage";
import loader from "../../assets/loader.gif";
import pokeball from "../../assets/pika.avif";

const Compare = () => {
  const dispatch = useDispatch();
  const {
    loading,
    selectList,
    compareOnePokemon,
    compareTwoPokemon,
    compareOneData,
    compareTwoData,
    abilitiesOne,
    abilitiesTwo,
  } = useSelector((store) => store.details);
  useEffect(() => {
    const getPokemonsList = async () => {
      const data = await getPokemonList();
      dispatch(setSelectList(data));
    };
    getPokemonsList();
  }, []);

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      const compareOne = await getByName(compareOnePokemon);
      dispatch(setCompareOneData(compareOne));
      const abilityArray1 = compareOne.abilities.map((item) => {
        const abilities = getAbilities(item.ability.url);
        return abilities;
      });
      const abilities1 = await Promise.all(abilityArray1);
      dispatch(setAbilitiesOne(abilities1));
      const compareTwo = await getByName(compareTwoPokemon);
      const abilityArray2 = compareTwo.abilities.map((item) => {
        const abilities = getAbilities(item.ability.url);
        return abilities;
      });
      const abilities2 = await Promise.all(abilityArray2);
      dispatch(setAbilitiesTwo(abilities2));
      dispatch(setCompareTwoData(compareTwo));
      dispatch(setLoading(false));
    };
    getData();
  }, [compareOnePokemon, compareTwoPokemon, dispatch]);
  return !loading ? (
    <div className="w-full min-h-[100vh]">
      <Navbar />
      {selectList && (
        <div className="w-full h-full flex">
          <SubData
            name={"Pokemon1"}
            compareData={compareOneData}
            abilities={abilitiesOne}
            setCompare={setCompareOne}
          />

          <SubData
            name={"Pokemon2"}
            compareData={compareTwoData}
            abilities={abilitiesTwo}
            setCompare={setCompareTwo}
          />
        </div>
      )}
    </div>
  ) : compareOneData.success === false || compareTwoData.success === false ? (
    <div className="w-full h-[80vh] flex items-end justify-center">
      <FrontPage />
      <div className="w-[60%] h-[60%]">
        <img src={pokeball} className="w-full h-full object-contain" alt="" />
        <p className="text-[2rem] text-center font-inglobal">
          No Results Found
        </p>
        <p className="text-[2rem] text-center font-inglobal">
          {compareData.error}
        </p>
      </div>
    </div>
  ) : (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <img src={loader} alt="" />
    </div>
  );
};

export default Compare;
