import { useDispatch, useSelector } from "react-redux";
import colorData from "../../Data/colorData.json";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import PropTypes from "prop-types";
import { setBookmarks } from "../../Redux/detailsSlice";

const Title = ({ details }) => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((store) => store.details);
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-4">
        {details.name && (
          <p className="text-[2rem] font-bold font-archive">
            {details.name[0].toUpperCase() + details.name.slice(1)}
          </p>
        )}
        <div className="font-inglobal flex flex-col items-center gap-1">
          {details.types &&
            details.types.map((type, index) => {
              return (
                <p
                  key={index}
                  style={{ backgroundColor: colorData[type.type.name] }}
                  className="rounded-2xl w-[100%] text-center px-4 py-1 text-white shadow-md"
                >
                  {type.type.name}
                </p>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-archive text-[2rem] text-gray">#{details.id}</p>
        <MdOutlineCatchingPokemon
          className={`w-[3rem] h-[3rem] cursor-pointer ${
            bookmarks.indexOf(details.id) == -1 ? "" : "fill-primaryRed"
          }`}
          onClick={() => dispatch(setBookmarks(details.id))}
        />
        <p>Bookmark</p>
      </div>
    </div>
  );
};

Title.propTypes = {
  details: PropTypes.object.isRequired,
};

export default Title;
