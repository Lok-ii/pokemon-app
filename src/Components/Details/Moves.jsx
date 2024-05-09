import { useEffect } from "react";
import { getMoves } from "../../utils/fetchPokemons";
import { useDispatch, useSelector } from "react-redux";
import { setMoves } from "../../Redux/detailsSlice";

const Moves = ({ color, details }) => {
  const dispatch = useDispatch();
  const { moves } = useSelector((store) => store.details);
  useEffect(() => {
    const movesData = async () => {
      const movesArray = await getMoves(details.moves);
      dispatch(setMoves(movesArray));
    };
    movesData();
  }, []);
  return (
    <div className="font-inglobal w-full flex flex-wrap justify-around gap-y-6">
      {moves &&
        moves.map((move) => {
          return (
            <div
              key={move.id}
              className="w-[15rem] h-auto text-white px-2 py-1 rounded-lg"
              style={{ backgroundColor: color }}
            >
              <div className="w-full flex items-start justify-between">
                <div>
                  {move.name && <p>{move.name.toUpperCase()}</p>}
                  {move.accuracy && <p>Accuracy: {move.accuracy}</p>}
                  {move.power && <p>Power: {move.power}</p>}
                  {move.pp && <p>PP: {move.pp}</p>}
                </div>
                <div>
                  <p>#{move.id}</p>
                </div>
              </div>
              <div className="">
                {move.effect_entries.map((effect, index) => {
                  if (effect.language.name === "en") {
                    return (
                      <p className=" overflow-y-auto" key={"effect" + index}>
                        {effect.short_effect}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Moves;
