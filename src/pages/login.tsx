import LoginForm from '../components/Fragments/LoginForm'
import AuthLayouts from '../components/Layouts/AuthLayouts'

const LoginPage = () => {
  return (
    <AuthLayouts
      title='Masuk'
      image='bg-[url(/img/bg-login.jpg)]'
      paragraph='Selamat datang kembali!'
      classname='w-[306px] h-[384px] sm:w-[529px] sm:h-[663px]'
    >
      <LoginForm />
    </AuthLayouts>
  )
}

export default LoginPage
