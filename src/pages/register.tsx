import type { FC } from 'react'
import RegisterForm from '../components/Fragments/RegisterForm'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import type { User } from '../types/user'

interface Props {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const RegisterPage: FC<Props> = ({ users, setUsers }) => {
  return (
    <AuthLayouts
      title='Daftar'
      image='bg-[url(/img/bg-register.png)]'
      paragraph='Selamat datang!'
      classname='w-[306px] h-[453px] md:w-[529px] md:h-[778px]'
    >
      <RegisterForm users={users} setUsers={setUsers} />
    </AuthLayouts>
  )
}

export default RegisterPage
