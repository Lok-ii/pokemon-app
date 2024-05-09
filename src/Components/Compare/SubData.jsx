import CompareDetails from "./CompareDetails";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import colorData from "../../Data/colorData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import FrontPage from "../Home/FrontPage";
import loader from "../../assets/loader.gif";
import pokeball from "../../assets/pika.avif";

const SubData = ({ name, compareData, abilities, setCompare }) => {
  const dispatch = useDispatch();
  const { selectList } = useSelector((store) => store.details);
  return (
    <div className="w-[50%] h-full border-r border-lightGray py-4 flex flex-col items-center gap-4">
      <div className="w-full flex justify-center mb-12">
        <Select
          className="basic-single w-[15rem]"
          classNamePrefix="select"
          defaultValue={""}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isSearchable={true}
          name={name}
          options={selectList}
          onChange={(e) => {
            dispatch(setCompare(e.label));
          }}
          placeholder={`Select pokemon`}
        />
      </div>
      {compareData.types && (
        <div
          className="w-full h-[10rem] rounded-r-lg flex items-center justify-center"
          style={{
            backgroundColor: colorData[compareData?.types[0]?.type.name],
          }}
        >
          <LazyLoadImage
            alt={compareData.name}
            src={
              compareData.sprites.other["dream_world"].front_default
                ? compareData.sprites.other["dream_world"].front_default
                : compareData.sprites.other.home.front_default
            }
            width={"50%"}
            effect="blur"
          />
        </div>
      )}
      <CompareDetails data={compareData} abilities={abilities} />
    </div>
  );
};

export default SubData;
