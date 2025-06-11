import { useState } from 'react'
import { useDevice } from '../../hooks/useDevice'
import Button from '../Elements/Button/Index'

const leftGenreList = [
  {
    name: 'Aksi',
  },
  {
    name: 'Anak-anak',
  },
  {
    name: 'Anime',
  },
  {
    name: 'Britania',
  },
  {
    name: 'Drama',
  },
  {
    name: 'Fantasi Ilmiah & Fantasi',
  },
  {
    name: 'Kejahatan',
  },
]

const rightGenreList = [
  {
    name: 'KDrama',
  },
  {
    name: 'Komedi',
  },
  {
    name: 'Petualangan',
  },
  {
    name: 'Perang',
  },
  {
    name: 'Romantis',
  },
  {
    name: 'Sains & Alam',
  },
  {
    name: 'Thriller',
  },
]

const HeroSection = ({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { isTablet, isDesktop } = useDevice()

  return (
    <section className='relative w-screen h-[225px] md:h-[587px] overflow-hidden pt-[54px] md:pt-[94px]'>
      <img src={image} alt={title} className='object-cover w-full h-full object-center' />

      {/* Genre Button */}
      {(isTablet || isDesktop) && (
        <div onMouseLeave={() => setIsHovered(false)}>
          <button
            onMouseEnter={() => setIsHovered(true)}
            type='button'
            className='absolute z-10 cursor-pointer top-35 left-20'
          >
            <div className='flex items-center justify-center py-2.5 px-[22px] gap-2 bg-[#22282A] text-white rounded-lg font-lato text-base font-bold relative'>
              Genre
              <svg
                width='12'
                height='8'
                viewBox='0 0 12 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z'
                  fill='white'
                />
              </svg>
            </div>
          </button>
          {isHovered && (
            <div className='flex rounded-lg item-center bg-[#22282A] w-[392px] absolute top-46 left-20 z-20 text-white'>
              <ul className='w-1/2 h-full'>
                {leftGenreList.map((genre, i) => (
                  <li
                    key={i}
                    className='px-3 py-2 rounded-tl-lg hover:bg-[#3D4142] transition-all cursor-pointer'
                  >
                    <a href='#'>{genre.name}</a>
                  </li>
                ))}
              </ul>
              <ul className='w-1/2 h-full'>
                {rightGenreList.map((genre, i) => (
                  <li
                    key={i}
                    className='px-3 py-2 rounded-tr-lg hover:bg-[#3D4142] transition-all cursor-pointer'
                  >
                    <a href='#'>{genre.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(24,26,28,1),rgba(0,0,0,0))]' />

      <div className='absolute z-10 flex flex-col gap-3 text-white md:gap-10 bottom-10 left-5 right-5 md:left-20 md:right-20 md:bottom-25 font-lato'>
        <div className='flex flex-col gap-3 md:gap-5 md:w-[668px]'>
          <h2 className='text-2xl font-bold md:text-5xl'>{title}</h2>
          <p className='text-xs font-medium leading-snug truncate sm:whitespace-normal md:text-lg'>
            {description}
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-xs font-bold md:text-base font-lato'>
            <Button
              type='button'
              classname='px-3 py-1 md:py-[10px] md:px-[26px] bg-[#0F1E93] rounded-full hover:bg-blue-700 transition-all'
            >
              Mulai
            </Button>
            <Button
              type='button'
              classname='flex items-center justify-center gap-3 px-3 py-1 md:py-[10px] md:px-[26px] rounded-full bg-[#22282A]'
            >
              <svg
                width='10'
                height='10'
                viewBox='0 0 10 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='md:w-[24px] md:h-[24px]'
              >
                <path
                  d='M4.5 4H5.5V3H4.5M5 9.5C2.795 9.5 1 7.705 1 5.5C1 3.295 2.795 1.5 5 1.5C7.205 1.5 9 3.295 9 5.5C9 7.705 7.205 9.5 5 9.5ZM5 0.5C4.34339 0.5 3.69321 0.629329 3.08658 0.880602C2.47995 1.13188 1.92876 1.50017 1.46447 1.96447C0.526784 2.90215 0 4.17392 0 5.5C0 6.82608 0.526784 8.09785 1.46447 9.03553C1.92876 9.49983 2.47995 9.86812 3.08658 10.1194C3.69321 10.3707 4.34339 10.5 5 10.5C6.32608 10.5 7.59785 9.97322 8.53553 9.03553C9.47322 8.09785 10 6.82608 10 5.5C10 4.84339 9.87067 4.19321 9.6194 3.58658C9.36812 2.97995 8.99983 2.42876 8.53553 1.96447C8.07124 1.50017 7.52005 1.13188 6.91342 0.880602C6.30679 0.629329 5.65661 0.5 5 0.5ZM4.5 8H5.5V5H4.5V8Z'
                  fill='white'
                />
              </svg>
              Selengkapnya
            </Button>
            <span className='p-1 md:p-2.5 rounded-full bg-transparent border border-[#C1C2C4] text-[#C1C2C4]'>
              18+
            </span>
          </div>
          <Button
            type='button'
            classname='rounded-full border border-[#C1C2C4] p-[6px] md:p-2.5 text-[#C1C2C4]'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='md:w-[18px] md:h-[18px]'
            >
              <path
                d='M6 0.666667L4.60667 2.06L6 3.45333M0.846667 0L0 0.846667L3.15333 4H0V8H2.66667L6 11.3333V6.84667L8.83333 9.68667C8.38667 10.0267 7.88667 10.3067 7.33333 10.4667V11.8467C8.25333 11.6333 9.08667 11.2133 9.78667 10.64L11.1533 12L12 11.1533L6 5.15333M10.6667 6C10.6667 6.62667 10.5333 7.21333 10.3067 7.76L11.3133 8.76667C11.7467 7.94 12 7 12 6C12 3.14667 10 0.76 7.33333 0.153333V1.52667C9.26 2.1 10.6667 3.88667 10.6667 6ZM9 6C9 4.82 8.33333 3.80667 7.33333 3.31333V4.78667L8.96667 6.42C9 6.28667 9 6.14 9 6Z'
                fill='#C1C2C4'
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
