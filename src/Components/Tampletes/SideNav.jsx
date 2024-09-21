import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-500 p-5">
      <h1 className="text-2xl font-bold flex items-center">
        <i className="ri-tv-fill text-[#6556CD] mr-3 "></i>
        <span className="text-white">Movie mania</span>
      </h1>

      <nav className="mt-7 flex flex-col text-zinc-400 gap-2 mb-6">
        <h1 className="font-semibold text-xl text-white mb-1">New Feeds</h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-200 hover:font-semibold"
        >
          <i className="ri-fire-fill mr-1"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-200 hover:font-semibold"
        >
          <i className="ri-bard-fill mr-1"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-200 hover:font-semibold">
          <i className="ri-movie-2-fill mr-1"></i> Movie
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-200 hover:font-semibold">
          <i className="ri-tv-2-fill mr-1"></i> Tv Shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-200 hover:font-semibold">
          <i className="ri-team-fill mr-1"></i> People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-4" />
      <nav className="my-8 flex flex-col text-zinc-400 gap-2">
        <h1 className="font-semibold text-xl text-white mb-2 ">
          Website information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-200 hover:font-semibold">
          <i className="ri-information-2-fill mr-1"></i> About us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-200 hover:font-semibold">
          <i className="ri-phone-fill mr-1"></i> Contact us
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
