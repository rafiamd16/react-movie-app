import RegisterForm from '../components/Fragments/RegisterForm'
import AuthLayouts from '../components/Layouts/AuthLayouts'

const RegisterPage = () => {
  return (
    <AuthLayouts
      title='Daftar'
      image='bg-[url(/img/bg-register.png)]'
      paragraph='Selamat datang!'
      classname='w-[306px] h-[453px] sm:w-[529px] sm:h-[778px]'
    >
      <RegisterForm />
    </AuthLayouts>
  )
}

export default RegisterPage
