import { useEffect } from "react";
import { getPokemons } from "../../utils/fetchPokemons";
import PokemonCard from "../Extras/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredData,
  setPageLink,
  setPokemons,
} from "../../Redux/homeSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { bouncy } from "ldrs";
import Filter from "./Filter";
import Search from "./Search";

bouncy.register();

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, pageLink, filteredData } = useSelector(
    (store) => store.home
  );
  const getData = async () => {
    const data = await getPokemons(pageLink);
    dispatch(setPokemons(data.pokemons));
    dispatch(setFilteredData({ data: data.pokemons, type: "full" }));
    dispatch(setPageLink(data.next));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="w-full flex flex-wrap gap-y-16 items-center justify-around mt-64">
        <Search />
        <Filter />
        {filteredData && (
          <InfiniteScroll
            dataLength={filteredData.length} //This is important field to render the next data
            next={getData}
            hasMore={true}
            loader={
              // <img src={loader} />
              <div className="w-full flex items-center justify-center">
                <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            scrollThreshold={0.97}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "4rem",
              padding: "2rem",
            }}
          >
            {filteredData &&
              filteredData.map((pokemon) => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
              })}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Home;
