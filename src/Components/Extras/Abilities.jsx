import { useSelector } from "react-redux";
import colorData from "../../Data/colorData.json";

const Abilities = ({ pokemon }) => {
  const { colorArray } = useSelector((store) => store.home);
  return (
    pokemon.abilities &&
    pokemon.abilities.map((item, index) => {
      const abilityColor =
        colorData[colorArray[Math.floor(Math.random() * colorArray.length)]];
      if (index < 2) {
        return (
          <p
            key={index}
            style={{ backgroundColor: abilityColor }}
            className="rounded-2xl w-[80%] text-center font-inglobal px-4 py-1 text-white shadow-md whitespace-nowrap"
          >
            {item.ability.name}
          </p>
        );
      } else {
        return null;
      }
    })
  );
};

export default Abilities;
