import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";
import axios from "../../utils/axios";

function TopNav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  // console.log(query);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data.results);

      setsearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex items-center ml-[15%] mt-2 z-10">
      <i className="ri-search-line text-white text-2xl cursor-pointer hover:text-zinc-300"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="outline-none text-xl rounded-full px-4 py-2 text-white mx-10 w-[40%] bg-[#26252b]"
        type="text"
        placeholder="search anything..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-fill text-white text-3xl cursor-pointer"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-md">
        {searches.map((search, index) => (
          <Link
            to={`/${search.media_type}/details/${search.id}`}
            key={index}
            className=" bg-zinc-700 w-[100%] p-10 flex justify-start items-center text-white border-b-2 border-zinc-400 font-semibold hover:text-[#1F1E24] hover:bg-zinc-600 hover:font-bold duration-200 rounded"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg "
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {search.title ||
                search.name ||
                search.original_name ||
                search.original_title}
            </span>
          </Link>
        ))}

        {/*  */}
      </div>
    </div>
  );
}

export default TopNav;
