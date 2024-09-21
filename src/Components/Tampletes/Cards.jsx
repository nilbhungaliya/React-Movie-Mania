import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap w-full gap-[3%] my-[2%] px-[1.5%] bg-[#1F1E24]">
      {data.map((card, index) => {
        return (
          <Link to={`/${card.media_type || title}/details/${card.id}`} key={index} className="relative w-[30vh] my-[2%] ">
            <div className="h-[40vh] object-cover flex flex-col justify-end items-end">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-full object-cover w-full"
              src={
                card.poster_path || card.backdrop_path || card.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      card.poster_path ||
                      card.backdrop_path ||
                      card.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            {card.vote_average && (
              <div className="absolute rounded-full text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center">
                {(card.vote_average * 10).toFixed()} <sup>%</sup>
              </div>
            )}
            </div>
            <h1 className="text-xl text-zinc-300  text-center font-semibold mt-3 ">
              {card.name ||
                card.title ||
                card.original_name ||
                card.original_title}
            </h1>
            {/* {card.vote_average && (
              <div className="absolute right-[-5%] bottom-[10%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center">
                {(card.vote_average * 10).toFixed()} <sup>%</sup>
              </div>
            )} */}
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
