import { Link } from 'react-router'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'

const RegisterForm = () => {
  return (
    <form>
      <InputForm label='Username' type='text' id='username' placeholder='Masukkan username' classname='mb-3 sm:mb-7' />
      <InputForm
        type='password'
        label='Kata Sandi'
        id='password'
        placeholder='Masukkan kata sandi'
        classname='mb-3 sm:mb-7'
      />
      <InputForm
        type='password'
        label='Konfirmasi Kata Sandi'
        id='password'
        placeholder='Masukkan kata sandi'
        classname='mb-1'
      />
      <div className='flex items-center text-[10px] sm:text-base mb-3 sm:mb-9 '>
        <p className='text-[#C1C2C4]'>
          Sudah punya akun ?{' '}
          <Link to='/login' className='text-white'>
            Masuk
          </Link>
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-1 text-white sm:gap-2'>
        <Button
          type='submit'
          classname='bg-[#3D4142] border border-[#E7E3FC3B] rounded-full py-2 sm:py-3.5 px-3 sm:px-5 w-full font-semibold text-[10px] sm:text-base'
        >
          Masuk
        </Button>
        <span className='text-[#9D9EA1] text-[10px] sm:text-base'>Atau</span>
        <Button
          type='submit'
          classname='bg-transparent border border-[#E7E3FC3B] rounded-full py-2 sm:py-3.5 px-3 sm:px-5 w-full flex justify-center items-center gap-5 font-semibold text-[10px] sm:text-base'
        >
          <img src='/img/google.png' alt='image' className='w-[10px] h-[10px] sm:w-[18px] sm:h-[18px]' />
          Masuk dengan Google
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
