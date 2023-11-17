import { useContext } from "react";
import Stars from "./Stars";
import { MovieContext } from "../context/MovieContext";

function Card({ data }) {

  const movie = useContext(MovieContext)

  return (
    <>
      <div className=" md:w-full w-38 h-full overflow-hidden mx-auto bg-white rounded-md transition-all duration-300 hover:scale-105 group hover:shadow-md dark:bg-slate-900">
        <img className="w-full h-full object-cover rounded-md scale-110 transition-all duration-500 group-hover:h-3/5 group-hover:rounded-b-none group-hover:scale-100" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
        <div className="my-2 mx-1.5 transition-all duration-500 group-hover:h-2/5">
          <h1 className="font-bold text-sm line-clamp-1 dark:text-gray-200">{data.title ? data.title : data.name}</h1>
          <div className="flex space-x-1 -mt-0.5">
            {movie.movieGenre.filter((genre) => data.genre_ids.includes(genre.id)).slice(0, 3).map((item, index) => {
              return (
                <span className="font-semibold text-gray-500 text-xs line-clamp-1" key={index}>
                  {item.name}
                </span>
              )
            })}
          </div>
          <Stars rating={Math.round(((data.vote_average / 2) * 10)) / 10} size='xs' />
          <p className="mt-1 text-sm text-justify md:line-clamp-3 line-clamp-2 dark:text-gray-200">{data.overview}</p>
        </div>
      </div>
    </>
  )
}

export default Card;