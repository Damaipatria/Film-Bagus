import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Header() {

  const [toggleMenu, setToggleMenu] = useState(true)
  const toggleTheme = useContext(ThemeContext)

  const hanldeSetToggleMenu = (() => {
    setToggleMenu(!toggleMenu)
  })

  const handleDarkMode = (() => {
    toggleTheme.setTheme(!toggleTheme.theme)
  })

  return (
    <>
      <nav className="flex justify-between items-center lg:px-16 lg:py-3 md:px-7 px-5 py-3 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-900">
        {/* button toggle mobile menu*/}
        <div className="md:basis-1/3 basis-2/3 flex gap-x-5 lg:hidden">
          <button className="block dark:text-white" onClick={hanldeSetToggleMenu}>
            {toggleMenu ?
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </i> :
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </i>
            }
          </button>
          <div className="md:hidden font-extrabold text-xl text-center uppercase">
            <span className="dark:text-white">film</span>
            <span className="text-blue-500 me-2">bagus</span>
          </div>
        </div>

        {/* logo/name web */}
        <div className="lg:basis-2/6 basis-2/3 md:block hidden pt-1 font-extrabold text-xl lg:text-left text-center uppercase">
          <span className="dark:text-white">film</span>
          <span className="text-blue-500 me-2">bagus</span>
        </div>


        {/* main menu */}
        <div className="lg:flex gap-10 font-medium hidden dark:text-white">
          <div className="">
            <Link to="/">Beranda</Link>
          </div>
          <div className="">
            <Link to="/film">Film</Link>
          </div>
          <div className="">
            <Link to="/series">Series</Link>
          </div>
        </div>

        {/* login & signup */}
        <div className="lg:basis-2/6 md:basis-1/3 basis-2/3 flex justify-end gap-x-5 font-bold text-sm">
          <a href="" className="px-5 py-1 text-blue-500 capitalize border border-blue-500 rounded-md lg:block hidden dark:border-white dark:text-white">log in</a>
          <a href="" className="px-5 py-1 text-white capitalize bg-blue-500 border border-blue-500 rounded-md">sign up</a>
          <button onClick={handleDarkMode}>
            {toggleTheme.theme ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            }
          </button>
        </div>
      </nav>
      {/* mobile menu */}
      <div className={`absolute w-full ${toggleMenu ? 'h-0' : 'h-fit'} z-10 lg:hidden overflow-hidden bg-white shadow-md dark:bg-gray-900 dark:text-white`}>
        <div className="md:mx-7 md:py-3 mx-5 font-medium border-b border-gray-200">
          <div className="py-2">
            <Link to={'/'}>Beranda</Link>
          </div>
          <div className="py-2">
            <Link to={'/film'}>Film</Link>
          </div>
          <div className="py-2">
            <Link to={'/series'}>Series</Link>
          </div>
        </div>
        <div className="md:mx-7 mx-6 my-4 font-medium">
          <div className="py-2">
            <a href="" className="px-5 py-1 text-blue-500 capitalize border border-blue-500 rounded-md dark:border-white dark:text-white">log in</a>
          </div>
        </div>
      </div>
    </>
  )
  // return (
  //   <>
  //     <nav className=''>
  //       <div className='flex justify-between items-center mx-5 lg:mx-12 py-2 lg:py-0'>
  //         {/* logo/nama website */}
  //         <div className='uppercase border-b-0 border-white lg:border-0'>
  //           <span>film</span>
  //           <span className='text-blue-600'>bagus</span>
  //         </div>

  //         {/* menu utama */}
  //         <div className='lg:flex space-x-7 hidden'>
  //           <div className='px-2 py-3'>
  //             <a href="#">Beranda</a>
  //           </div>
  //           <div className='px-2 py-3'>
  //             <a href="#">Film</a>
  //           </div>
  //           <div className='px-2 py-3'>
  //             <a href="#">Series</a>
  //           </div>
  //           <div className='px-2 py-3'>
  //             <a href="#">Tentang</a>
  //           </div>
  //         </div>

  //         {/* masuk*/}
  //         <div className='lg:block hidden'>
  //           <a href="#login-page">
  //             <button className='px-7 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800'>
  //               Masuk
  //             </button>
  //           </a>
  //         </div>

  //         {/* button menu mobile */}
  //         <div className='flex items-center space-x-2 lg:hidden'>
  //           <a href="#login-page">
  //             <button className='px-7 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800'>
  //               Masuk
  //             </button>
  //           </a>
  //           <button className='p-1 rounded-md hover:bg-gray-200' onClick={() => setToggle(!toggle)}>
  //             {toggle ? (
  //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
  //                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  //               </svg>
  //             ) : (
  //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
  //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  //               </svg>
  //             )}
  //           </button>
  //         </div>
  //       </div>

  //       {/* menu mobile */}
  //       <div className={`lg:hidden ${toggle ? ('hidden') : ('')}`}>
  //         <a href="#" className=''>
  //           <div className='my-1 px-4 py-2 text-blue-700 bg-blue-50 border-l-4 border-blue-600'>Beranda</div>
  //         </a>
  //         <a href="#" className=''>
  //           <div className='my-1 px-4 py-2 text-gray-800 border-l-4 border-white hover:text-black hover:border-gray-400 hover:bg-gray-100'>Film</div>
  //         </a>
  //         <a href="#" className=''>
  //           <div className='my-1 px-4 py-2 text-gray-800 border-l-4 border-white hover:text-black hover:border-gray-400 hover:bg-gray-100'>Serial TV</div>
  //         </a>
  //         <a href="#" className=''>
  //           <div className='my-1 px-4 py-2 text-gray-800 border-l-4 border-white hover:text-black hover:border-gray-400 hover:bg-gray-100'>Harga</div>
  //         </a>
  //       </div>
  //     </nav >
  //   </>
  // );
}

export default Header;