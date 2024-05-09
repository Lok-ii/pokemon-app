import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import Home from "./Home";
import Filter from "./Filter";
import loader from "../../assets/loader.gif";
import { Link } from "react-router-dom";

const FrontPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getOpen = Boolean(localStorage.getItem("open"));
    if (getOpen) {
      setOpen(true);
    }
  }, []);
  return (
    <>
      <div
        className={`fixed z-[1000] w-full flex flex-col justify-center bg-redAndWhite ${
          open ? "top-[-28%] h-[60vh]" : "top-[0%] h-[100vh]"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="relative cursor-pointer">
          <hr className="h-[2rem] bg-black border-none opacity-100" />
          <div
            className={`absolute top-8 left-0 w-full h-[4rem] ${
              open ? "block" : "hidden"
            }`}
          >
            <Link to={"/bookmarks"}>
              <div className="relative w-full">
                <div className="border-black border-[1px] rotate-180 absolute top-[45%] left-[30.5%] h-[3rem]" />
              </div>
              <img
                src={loader}
                className="w-[2rem] h-[2rem] absolute left-[29.6%] top-[75%]"
                alt=""
              />
              <p className="font-archive absolute top-[130%] left-[27.5%]">
                Bookmarks
              </p>
            </Link>
            <Link
              to={"/compare"}
              className={`absolute top-0 left-0 w-full h-[4rem] ${
                open ? "block" : "hidden"
              }`}
            >
              <div className="relative w-full">
                <div className="border-black border-[1px] rotate-180 absolute top-[45%] right-[30.6%] h-[3rem]" />
              </div>
              <img
                src={loader}
                className="w-[2rem] h-[2rem] absolute right-[29.6%] top-[75%]"
                alt=""
              />
              <p className="font-archive absolute top-[130%] right-[25.5%]">
                Compare Pokemons
              </p>
            </Link>
          </div>
          <div
            className={`cursor-pointer absolute border-[3rem] bg-white border-black rounded-[50%] ${
              open
                ? "h-[20rem] w-[20rem] top-[-500%] left-[38%]"
                : "h-[30rem] w-[30rem] top-[-700%] left-[33%]"
            } flex items-center justify-center transition-all duration-1000 ease-in-out`}
            onClick={() => {
              localStorage.setItem("open", "true");
              setOpen(true);
            }}
          >
            <div
              className={`rounded-[50%] ${
                open ? "h-[12rem] w-[12rem]" : "h-[18rem] w-[18rem]"
              } flex flex-col ${
                open
                  ? "justify-end border-none pt-8"
                  : "border-gray border-[5px] justify-center"
              } items-center transition-all duration-1000 ease-in-out`}
            >
              <div
                className={`${
                  open ? "opacity-100 relative top-[2rem]" : "opacity-0"
                } transition-all duration-1000 ease-in-out`}
              >
                <img src={logo} alt="" />
              </div>
              <div
                className={`${
                  open ? "opacity-0" : "opacity-100"
                } transition-all duration-500 ease-in-out flex flex-col font-archive items-center justify-center`}
              >
                <p>Pokedex</p>
                <p>Click Here</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Filter /> */}
      </div>
    </>
  );
};

export default FrontPage;
