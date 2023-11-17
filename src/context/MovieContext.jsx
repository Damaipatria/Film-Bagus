import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

  const [trendingMovie, setTrendingMovie] = useState([])
  const [trendingSeries, setTrendingSeries] = useState([])
  const [movieGenre, setMovieGenre] = useState([])
  const [seriesGenre, setSeriesGenre] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'API Key'
    }
  };

  const getTrendingMovie = (() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(response => setTrendingMovie(response.results))
      .catch(err => setTrendingMovie(err));
  })

  useEffect(() => {
    getTrendingMovie()
  }, [trendingMovie])

  const getTrendingSeries = (() => {
    fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
      .then(response => response.json())
      .then(response => setTrendingSeries(response.results))
      .catch(err => console.error(err));
  })

  useEffect(() => {
    getTrendingSeries()
  }, [trendingSeries])

  const getMovieGenre = (() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(response => response.json())
      .then(response => setMovieGenre(response.genres))
      .catch(err => console.error(err));
  })

  useEffect(() => {
    getMovieGenre()
  }, [movieGenre])

  const getSeriesMovie = (() => {
    fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
      .then(response => response.json())
      .then(response => setSeriesGenre(response.genres))
      .catch(err => console.error(err));
  })

  useEffect(() => {
    getSeriesMovie()
  }, [seriesGenre])

  return (
    <MovieContext.Provider value={{ trendingMovie, trendingSeries, movieGenre, seriesGenre }}>
      {children}
    </MovieContext.Provider>
  )
}
