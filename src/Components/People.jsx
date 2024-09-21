import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, TopNav, Cards, Loading } from "./index";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  document.title = "Movie Mania | People";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setpage(1);
      setperson([]);
      getPerson();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="w-full px-[1.5%] flex items-center justify-between hover:cursor-pointer mt-2">
        <h1 className=" text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-2"
          ></i>{" "}
          People
          
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={
          <h1 className="text-zinc-400 text-center bg-[#1F1E24]">Loading...</h1>
        }
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People;
