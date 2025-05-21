import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/home.tsx'
import LoginPage from './pages/login.tsx'
import RegisterPage from './pages/register.tsx'
import SeriesPage from './pages/series.tsx'
import FilmPage from './pages/film.tsx'
import DaftarSaya from './pages/daftarSaya.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/series' element={<SeriesPage />} />
      <Route path='/film' element={<FilmPage />} />
      <Route path='/daftar-saya' element={<DaftarSaya />} />
    </Routes>
  </BrowserRouter>,
)
