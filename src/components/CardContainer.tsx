import { useRef } from 'react'
import ScrollButton from './Elements/Button/ScrollButton'
import type { FilmItem } from '../data/Film'
import { motion } from 'framer-motion'

type TopRatingFilmProps = {
  subTitle: string
  data: FilmItem[]
}

const CardContainer = ({ subTitle, data }: TopRatingFilmProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  }
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })
  }

  return (
    <section className='py-5 md:py-10'>
      <div className='flex flex-col gap-5 px-5 md:px-20'>
        <h2 className='text-xl font-lato font-bold text-white md:text-[32px]'>{subTitle}</h2>
        <div className='relative min-h-[145px]'>
          {/* Scroll Container */}
          <div ref={scrollRef} className='flex items-center gap-4 overflow-x-auto scrollbar-hide'>
            {/* card start */}
            {data.map((item, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                key={i}
                className='relative min-w-[106px] max-w-[100px] md:min-w-[234px] overflow-hidden max-h-[160px] rounded md:max-h-[365px] md:rounded-lg shadow cursor-pointer'
              >
                <img src={item.image} alt={item.title} className='object-cover w-full h-full' />
                {item.label == 'Episode Baru' ? (
                  <span className='absolute z-10 text-[6px] top-2 left-2 font-bold py-0.5 px-1 bg-[#0F1E93] border border-[#0F1E93] text-white rounded-full md:py-1 md:px-2.5 md:rounded-3xl md:text-sm'>
                    {item.label}
                  </span>
                ) : item.label == 'Top 10' ? (
                  <span className='p-1 w-[31px] h-[48px] text-sm/snug absolute top-0 right-2 bg-[#B71F1D] text-white font-lato rounded-tr-sm rounded-bl-sm'>
                    {item.label}
                  </span>
                ) : null}
              </motion.div>
            ))}
            {/* card end */}
            <ScrollButton onClick={scrollLeft} classname='top-17 -left-3.5 md:top-40 md:-left-4.5'>
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
            <ScrollButton
              onClick={scrollRight}
              classname='top-17 -right-3.5 md:-right-4.5 md:top-40'
            >
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
      </div>
    </section>
  )
}

export default CardContainer
