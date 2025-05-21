import NavLinks from './NavLinks'
import Profile from './Profile'

const Navbar = () => {
  return (
    <header className='bg-[#181A1C] flex items-center justify-between w-full fixed top-0 left-0 z-50 py-1.5 px-5 md:py-[25px] md:px-20 h-[56px]'>
      <NavLinks />
      <Profile />
    </header>
  )
}

export default Navbar
