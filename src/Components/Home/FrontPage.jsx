import { useState } from "react";
import logo from "../../assets/Logo.png";
import Home from "./Home";
import Filter from "./Filter";

const FrontPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`fixed z-[1000] w-full flex flex-col justify-center bg-redAndWhite ${
          open ? "top-[-60%] h-[60vh]" : "top-[0%] h-[100vh]"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="relative">
          <hr
            className={`h-[2rem] absolute bg-black border-none opacity-100 ${
              open ? "top-[100%]" : "top-0"
            }`}
          />
          <div
            className={`absolute border-[3rem] bg-white border-black rounded-[50%] ${
              open
                ? "h-[20rem] w-[20rem] top-[250%] left-[38%]"
                : "h-[30rem] w-[30rem] top-[-700%] left-[33%]"
            } flex items-center justify-center transition-all duration-1000 ease-in-out`}
            onClick={() => setOpen(true)}
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
                } transition-all duration-500 ease-in-out`}
              >
                <p>Pokedex</p>
                <p>Click Here</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Filter /> */}
      </div>
      <Home />
    </>
  );
};

export default FrontPage;
