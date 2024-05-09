import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setOpen } from "../../Redux/homeSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const nameRef = useRef("");
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  return (
    <form className="w-full flex items-center gap-4 h-[2rem] px-8 absolute bottom-4">
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
          dispatch(setOpen(true));
          navigateTo(`/details/${nameRef.current.value}`);
        }}
      >
        Search Pokemon
      </button>
    </form>
  );
};

export default Search;
