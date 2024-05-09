import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../Extras/PokemonCard";
import { useEffect } from "react";
import { setBookmarks } from "../../Redux/detailsSlice";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((store) => store.details);
  useEffect(() => {
    const getBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (getBookmarks) {
      dispatch(setBookmarks({ type: "local", data: getBookmarks }));
    }
  }, []);
  console.log(bookmarks);
  return bookmarks.length !== 0 ? (
    <div className="w-full flex flex-wrap gap-y-16 items-center justify-around mt-64">
      {bookmarks.map((bookmark) => {
        return <PokemonCard key={bookmark.id} pokemon={bookmark} />;
      })}
    </div>
  ) : (
    <div className="w-full flex flex-wrap gap-y-16 items-center justify-around mt-64">
      NO BOOKMARKS
    </div>
  );
};

export default Bookmarks;
