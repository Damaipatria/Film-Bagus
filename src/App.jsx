import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Beranda from './pages/Beranda'
import Film from './pages/Film'
import Series from './pages/Series'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <MovieProvider>
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/film' element={<Film />} />
          <Route path='/series' element={<Series />} />
        </Routes>
      </MovieProvider>
      <Footer />
    </>
  )
}

export default App