import { Link, useNavigate } from 'react-router'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import type { User } from '../../types/user'

interface Props {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const RegisterForm: FC<Props> = ({ users, setUsers }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userTerdaftar = users.some((user) => user.username === username)
    if (userTerdaftar) {
      alert('Username sudah terdaftar')
      return
    }

    if (password !== confirmPassword) {
      alert('Kata sandi tidak cocok')
      return
    }

    const newUser: User = {
      username,
      email: '',
      password,
      avatar: '/profile.png',
    }

    setUsers([...users, newUser])
    alert('Registrasi berhasil. Silakan login.')
    navigate('/login')
  }

  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label='Username'
        type='text'
        id='username'
        placeholder='Masukkan username'
        classname='mb-3 md:mb-7'
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <InputForm
        type='password'
        label='Kata Sandi'
        id='password'
        placeholder='Masukkan kata sandi'
        classname='mb-3 md:mb-7'
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <InputForm
        type='password'
        label='Konfirmasi Kata Sandi'
        id='confirm-password'
        placeholder='Masukkan kata sandi'
        classname='mb-1'
        value={confirmPassword}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
      />
      <div className='flex items-center text-[10px] md:text-base mb-3 md:mb-9 '>
        <p className='text-[#C1C2C4]'>
          Sudah punya akun ?{' '}
          <Link to='/login' className='text-white'>
            Masuk
          </Link>
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-1 text-white md:gap-2'>
        <Button
          type='submit'
          classname='bg-[#3D4142] border border-[#E7E3FC3B] rounded-full py-2 md:py-3.5 px-3 md:px-5 w-full font-semibold text-[10px] md:text-base'
        >
          Daftar
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

export default RegisterForm
