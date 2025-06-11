import { Routes, Route, Navigate, useLocation } from 'react-router'
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
import { useState } from 'react'
import type { User } from './types/user.ts'
import ProfilePage from './pages/profile.tsx'

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const location = useLocation()
  const { isMobile } = useDevice()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

  return (
    <>
      {currentUser && !isAuthPage && (
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
      <Routes>
        <Route path='/' element={currentUser ? <HomePage /> : <Navigate to='/login' />} />
        <Route
          path='/login'
          element={
            currentUser ? (
              <Navigate to='/' />
            ) : (
              <LoginPage users={users} setCurrentUser={setCurrentUser} />
            )
          }
        />
        <Route path='/register' element={<RegisterPage users={users} setUsers={setUsers} />} />
        <Route path='/series' element={currentUser ? <SeriesPage /> : <Navigate to='/login' />} />
        <Route path='/film' element={currentUser ? <FilmPage /> : <Navigate to='/login' />} />
        <Route
          path='/daftar-saya'
          element={currentUser ? <DaftarSaya /> : <Navigate to='/login' />}
        />
        <Route
          path='/profile'
          element={
            currentUser ? (
              <ProfilePage
                users={users}
                setUsers={setUsers}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
      </Routes>
      {currentUser && isMobile && !isAuthPage ? <MobileFooter /> : !isAuthPage && <DesktopFooter />}
    </>
  )
}

export default App
