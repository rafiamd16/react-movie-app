import { Route, Routes, useLocation } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/home.tsx'
import LoginPage from './pages/login.tsx'
import RegisterPage from './pages/register.tsx'
import SeriesPage from './pages/series.tsx'
import FilmPage from './pages/film.tsx'
import DaftarSaya from './pages/daftarSaya.tsx'
import { useDevice } from './hooks/useDevice.ts'
import MobileFooter from './components/Footer/MobileFooter.tsx'
import DesktopFooter from './components/Footer/DesktopFooter.tsx'

const App = () => {
  const location = useLocation()
  const { isMobile } = useDevice()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='/film' element={<FilmPage />} />
        <Route path='/daftar-saya' element={<DaftarSaya />} />
      </Routes>
      {isMobile ? <MobileFooter /> : <DesktopFooter />}
    </>
  )
}

export default App
