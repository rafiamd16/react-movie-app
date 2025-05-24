import { NavLink } from 'react-router'
import clsx from 'clsx'
import { useState } from 'react'
import Button from '../Elements/Button/Index'

const Profile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Button type='button' onClick={handleClick} classname='relative flex items-center gap-1 md:gap-2'>
      <img src='/profile.png' alt='image' className='w-5 h-5 rounded-full md:w-10 md:h-10' />
      <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.94 0.726562L4 3.7799L7.06 0.726562L8 1.66656L4 5.66656L0 1.66656L0.94 0.726562Z'
          fill='white'
          className='md:w-3.5 md:h-2'
        />
      </svg>
      <nav
        className={clsx(
          'w-[113px] h-[104px] md:w-[156px] md:h-[128px] rounded-sm bg-[#181A1C] py-1 absolute top-full right-0 scale-0 origin-top-right transition-transform duration-300 shadow md:shadow-none',
          {
            'scale-100': isOpen,
          },
        )}
      >
        <NavLink
          to=''
          className={({ isActive }) =>
            isActive
              ? 'text-[#3254FF] py-2 px-3 gap-1.5 text-[10px] font-lato md:text-sm flex items-center font-bold'
              : 'flex items-center py-2 px-3 gap-1.5 text-[10px] font-lato text-white font-medium md:text-sm hover:text-[#3254FF] transition-all'
          }
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-current md:w-4 md:h-4'
          >
            <path d='M5.99984 0.666748C6.70708 0.666748 7.38536 0.9477 7.88546 1.4478C8.38555 1.94789 8.6665 2.62617 8.6665 3.33341C8.6665 4.04066 8.38555 4.71894 7.88546 5.21903C7.38536 5.71913 6.70708 6.00008 5.99984 6.00008C5.29259 6.00008 4.61432 5.71913 4.11422 5.21903C3.61412 4.71894 3.33317 4.04066 3.33317 3.33341C3.33317 2.62617 3.61412 1.94789 4.11422 1.4478C4.61432 0.9477 5.29259 0.666748 5.99984 0.666748ZM5.99984 7.33342C8.9465 7.33342 11.3332 8.52675 11.3332 10.0001V11.3334H0.666504V10.0001C0.666504 8.52675 3.05317 7.33342 5.99984 7.33342Z' />
          </svg>
          Profil Saya
        </NavLink>
        <NavLink
          to='series'
          className={({ isActive }) =>
            isActive
              ? 'text-[#3254FF] py-2 px-3 gap-1.5 text-[10px] font-lato font-bold md:text-sm flex items-center'
              : 'flex items-center py-2 px-3 gap-1.5 text-[10px] font-lato text-white font-medium md:text-sm hover:text-[#3254FF] transition-all'
          }
        >
          <svg
            width='14'
            height='13'
            viewBox='0 0 14 13'
            xmlns='http://www.w3.org/2000/svg'
            className='md:w-5 md:h-[19px] fill-current'
          >
            <path d='M7.00016 10.5133L11.1202 12.9999L10.0268 8.31325L13.6668 5.15992L8.8735 4.74659L7.00016 0.333252L5.12683 4.74659L0.333496 5.15992L3.96683 8.31325L2.88016 12.9999L7.00016 10.5133Z' />
          </svg>
          Ubah Premium
        </NavLink>
        <NavLink
          to='film'
          className={({ isActive }) =>
            isActive
              ? 'text-[#3254FF] py-2 px-3 gap-1.5 text-[10px] font-lato font-bold md:text-sm flex items-center'
              : 'flex items-center py-2 px-3 gap-1.5 text-[10px] font-lato text-white font-medium md:text-sm hover:text-[#3254FF] transition-all'
          }
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            xmlns='http://www.w3.org/2000/svg'
            className='md:w-[18px] md:h-[18px] fill-current'
          >
            <path d='M10.6667 0H1.33333C0.593333 0 0 0.593333 0 1.33333V4H1.33333V1.33333H10.6667V10.6667H1.33333V8H0V10.6667C0 11.0203 0.140476 11.3594 0.390524 11.6095C0.640573 11.8595 0.979711 12 1.33333 12H10.6667C11.0203 12 11.3594 11.8595 11.6095 11.6095C11.8595 11.3594 12 11.0203 12 10.6667V1.33333C12 0.593333 11.4 0 10.6667 0ZM4.72 8.38667L5.66667 9.33333L9 6L5.66667 2.66667L4.72 3.60667L6.44667 5.33333H0V6.66667H6.44667L4.72 8.38667Z' />
          </svg>
          Keluar
        </NavLink>
      </nav>
    </Button>
  )
}

export default Profile
