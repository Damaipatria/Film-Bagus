import { useEffect, useState } from "react";
import useInnerWidth from "../hooks/useInnerWidth";
import Card from "./Card"

function CardSlider({ genre, name, type }) {

  const [movieSelected, setMovieSelected] = useState([])
  const [valueX, setValueX] = useState(0)
  const [modulo, setModulo] = useState(6)
  const windowSize = useInnerWidth()
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTc0YTc3YzNlZGY4MzIyYzZjOTc3NTZiZmM4MTYyNiIsInN1YiI6IjYxOTNhYmI3NzVmMWFkMDAyOWQ4ZTQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C0Ty_kJTEsHH9tXTCVhbNPrLpfWbRjwpeDwU6_lBm08'
    }
  }

  const getMovieByGenre = (() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${genre}`, options)
      .then(response => response.json())
      .then(response => setMovieSelected(response.results.slice(0, 12)))
      .catch(err => console.log(err))
  })

  const getSerisByGenre = (() => {
    fetch(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&with_genres=${genre}`, options)
      .then(response => response.json())
      .then(response => setMovieSelected(response.results.slice(0, 12)))
      .catch(err => console.log(err))
  })

  const getData = (() => {
    if (type == 'series') {
      getSerisByGenre()
    } else if (type == 'movie') {
      getMovieByGenre()
    }
  })

  const handleModulo = (() => {
    if (windowSize < 1024) {
      setModulo(9)
    } else if (windowSize >= 1024 && windowSize < 1280) {
      setModulo(8)
    } else {
      setModulo(6)
    }
  })

  const nextSlide = (() => {
    setValueX((prevValueX) => (prevValueX + 1) % (modulo + 1))
  })

  const prevSlide = (() => {
    setValueX((prevValueX) => (prevValueX - 1 + ((modulo + 1))) % (modulo + 1))
  })

  useEffect(() => {
    handleModulo()
    getData()
  }, [modulo, windowSize])


  return (
    <>
      <div className="flex justify-between items-center pt-5 lg:px-10 md:px-7 px-3 dark:bg-slate-950">
        <h1 className="pb-1 font-bold text-lg dark:text-gray-200">{name}</h1>
        <a href="#" className="flex items-center pb-1 text-sm text-blue-400 underline">
          lihat semua
        </a>
      </div>
      <div className="dark:bg-slate-950">
        <hr className="h-px mx-5 m-auto border-0 bg-gray-200 dark:bg-gray-900" />
      </div>
      <div className="flex justify-center items-center md:gap-3 gap-2 md:px-3 px-1 pb-5 dark:bg-slate-950">
        <button onClick={prevSlide} className="dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="basis-5/6 grow flex overflow-hidden md:h-86 h-72">
          {movieSelected.map((item, index) => {
            return (
              <>
                <div key={index} className="xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-1/2 grow-0 shrink-0 md:h-84 h-68 p-2 my-auto transition-all duration-300" style={{ transform: `translateX(-${valueX * 100}%)` }}>
                  <Card data={item} />
                </div>
              </>
            )
          })}
        </div>
        <button onClick={nextSlide} className="dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default CardSlider;