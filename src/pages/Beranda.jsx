import { useContext, useEffect, useState, useRef } from "react";
import { MovieContext } from "../context/MovieContext";
import Stars from "../components/Stars";

import handphone from '../assets/images/handphoneframe.png'
import tablet from '../assets/images/tabletframe.png'
import laptop from '../assets/images/laptopframe.png'
import smarttv from '../assets/images/tvframe.png'
import Card from "../components/Card";

const genre = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
]

function Beranda() {

  const movie = useContext(MovieContext)
  const [activeIndex, setActiveIndex] = useState(0)

  const next = (() => {
    setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % 5)
  })

  useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 4000)
    return () => clearInterval(timer)
  }, [activeIndex])


  return (
    <>
      {/* Top Carousel */}
      <div className='w-full overflow-hidden mb-0 bg-black/50' style={{ height: 'calc(100vh - 54px)' }}>
        <div className='flex w-full h-full' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {movie.trendingMovie.slice(0, 5).map((item, index) => {
            return (
              <div className={`w-full shrink-0 ${index == activeIndex ? 'opacity-100' : 'opacity-20'} transition duration-700 ease-in-out`} key={index}>
                <div className='absolute z-10 w-full h-full'>
                  <div className='flex flex-wrap justify-center items-center xl:gap-x-3 h-full xl:mx-10 lg:mx-20 md:mx-5 mx-10'>
                    <div className='xl:basis-1/4 lg:basis-1/4 md:basis-1/3'>
                      <div className='shadow-lg shadow-black/[.7] rounded-md'>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" className='w-full md:h-full h-[20rem] mx-auto object-cover rounded-md' />
                      </div>
                    </div>
                    <div className='xl:basis-2/4 lg:basis-3/4 md:basis-2/3 lg:ps-10 md:ps-5 font-light text-sm'>
                      <h1 className='mb-5 font-medium text-white text-5xl'>{item.title}</h1>
                      <div className="flex items-center space-x-5 mb-2">
                        <div className="inline-flex items-center space-x-2">
                          <Stars rating={Math.round(((item.vote_average / 2) * 10)) / 10} />
                          <span className="text-white">
                            {Math.round(((item.vote_average / 2) * 10)) / 10}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          {movie.movieGenre.filter(genre => item.genre_ids.includes(genre.id)).map((item, index) => {
                            return (
                              <p className="text-white" key={index}>
                                {item.name}
                              </p>
                            )
                          })}
                        </div>
                        <span className="text-white">
                          {item.release_date.split("-")[0]}
                        </span>
                      </div>
                      <p className='mb-7 font-thin text-white text-lg text-justify line-clamp-4'>{item.overview}</p>
                      <div className="inline-flex space-x-7">
                        <button className="flex items-center space-x-1 py-2 px-5 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                          </svg>
                          <span className="font-bold">
                            Mainkan
                          </span>
                        </button>
                        <button className="flex items-center space-x-1 py-2 px-5 bg-white text-blue-500 rounded-md hover:bg-gray-200 active:bg-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          <span className="font-bold">
                            Tambahkan
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute w-full h-full backdrop-brightness-[40%]'></div>
                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="gambar1" className='w-full h-full object-cover c' />
              </div>
            )
          })}
        </div>
      </div>

      {/* Carousel Any Device (on development) */}
      {/* <CarouselAnyDevice />  */}

      {/* Movie and Selected Genre */}
      <MovieAndSelectedGenre />

      {/* Pricing */}
      <div className="py-5 dark:bg-gray-950">
        <h1 className="mb-3 font-bold text-center text-3xl dark:text-gray-200">Pilih Paket Berlanggan <br /> Sesuai Kebutuhan</h1>
        <p className=" text-center text-lg dark:text-gray-200">Pilihlah paket menarik dibawah ini sesuai dengan kebutuhan anda</p>
        {/* Pricing plan */}
        <div className="flex flex-wrap justify-center lg:gap-0 gap-6 xl:px-20 xl:py-7 py-5">
          <div className="basis-1/3 lg:basis-1/4 px-5 lg:px-3">
            <div className="h-full py-5 px-2 bg-gray-50 rounded-lg hover:scale-105 hover:shadow-md transition duration-100 dark:bg-slate-900 dark:text-gray-200">
              <div className="px-6">
                <h1 className="mb-0.5 font-medium text-center text-3xl">Basic</h1>
                <p className="mb-3 text-center text-md">Terbaik untuk individu serta untuk ponsel dan tablet.</p>
                <p className="mb-3 text-center">
                  <span>Rp</span>
                  <span className="font-medium text-5xl">80.000</span>
                  <span>/bln</span>
                </p>
              </div>
              <hr className="w-[18.6rem] h-px m-auto my-4 border-0 bg-gray-400" />
              <ul className="ps-10 pe-7 list-disc">
                <li className="mb-1">Akses semua film dan serial TV tanpa batas.</li>
                <li className="mb-1">Mendukung log in untuk satu perangkat.</li>
                <li className="mb-1">Mendukung perangkat ponsel dan tablet saja.</li>
                <li className="mb-1">Mendukung 1 perangkat saja saat streaming.</li>
                <li className="mb-1">Resolusi maksimal HD.</li>
              </ul>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 px-5 lg:px-3">
            <div className="h-full py-5 px-2 bg-gray-50 rounded-lg hover:scale-105 hover:shadow-md transition duration-100 dark:bg-slate-900 dark:text-gray-200">
              <div className="px-6">
                <h1 className="mb-0.5 font-medium text-center text-3xl">Standard</h1>
                <p className="mb-3 text-center text-md">Terbaik untuk keluarga atau berbagi dengan teman.</p>
                <p className="mb-3 text-center">
                  <span>Rp</span>
                  <span className="font-medium text-5xl">120.000</span>
                  <span>/bln</span>
                </p>
              </div>
              <hr className="w-[18.6rem] h-px m-auto my-4 border-0 bg-gray-400" />
              <ul className="ps-10 pe-7 list-disc">
                <li className="mb-1">Akses semua film dan serial TV tanpa batas.</li>
                <li className="mb-1">Mendukung log in hingga 3 perangkat.</li>
                <li className="mb-1">Mendukung perangkat ponsel, tablet dan Laptop atau komputer saja.</li>
                <li className="mb-1">Mendukung hingga 3 perangkat saat streaming bersamaan.</li>
                <li className="mb-1">Resolusi maksimal HD hingga Full HD.</li>
              </ul>
            </div>
          </div>
          <div className="basis-1/3 lg:basis-1/4 px-5 lg:px-3">
            <div className="h-full py-5 px-2 bg-gray-50 rounded-lg hover:scale-105 hover:shadow-md transition duration-100 dark:bg-slate-900 dark:text-gray-200">
              <div className="px-6">
                <h1 className="mb-0.5 font-medium text-center text-3xl">Premium</h1>
                <p className="mb-3 text-center text-md">Untuk orang yang ingin merasakan pengalaman Home Theater.</p>
                <p className="mb-3 text-center">
                  <span>Rp</span>
                  <span className="font-medium text-5xl">200.000</span>
                  <span>/bln</span>
                </p>
              </div>
              <hr className="w-[18.6rem] h-px m-auto my-4 border-0 bg-gray-400" />
              <ul className="ps-10 pe-7 list-disc">
                <li className="mb-1">Akses semua film dan serial TV tanpa batas.</li>
                <li className="mb-1">Mendukung log in hingga 6 perangkat.</li>
                <li className="mb-1">Mendukung perangkat ponsel, tablet, Laptop atau komputer dan Smart TV.</li>
                <li className="mb-1">Mendukung hingga 6 perangkat saat streaming bersamaan.</li>
                <li className="mb-1">Resolusi maksimal HD hingga Full 4K.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Best Series */}
      <BestSeris />
    </>
  );
}

