import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, TopNav, Cards, Loading } from "./index";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  document.title = "Movie Mania | Trending";
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = () => {
    if (trending.length === 0) {
        getTrending();
    } else {
        setpage(1);
        settrending([]);
        getTrending();
    }
};

  useEffect(() => {
    refershHandler();
  }, [duration, category]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="w-full px-[1.5%] flex items-center justify-between hover:cursor-pointer mt-2">
        <h1 className=" text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-2"
          ></i>{" "}
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1 className="text-zinc-400 text-center bg-[#1F1E24]">Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
