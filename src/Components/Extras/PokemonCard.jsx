import PropTypes from "prop-types";
import pokeball from "../../assets/Pokeball.svg";
import colorData from "../../Data/colorData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Abilities from "./Abilities";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link
      to={`/details/${pokemon.name}`}
      className="group relative rounded-[1.5rem] w-[26.5rem] min-h-[12rem] h-full cursor-pointer bg-[#F6F7F9] shadow-lg"
    >
      <div
        className={`spanClass group-hover:w-[100%] group-hover:text-white group-hover:rounded-[1.5rem] w-[65%] rounded-l-none rounded-r-[1.5rem] h-full absolute top-0 right-0`}
        style={{
          background: colorData[pokemon.types[0].type.name],
          transition: "all 0.3s ease-in-out",
        }}
      >
        <img src={pokeball} alt="" className="absolute right-0 scale-[1.1]" />
        <LazyLoadImage
          alt={pokemon.name}
          src={
            pokemon.sprites.other["dream_world"].front_default
              ? pokemon.sprites.other["dream_world"].front_default
              : pokemon.sprites.front_default
          }
          effect="blur"
        />
      </div>
      <div className="absolute w-[35%] h-full py-6 left-[0%] top-[5%] flex flex-col items-center justify-around group-hover:text-white text-black">
        <p className="text-center text-xl font-bold font-archive group-hover:text-white">
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </p>
        <p className="text-center text-xl font-bold font-archive group-hover:text-white">
          #{pokemon.id}
        </p>
        <div className="w-full flex flex-col items-center gap-1">
          <Abilities pokemon={pokemon} />
        </div>
      </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    abilities: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    sprites: PropTypes.object.isRequired,
  }).isRequired,
};

export default PokemonCard;