export default Beranda;

function CarouselAnyDevice() {

  const [index, setIndex] = useState(0)
  const [frame, setFrame] = useState(handphone)
  const [size, setSize] = useState('handphone')
  const movie = useContext(MovieContext)
  // const sizeFrame = {
  //   handphone: 'w-[7rem] h-[15rem]',
  //   tablet: 'w-[15rem] h-[20rem]',
  //   laptop: 'w-[28rem] h-[16rem]',
  //   smarttv: 'w-[30rem] h-[20rem]'
  // }
  const sizeImage = {
    handphone: 'w-[6.5rem] h-[14rem]',
    tablet: 'w-[14rem] h-[18rem]',
    laptop: 'w-[22.1rem] h-[14rem]',
    smarttv: 'w-[28rem] h-[19rem]',
  }
  const sizeHeigth = {
    handphone: 'h-[15rem]',
    tablet: 'h-[20rem]',
    laptop: 'h-[17rem]',
    smarttv: 'h-[20rem]',
  }

  const handleNext = (() => {
    setIndex((prevIndex) => (prevIndex + 1) % 5)
  })

  const handlePrev = (() => {
    setIndex((prevIndex) => (prevIndex - 1 + 5) % 5)
  })

  return (
    <>
      <div className="mb-10">
        <h1 className="mb-3 font-bold text-center text-3xl">Nonton Dimanapun dengan <br /> Perangkat Apapun</h1>
        <p className="mb-5 text-center text-lg">Tontonlah film - film favorit anda dimana saja dengan menggunakan berbagai <br /> perangkat dengan mudah.</p>
        {/*  */}
        <div className="">
          <div className={`relative ${sizeHeigth[size]}`}>
            <div className="absolute bottom-[50%] left-[20%] translate-y-[50%]">
              <button onClick={handlePrev}>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </i>
              </button>
            </div>
            {/* <div className="absolute z-10 right-[50%] translate-x-[50%]">
              <img src={handphone} className={`${sizeFrame[size]} ${frame == handphone ? '' : 'hidden'}`} />
              <img src={tablet} className={`${sizeFrame[size]} ${frame == tablet ? '' : 'hidden'}`} />
              <img src={laptop} className={`${sizeFrame[size]} ${frame == laptop ? '' : 'hidden'}`} />
              <img src={smarttv} className={`${sizeFrame[size]} ${frame == smarttv ? '' : 'hidden'}`} />
            </div> */}
            <div className="absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%]">
              <div className="flex justify-center items-cente space-x-10">
                <div className={`${sizeImage[size]} overflow-hidden`}>
                  <div className="flex w-full h-full" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {movie.bestMovie.slice(5, 10).map((item, index) => {
                      return (
                        <div className="w-full shrink-0" key={index}>
                          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className="w-full h-full object-cover object-top" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[50%] right-[20%] translate-y-[50%]">
              <button onClick={handleNext}>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
        {/* Button for change size frame */}
        <div className="flex justify-center space-x-20 mt-5">
          <button onClick={() => { setFrame(handphone); setSize('handphone') }}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </i>
            <p className="mt-1 font-medium">Phone</p>
          </button>
          <button onClick={() => { setFrame(tablet); setSize('tablet') }}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </i>
            <p className="mt-1 font-medium">Tablet</p>
          </button>
          <button onClick={() => { setFrame(laptop); setSize('laptop') }}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </i>
            <p className="mt-1 font-medium">Komputer</p>
          </button>
          <button onClick={() => { setFrame(smarttv); setSize('smarttv') }}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </i>
            <p className="mt-1 font-medium">Smart Tv</p>
          </button>
        </div>
      </div>
    </>
  )
}

function MovieAndSelectedGenre() {

  const [index, setIndex] = useState(0)
  const [modulo, setModulo] = useState(2)
  const windowWidth = window.innerWidth
  const [loading, setLoading] = useState(false)
  const [movieSelected, setMovieSelected] = useState([])
  const [genreSelected, setGenreSelected] = useState(28)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTc0YTc3YzNlZGY4MzIyYzZjOTc3NTZiZmM4MTYyNiIsInN1YiI6IjYxOTNhYmI3NzVmMWFkMDAyOWQ4ZTQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C0Ty_kJTEsHH9tXTCVhbNPrLpfWbRjwpeDwU6_lBm08'
    }
  }

  const handleNext = (() => {
    setIndex((prevIndex) => (prevIndex + 1) % modulo)
  })

  const handlePrev = (() => {
    setIndex((prevIndex) => (prevIndex - 1 + 2) % modulo)
  })

  const getMovieByGenre = (() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${genreSelected}`, options)
      .then(response => response.json())
      .then(response => setMovieSelected(response.results))
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  })

  const setModuloForNextPrev = (() => {
    if (window.innerWidth <= 425) {
      setModulo(4)
    } else if (window.innerWidth <= 768 && window.innerWidth > 425) {
      setModulo(3)
    } else {
      setModulo(2)
    }
  })

  useEffect(() => {
    document.title = 'Beranda | FILMBAGUS'
    setLoading(true)
    getMovieByGenre()
    setModuloForNextPrev()
  }, [genreSelected])

  return (
    <>
      <div className="py-10 bg-gray-100 dark:bg-slate-950">
        <h1 className="mb-3 font-bold text-center text-3xl dark:text-gray-200">Ribuan Film dari Berbagai <br /> Macam Genre </h1>
        <p className="mb-5 text-center text-lg dark:text-gray-200">Terdapat banyak genre dengan ribuan film untuk <br /> tontonan sehari hari anda</p>
        {/* Genre Carousel */}
        <div className="flex justify-center gap-12 lg:px-5 mb-5">
          <button className="dark:text-gray-200" onClick={handlePrev}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </i>
          </button>
          <div className="w-2/3 overflow-hidden">
            <div className="flex w-full transition-all duration-300" style={{ transform: `translateX(-${index * 100}%)` }}>
              {genre.map((item, index) => {
                return (
                  <div className="lg:basis-1/4 md:basis-1/3 basis-1/2 grow-0 shrink-0 p-2" key={index}>
                    <button onClick={() => setGenreSelected(item.id)} className={`flex justify-center items-center md:space-x-7 space-x-2 w-full py-1.5 bg-white ${genreSelected == item.id ? 'text-blue-400 border-2 border-blue-400 dark:text-blue-600 dark:border-blue-600' : 'border-2 border-gray-50 dark:border-gray-200'} rounded-md shadow shadow-black/1 active:bg-gray-50 dark:bg-gray-200 `}>
                      <p className="font-medium text-start text-xl">{item.name}</p>
                    </button>
                  </div>
                )
              })}
            </div>
          </div >
          <button className="dark:text-gray-200" onClick={handleNext}>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </i>
          </button>
        </div >
        {/* Movie From Selected Genre */}
        <div className="flex flex-wrap justify-center xl:gap-3 lg:gap-7 md:gap-5 gap-5 xl:mx-4 lg:mx-10 md:mx-4">
          {loading ? <div className="dark:text-gray-200">loading...</div> :
            movieSelected.slice(0, 6).map((item, index) => {
              return (
                <div className="xl:basis-52 lg:basis-56 md:basis-52 basis-1/3 lg:h-84 md:h-80 h-68">
                  <Card data={item} key={index} />
                </div>
              )
            })}
        </div>
      </div >
    </>
  )
}

function BestSeris() {
  const movie = useContext(MovieContext)

  return (
    <>
      <div className="py-7 bg-gray-50 dark:bg-slate-950 dark:text-gray-200">
        <h1 className="mb-3 font-bold text-center text-3xl">Serial TV Paling Populer</h1>
        <p className="mb-5 text-center text-lg">Tak hanya terdapat film saja tetapi terdapat juga ribuat Serial TV <br /> berkualitas yang siap anda nikmati.</p>
        <div className="flex flex-wrap lg:justify-center md:justify-start justify-center lg:gap-5 gap-5 xl:px-20 lg:px-5 md:px-7 px-3">
          {movie.trendingSeries.slice(0, 8).map((item, index) => {
            return (
              <div className="lg:basis-1/5 md:basis-56 basis-1/3 md:h-84 h-68">
                <Card data={item} key={index} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}