import Abilities from "../Extras/Abilities";
import PropTypes from "prop-types";

const BasicInfo = ({ details }) => {
  return (
    <>
      <div className="border-y-[1px] border-lightGray w-full flex justify-between p-4">
        <div className="w-full flex flex-col items-center border-r-[1px] border-lightGray">
          <p className="font-inglobal font-bold text-[1.5rem]">
            {details.weight} kg
          </p>
          <p className="font-inglobal text-[0.8rem]">Weight</p>
        </div>
        <div className="w-full flex flex-col items-center border-r-[1px] border-lightGray">
          <p className="font-inglobal font-bold text-[1.5rem]">
            {details.height} m
          </p>
          <p className="font-inglobal text-[0.8rem]">Height</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex itemce gap-2">
            <Abilities pokemon={details} />
          </div>
          <p className="font-inglobal">Abilities</p>
        </div>
      </div>
    </>
  );
};

BasicInfo.propTypes = {
  details: PropTypes.object.isRequired,
};

export default BasicInfo;
