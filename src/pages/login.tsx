import type { FC } from 'react'
import LoginForm from '../components/Fragments/LoginForm'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import type { User } from '../types/user'

interface Props {
  users: User[]
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

const LoginPage: FC<Props> = ({ users, setCurrentUser }) => {
  return (
    <AuthLayouts
      title='Masuk'
      image='bg-[url(/img/bg-login.jpg)]'
      paragraph='Selamat datang kembali!'
      classname='w-[306px] h-[384px] md:w-[529px] md:h-[663px]'
    >
      <LoginForm users={users} setCurrentUser={setCurrentUser} />
    </AuthLayouts>
  )
}

export default LoginPage
