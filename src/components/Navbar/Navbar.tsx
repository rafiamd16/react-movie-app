import type { FC } from 'react'
import type { User } from '../../types/user'
import NavLinks from './NavLinks'
import Profile from './Profile'

interface Props {
  currentUser: User
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

const Navbar: FC<Props> = ({ currentUser, setCurrentUser }) => {
  return (
    <header className='bg-[#181A1C] flex items-center justify-between w-full fixed top-0 left-0 z-50 py-1.5 px-5 md:py-[25px] md:px-20 h-[56px] md:h-[94px]'>
      <NavLinks />
      <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </header>
  )
}

export default Navbar
