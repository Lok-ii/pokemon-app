import Title from "../Details/Title";
import BasicInfo from "../Details/BasicInfo";
import Tabs from "../Details/Tabs";
import colorData from "../../Data/colorData.json";
import Moves from "../Details/Moves";
import { useSelector } from "react-redux";
import Stats from "../Details/Stats";
import FlavourText from "../Details/FlavourText";
import PropTypes from "prop-types";

const CompareDetails = ({ data, abilities }) => {
  const { selectedTab } = useSelector((store) => store.details);
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div>
        <img src={""} alt="" />
      </div>
      {data.types && (
        <div className=" flex flex-col gap-4">
          <Title details={data} />
          <BasicInfo details={data} />
          <Tabs details={data} />

          {selectedTab === "moves" && (
            <Moves
              color={colorData[data?.types[0]?.type.name]}
              details={data}
            />
          )}
          {selectedTab === "baseStats" && <Stats details={data} />}
          {selectedTab === "flavour" && <FlavourText abilities={abilities} />}
        </div>
      )}
    </div>
  );
};

CompareDetails.propTypes = {
  data: PropTypes.object.isRequired,
  abilities: PropTypes.array.isRequired,
};

export default CompareDetails;
