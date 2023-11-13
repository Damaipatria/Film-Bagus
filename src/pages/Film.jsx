import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import useInnerWidth from "../hooks/useInnerWidth";
import CardSlider from "../components/CardSlider";
import Card from "../components/Card";

function Film() {

  const movie = useContext(MovieContext)

  useEffect(() => {
    document.title = 'Film | FILMBAGUS'
  }, [])

  return (
    <>
      <div className="dark:bg-slate-950">
        <div className="py-7">
          <h1 className="font-extrabold text-center text-4xl text-gray-900 dark:text-gray-200">Film</h1>
          <p className="lg:w-2/4 md:w-3/4 md:mt-1 mt-2 md:mx-auto mx-3 md:text-center text-justify text-gray-900 dark:text-gray-200">
            Tersedia banyak film berkualitas yang bisa anda nikmati bersama dengan keluarga dan teman  - teman anda, serta terdapat berbagai macam genre film yang dapat membuat anda bahagia, sedih, takut dan bahkan marah.
          </p>
        </div>
        <CarouselMovie />
        {movie.movieGenre.slice(0, 5).map((item, index) => {
          return (
            <div key={index}>
              <CardSlider genre={item.id} name={item.name} type={'movie'} />
            </div>
          )
        })}
        <p className="pt-7 pb-2 font-bold text-center text-sm text-gray-900 dark:bg-slate-950 dark:text-gray-200">
          untuk melihat lebih banyak
        </p>
        <div className="flex justify-center items-center gap-x-5 pb-7 font-bold text-sm dark:bg-slate-950">
          <a href="" className="px-5 py-1 text-blue-500 capitalize border border-blue-500 rounded-md dark:text-gray-200 dark:border-gray-200">log in</a>
          <p className="font-bold text-center text-sm text-gray-900 dark:text-gray-200">atau</p>
          <a href="" className="px-5 py-1 text-white capitalize bg-blue-500 border border-blue-500 rounded-md">sign up</a>
        </div>
      </div>
    </>
  );
}

export default Film;

function CarouselMovie() {

  const movie = useContext(MovieContext)
  const windowSize = useInnerWidth()
  const [valueX, setValueX] = useState(0)
  const [modulo, setModulo] = useState(6)

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
  }, [modulo, windowSize])


  return (
    <>
      <div className="flex justify-between items-center pt-5 lg:px-10 md:px-7 px-3 dark:bg-slate-950">
        <h1 className="pb-1 font-bold text-lg dark:text-gray-200">Trending</h1>
        <a href="#" className="text-sm text-blue-500 underline">lihat semua</a>
      </div>
      <div className="dark:bg-slate-950">
        <hr className="h-px mx-5 m-auto border-0 bg-gray-200 dark:bg-gray-900" />
      </div>
      <div className="flex justify-center items-center gap-3 px-3 pb-5 dark:bg-slate-950">
        <button onClick={prevSlide} className="dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="basis-5/6 grow flex overflow-hidden md:h-86 h-72">
          {movie.trendingMovie.map((item, index) => {
            return (
              <>
                <div key={index} className="xl:basis-1/6 lg:basis-1/4 md:basis-1/3 basis-40 grow-0 shrink-0 md:h-84 h-56 p-2 my-auto transition-transform duration-300" style={{ transform: `translateX(-${valueX * 100}%)` }}>
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

