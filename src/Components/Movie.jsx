import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, TopNav, Cards, Loading } from "./index";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";


function Movie() {
  document.title = "Movie Mania | movie";
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovies((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = () => {
    if (movie.length === 0) {
      getMovies();
    } else {
      setpage(1);
      setmovies([]);
      getMovies();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="w-full px-[1.5%] flex items-center justify-between hover:cursor-pointer mt-2">
        <h1 className=" text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-2"
          ></i>{" "}
          Movies
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovies}
        hasMore={hasMore}
        loader={
          <h1 className="text-zinc-400 text-center bg-[#1F1E24]">Loading...</h1>
        }
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie;
