import { Link, useNavigate } from 'react-router'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import type { User } from '../../types/user'

interface Props {
  users: User[]
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

const LoginForm: FC<Props> = ({ users, setCurrentUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const temukanUser = users.find(
      (user) => user.username === username && user.password === password,
    )

    if (!temukanUser) {
      alert('Username atau kata sandi salah')
      return
    }

    setCurrentUser(temukanUser)
    navigate('/')
  }

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label='Username'
        type='text'
        id='username'
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        placeholder='Masukkan username'
        classname='mb-3 md:mb-7'
      />
      <InputForm
        type='password'
        label='Kata Sandi'
        id='password'
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder='Masukkan kata sandi'
        classname='mb-1'
      />
      <div className='flex items-center justify-between text-[10px] md:text-base mb-3 md:mb-9 '>
        <p className='text-[#C1C2C4]'>
          Belum punya akun?{' '}
          <Link to='/register' className='text-white'>
            Daftar
          </Link>
        </p>
        <p className='text-white'>Lupa kata sandi?</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-1 text-white md:gap-2'>
        <Button
          type='submit'
          classname='bg-[#3D4142] border border-[#E7E3FC3B] rounded-full py-2 md:py-3.5 px-3 md:px-5 w-full font-semibold text-[10px] md:text-base'
        >
          Masuk
        </Button>
        <span className='text-[#9D9EA1] text-[10px] md:text-base'>Atau</span>
        <Button
          type='submit'
          classname='bg-transparent border border-[#E7E3FC3B] rounded-full py-2 md:py-3.5 px-3 md:px-5 w-full flex justify-center items-center gap-5 font-semibold text-[10px] md:text-base'
        >
          <img
            src='/img/google.png'
            alt='image'
            className='w-[10px] h-[10px] md:w-[18px] md:h-[18px]'
          />
          Masuk dengan Google
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
