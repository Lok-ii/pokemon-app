import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const nameRef = useRef("");
  const navigateTo = useNavigate();
  return (
    <form className="w-full flex items-center gap-4 h-[2rem] px-8">
      <input
        ref={nameRef}
        type="text"
        className="w-[80%] h-full border-lightGray pl-4 border-[1px] outline-none"
        placeholder="Search Pokemons..."
      />
      <button
        className="w-[18%] py-2 bg-primaryRed rounded-[1rem] font-archive text-white text-center"
        onClick={(e) => {
          e.preventDefault();
          navigateTo(`/details/${nameRef.current.value}`);
        }}
      >
        Search Pokemon
      </button>
    </form>
  );
};

export default Search;
