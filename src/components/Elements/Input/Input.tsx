import type { FC } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  type: string
  name?: string
  id?: string
  placeholder?: string
  value: any
  onChange: any
}

export const Input: FC<Props> = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='bg-transparent border border-[#E7E3FC3B] focus:outline-none text-white md:text-base text-[9px] py-2 px-3 md:py-[14px] md:px-5 rounded-full'
    />
  )
}

export const InputPassword: FC<Props> = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <div className='relative w-full mb-1'>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full bg-transparent border border-[#E7E3FC3B] focus:outline-none text-white md:text-base text-[9px] py-2 px-3 md:py-[14px] md:px-5 rounded-full'
      />
      <svg
        width='20'
        height='16'
        viewBox='0 0 20 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='md:size-[18px] size-3 absolute md:right-5 md:top-4.5 right-3 top-2.5'
      >
        <path
          d='M9.8585 5L12.5002 7.63333C12.5002 7.59167 12.5002 7.54167 12.5002 7.5C12.5002 6.83696 12.2368 6.20107 11.7679 5.73223C11.2991 5.26339 10.6632 5 10.0002 5C9.95016 5 9.9085 5 9.8585 5ZM6.27516 5.66667L7.56683 6.95833C7.52516 7.13333 7.50016 7.30833 7.50016 7.5C7.50016 8.16304 7.76356 8.79893 8.2324 9.26777C8.70124 9.73661 9.33712 10 10.0002 10C10.1835 10 10.3668 9.975 10.5418 9.93333L11.8335 11.225C11.2752 11.5 10.6585 11.6667 10.0002 11.6667C8.89509 11.6667 7.83529 11.2277 7.05388 10.4463C6.27248 9.66488 5.8335 8.60507 5.8335 7.5C5.8335 6.84167 6.00016 6.225 6.27516 5.66667ZM1.66683 1.05833L3.56683 2.95833L3.94183 3.33333C2.56683 4.41667 1.4835 5.83333 0.833496 7.5C2.27516 11.1583 5.8335 13.75 10.0002 13.75C11.2918 13.75 12.5252 13.5 13.6502 13.05L14.0085 13.4L16.4418 15.8333L17.5002 14.775L2.72516 0M10.0002 3.33333C11.1052 3.33333 12.165 3.77232 12.9464 4.55372C13.7278 5.33512 14.1668 6.39493 14.1668 7.5C14.1668 8.03333 14.0585 8.55 13.8668 9.01667L16.3085 11.4583C17.5585 10.4167 18.5585 9.05 19.1668 7.5C17.7252 3.84167 14.1668 1.25 10.0002 1.25C8.8335 1.25 7.71683 1.45833 6.66683 1.83333L8.47516 3.625C8.95016 3.44167 9.4585 3.33333 10.0002 3.33333Z'
          fill='#9D9EA1'
        />
      </svg>
    </div>
  )
}
