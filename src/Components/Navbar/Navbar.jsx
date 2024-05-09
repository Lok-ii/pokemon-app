import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[4rem] flex items-center justify-between border-b border-lightGray p-4 sticky top-0 bg-white z-[100]">
      <Link to={"/"} className="font-pokemon text-[3rem] pb-6">
        Pokemon
      </Link>
      <div className="flex items-center gap-4">
        <Link to={"/bookmarks"} className="font-archive">
          Bookmarks
        </Link>
        <Link to={"/compare"} className="font-archive">
          Compare
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
