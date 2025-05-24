import { bantuanLinks, genreLinks1, genreLinks2, genreLinks3, genreLinks4 } from '../../data/FooterLinks'
import DesktopBantuanLinks from './DesktopBantuanLinks'
import DesktopGenreLinks from './DesktopGenreLinks'

const DesktopFooter = () => {
  return (
    <footer className='py-[60px] px-20 border-t border-t-[#E7E3FC3B] mt-12'>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-y-10 lg:gap-4'>
        {/* kotak 1 */}
        <div className='flex flex-col gap-3'>
          <div className=' text-white flex items-center gap-1 font-londrina text-[50px]'>
            <svg width='43' height='37' viewBox='0 0 43 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M40.4169 0.496582L32.2294 1.92658L37.9377 8.41658L42.0419 7.68325L40.4169 0.496582ZM26.1044 2.98992L22.0002 3.70492L27.7294 10.1766L31.8127 9.46158L26.1044 2.98992ZM15.8961 4.74992L11.7919 5.50158L17.5211 11.9732L21.6044 11.2582L15.8961 4.74992ZM5.66689 6.58325L3.62523 6.93158C2.54269 7.12192 1.59023 7.68252 0.976979 8.49029C0.363727 9.29807 0.13981 10.287 0.354394 11.2399L1.16689 14.8332L11.3752 13.0549L5.66689 6.58325ZM1.16689 14.8332V33.1666C1.16689 35.2016 3.04189 36.8333 5.33356 36.8333H38.6669C40.9794 36.8333 42.8336 35.2016 42.8336 33.1666V14.8332H1.16689Z'
                fill='white'
              />
            </svg>
            CHILL
          </div>
          <p className='text-base font-normal font-poppins text-[#C1C2C4]'>
            Created by &copy;{' '}
            <a href='https://instagram.com/rafi.amd16' target='_blank' className='text-blue-500'>
              Rafi Ahmad
            </a>{' '}
            — 2025 Chill. All rights reserved.
          </p>
        </div>
        {/* kotak 2 */}
        <div className='flex gap-40'>
          <DesktopGenreLinks links1={genreLinks1} links2={genreLinks2} links3={genreLinks3} links4={genreLinks4} />
          <DesktopBantuanLinks links={bantuanLinks} />
        </div>
      </div>
    </footer>
  )
}

export default DesktopFooter
