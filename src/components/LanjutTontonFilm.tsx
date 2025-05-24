/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'
import { type FilmItem } from '../data/Film'
import ScrollButton from './Elements/Button/ScrollButton'
import clsx from 'clsx'
import { useDevice } from '../hooks/useDevice'

type LanjutTontonFilmProps = {
  subTitle: string
  data: FilmItem[]
}

const LanjutTontonFilm = ({ subTitle, data }: LanjutTontonFilmProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { isMobile } = useDevice()

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className='py-5'>
      <div className='flex flex-col gap-5 px-5 md:px-20 font-lato'>
        <h2 className='text-xl font-bold font-lato text-white md:text-[32px]'>{subTitle}</h2>

        <div className='relative'>
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className='flex items-center gap-4 pr-6 overflow-x-auto scrollbar-hide'
          >
            {/* card start */}
            {data.map((item, i) => (
              <div key={i} className='group'>
                <div className='relative min-w-[309px] md:min-w-[302px] md:max-w-[302px] max-h-[162px] overflow-hidden rounded-lg cursor-pointer shadow md:group-hover:opacity-0'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full transition-opacity duration-300 ease-in-out bg-cover rounded-lg md:group-hover:opacity-0'
                  />

                  <div className='absolute z-10 flex items-center justify-between text-white right-4 left-4 bottom-4'>
                    <h5 className='text-sm font-bold font-lato md:text-lg'>{item.title}</h5>
                    <div className='flex items-center gap-1 text-white'>
                      <svg
                        width='10'
                        height='10'
                        viewBox='0 0 10 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='md:w-3.5 md:h-3.5'
                      >
                        <path
                          d='M5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.31L5 0L3.595 3.31L0 3.62L2.725 5.985L1.91 9.5L5 7.635Z'
                          fill='white'
                        />
                      </svg>
                      <span className='text-xs font-lato md:text-sm'>{item.rate}</span>
                    </div>
                  </div>

                  {/* overlay */}
                  <div className='absolute inset-0 bg-[linear-gradient(to_top,#0000008b,rgba(0,0,0,0))]' />
                </div>

                {/* Hover */}
                {!isMobile && (
                  <div
                    className={clsx(
                      'absolute -top-28 bg-[#181A1C] w-[409px] z-20 rounded-lg overflow-hidden drop-shadow-2xl transition-transform duration-300 ease-in-out scale-0',
                      {
                        'group-hover:scale-100': !isHovered,
                      },
                    )}
                  >
                    <div className='relative overflow-hidden'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='w-full bg-cover rounded-tl-lg rounded-tr-lg'
                      />

                      <div className='absolute inset-0 bg-[linear-gradient(to_top,#0000008b,rgba(0,0,0,0))]'></div>
                    </div>
                    <div className='flex flex-col gap-[17px] p-[29px]'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                          <span className='text-white'>
                            <svg
                              width='47'
                              height='47'
                              viewBox='0 0 47 47'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18.703 33.9548V13.3298L32.453 23.6423M23.2863 0.725586C20.2768 0.725586 17.2968 1.31834 14.5165 2.47001C11.7361 3.62168 9.20977 5.30971 7.08177 7.43772C2.78406 11.7354 0.369629 17.5644 0.369629 23.6423C0.369629 29.7201 2.78406 35.5491 7.08177 39.8468C9.20977 41.9748 11.7361 43.6628 14.5165 44.8145C17.2968 45.9662 20.2768 46.5589 23.2863 46.5589C29.3642 46.5589 35.1931 44.1445 39.4908 39.8468C43.7885 35.5491 46.203 29.7201 46.203 23.6423C46.203 20.6328 45.6102 17.6528 44.4585 14.8724C43.3069 12.092 41.6188 9.56573 39.4908 7.43772C37.3628 5.30971 34.8365 3.62168 32.0561 2.47001C29.2757 1.31834 26.2958 0.725586 23.2863 0.725586Z'
                                fill='white'
                              />
                            </svg>
                          </span>
                          <span className='p-3 text-white border border-[#9D9EA1] rounded-full'>
                            <svg
                              width='30'
                              height='30'
                              viewBox='0 0 30 30'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M26.2861 8.64281L11.7147 23.2142L5.03613 16.5357L6.74828 14.8235L11.7147 19.7778L24.574 6.93066L26.2861 8.64281Z'
                                fill='white'
                              />
                            </svg>
                          </span>
                        </div>
                        <div className='p-3 text-white border border-[#9D9EA1] rounded-full'>
                          <svg
                            width='30'
                            height='30'
                            viewBox='0 0 30 30'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.64028 8.64258L15.0717 16.1541L22.5031 8.64258L24.786 10.9664L15.0717 20.7854L5.35742 10.9664L7.64028 8.64258Z'
                              fill='white'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='relative flex items-center gap-4'>
                        <span className='bg-[#3254FF] w-[98px] h-[6px] rounded-full absolute top-2.6 left-0'></span>
                        <span className='h-1.5 w-[278px] bg-[#3D4142] rounded-full'></span>
                        <span className='text-lg font-medium text-[#C1C2C4]'>2j 33m</span>
                      </div>
                      <div className='flex justify-between text-[#C1C2C4] text-lg font-lato'>
                        <span className='font-semibold'>Mister</span>
                        <span className='text-xl'>.</span>
                        <span className='font-semibold'>Kriminal</span>
                        <span className='text-xl'>.</span>
                        <span className='font-semibold'>Fantasi</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* card end */}
          </div>

          {/* Scroll Buttons */}
          <ScrollButton onClick={scrollLeft} classname='top-18 -left-3.5 md:top-16.5'>
            <svg
              width='10'
              height='10'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='md:h-4 md:w-4'
            >
              <path
                d='M16.0002 7.00008V9.00008H4.00016L9.50016 14.5001L8.08016 15.9201L0.160156 8.00008L8.08016 0.0800781L9.50016 1.50008L4.00016 7.00008H16.0002Z'
                fill='white'
              />
            </svg>
          </ScrollButton>

          <ScrollButton onClick={scrollRight} classname='top-18 -right-3.5 md:top-16.5'>
            <svg
              width='10'
              height='10'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='md:h-4 md:w-4'
            >
              <path
                d='M0 7.00008V9.00008H12L6.5 14.5001L7.92 15.9201L15.84 8.00008L7.92 0.0800781L6.5 1.50008L12 7.00008H0Z'
                fill='white'
              />
            </svg>
          </ScrollButton>
        </div>
      </div>
    </section>
  )
}

export default LanjutTontonFilm
