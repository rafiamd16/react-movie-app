import { Link, NavLink } from 'react-router'

const links = [
  {
    name: 'Series',
    path: '/series',
  },
  {
    name: 'Film',
    path: '/film',
  },
  {
    name: 'Daftar Saya',
    path: '/daftar-saya',
  },
]

const NavLinks = () => {
  return (
    <nav className='flex items-center gap-3 md:gap-[72px]'>
      <Link to='/' className='flex items-center justify-center gap-1'>
        <svg
          width='18'
          height='16'
          viewBox='0 0 18 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-[18px] md:w-[25px] md:h-[22px]'
        >
          <path
            d='M16.3668 0.63501L13.0919 1.22001L15.3752 3.87501L17.0168 3.57501L16.3668 0.63501ZM10.6419 1.65501L9.00019 1.94751L11.2919 4.59501L12.9252 4.30251L10.6419 1.65501ZM6.55852 2.37501L4.91685 2.68251L7.20852 5.33001L8.84185 5.03751L6.55852 2.37501ZM2.46685 3.12501L1.65019 3.26751C1.21717 3.34537 0.83619 3.57471 0.590889 3.90516C0.345588 4.23562 0.256022 4.64017 0.341855 5.03001L0.666855 6.50001L4.75019 5.77251L2.46685 3.12501ZM0.666855 6.50001V14C0.666855 14.8325 1.41685 15.5 2.33352 15.5H15.6668C16.5918 15.5 17.3335 14.8325 17.3335 14V6.50001H0.666855Z'
            fill='white'
          />
        </svg>
        <h3 className='font-londrina text-[32px] text-white hidden md:inline-block'>CHILL</h3>
      </Link>
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-[10px] text-white md:text-lg font-lato py-1 px-2 bg-[#3254FF] rounded'
              : 'font-medium text-[10px] text-white md:text-lg font-lato transition-all duration-300 py-1 px-2 hover:bg-[#3254FF] rounded'
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavLinks
