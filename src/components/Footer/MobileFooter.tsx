const MobileFooter = () => {
  return (
    <footer className='p-5 border-t border-t-[#E7E3FC3B]'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-[3px] font-londrina font-normal text-2xl text-white'>
            <svg
              width='23'
              height='21'
              viewBox='0 0 25 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M23.313 0.145996L18.728 0.958496L21.9247 4.646L24.223 4.22933L23.313 0.145996ZM15.298 1.56266L12.9997 1.96891L16.208 5.646L18.4947 5.23975L15.298 1.56266ZM9.58135 2.56266L7.28301 2.98975L10.4913 6.66683L12.778 6.26058L9.58135 2.56266ZM3.85301 3.60433L2.70968 3.80225C2.10346 3.91039 1.57008 4.22891 1.22666 4.68788C0.883238 5.14684 0.757845 5.70873 0.878011 6.25016L1.33301 8.29183L7.04968 7.28141L3.85301 3.60433ZM1.33301 8.29183V18.7085C1.33301 19.8647 2.38301 20.7918 3.66635 20.7918H22.333C23.628 20.7918 24.6663 19.8647 24.6663 18.7085V8.29183H1.33301Z'
                fill='white'
              />
            </svg>
            CHILL
          </div>
          <p className='text-xs font-normal font-poppins text-[#C1C2C4]'>
            Created by &copy;{' '}
            <a href='https://instagram.com/rafi.amd16' target='_blank' className='text-blue-500'>
              Rafi Ahmad
            </a>{' '}
            — 2025 Chill. All rights reserved.
          </p>
        </div>
        <div className='flex flex-col w-full gap-2'>
          <div className='flex justify-between items-center text-base font-medium text-white font-lato'>
            <span>Genre</span>
            <svg
              width='8'
              height='12'
              viewBox='0 0 8 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.589844 11.33L5.16984 6.75L0.589844 2.16L1.99984 0.75L7.99984 6.75L1.99984 12.75L0.589844 11.33Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='flex items-center justify-between w-full text-base font-medium text-white font-lato'>
            <span>Bantuan</span>
            <svg
              width='8'
              height='12'
              viewBox='0 0 8 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.589844 11.33L5.16984 6.75L0.589844 2.16L1.99984 0.75L7.99984 6.75L1.99984 12.75L0.589844 11.33Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MobileFooter
