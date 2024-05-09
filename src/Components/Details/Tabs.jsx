import { useDispatch, useSelector } from "react-redux";
import colorData from "../../Data/colorData.json";
import { setTab } from "../../Redux/detailsSlice";

const Tabs = ({ details }) => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((store) => store.details);
  const tabs = [
    {
      name: "Base Stats",
      id: "baseStats",
    },
    {
      name: "Moves",
      id: "moves",
    },
    {
      name: "Flavour Text Entries",
      id: "flavour",
    },
  ];
  const color = colorData[details?.types[0]?.type.name];
  return (
    <div
      className="tabData flex items-center justify-between w-full bg-opacity-0 border-y-[1px] border-lightGray"
      // style={{
      //   backgroundColor: colorData[details?.types[0]?.type.name],
      //   backgroundBlendMode: "lighten"
      // }}
    >
      {tabs.map((tab) => {
        return (
          <p
            key={tab.id}
            className={`p-4 font-archive text-[0.8rem] text-center w-full ${
              tab.id === "flavour" ? "" : " border-r-[1px] border-lightGray"
            } h-full cursor-pointer ${
              (color === "#001030" ||
                color === "#000000" ||
                color === "#72542F") &&
              selectedTab === tab.id
                ? "text-white"
                : ""
            } `}
            style={{
              backgroundColor:
                selectedTab === tab.id
                  ? colorData[details?.types[0]?.type.name]
                  : "",
            }}
            onClick={() => {
              dispatch(setTab(tab.id));
            }}
          >
            {tab.name}
          </p>
        );
      })}
    </div>
  );
};

export default Tabs;
