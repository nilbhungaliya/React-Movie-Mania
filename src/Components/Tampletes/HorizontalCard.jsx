import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

function HorizontalCard({ data }) {
  if (!data || data.length === 0) {
    return <h1>Nothing to show</h1>;
  }
  return (
    <div className="w-[100%] p-5 flex gap-[2vw] overflow-x-auto">
      {data.length > 0 ? (
        data.map((card, index) => {
          return (
            <Link to={`/${card.media_type}/details/${card.id}`} key={index} className="min-w-[20%] bg-zinc-900 mb-3">
              <img
                className="w-full h-[50%] object-cover"
                src={
                  card.backdrop_path || card.poster_path
                    ? `https://image.tmdb.org/t/p/original${
                        card.backdrop_path || card.poster_path
                      }`
                    : noimage
                }
                alt={card.title || card.name || "Image not available"}
              />
              <div className="text-white px-3 pt-3 h-[45%] overflow-y-auto">
                <h1 className=" text-[1.2vw] font-semibold mb-1 ">
                  {card.name ||
                    card.title ||
                    card.original_name ||
                    card.original_title}
                </h1>
                <p className="text-sm text-zinc-400">
                  {card.overview?.slice(0, 75)}...
                  <span className="text-blue-400 hover:text-blue-500 duration-200">
                    {" "}
                    more
                  </span>
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <h1>Nothing to show</h1>
      )}
    </div>
  );
}

export default HorizontalCard;
