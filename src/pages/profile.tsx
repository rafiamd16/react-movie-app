import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import type { User } from '../types/user'
import Button from '../components/Elements/Button/Index'
import { useNavigate } from 'react-router'
import Label from '../components/Elements/Input/Label'
import { useDevice } from '../hooks/useDevice'

interface Props {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  currentUser: User
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

const ProfilePage: FC<Props> = ({ users, setUsers, currentUser, setCurrentUser }) => {
  const [username, setUsername] = useState(currentUser?.username)
  const [email, setEmail] = useState(currentUser?.email)
  const [password, setPassword] = useState(currentUser?.password)
  const navigate = useNavigate()
  const { isMobile } = useDevice()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const editUser: User = {
      ...currentUser,
      username,
      email,
      password,
    }

    const editedUsers = users.map((user) =>
      user.username === currentUser?.username ? editUser : user,
    )

    setUsers(editedUsers)
    setCurrentUser(editUser)
    alert('Profil berhasil diubah')
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure want to delete your account?')) {
      const filteredUsers = users.filter((user) => user.username !== currentUser?.username)
      setUsers(filteredUsers)
      setCurrentUser(null)
      alert('akun berhasil dihapus')
      navigate('/login')
    }
  }

  return (
    <section className='px-5 pt-20 pb-32 md:pt-36 md:pb-10 md:px-20'>
      <div className='flex flex-col-reverse items-center justify-between gap-4 lg:items-start lg:flex-row'>
        <div className='w-full space-y-6 lg:w-1/2'>
          <h2 className='font-bold font-lato text-white text-xl md:text-[32px]'>Profile Saya</h2>
          <form onSubmit={handleSubmit} className='flex flex-col w-full gap-8'>
            <div className='flex items-center gap-6'>
              <img
                src='/profile.png'
                alt='image'
                className='size-20 md:size-[140px] rounded-full object-cover'
              />
              <div className='space-y-2'>
                <Button
                  type='button'
                  classname='px-5 font-bold py-2 border rounded-full border-[#3254FF] text-[#3254FF]'
                >
                  Ubah Foto
                </Button>
                <div className='flex items-center gap-2'>
                  <svg
                    width='16'
                    height='20'
                    viewBox='0 0 16 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 0L16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10ZM14 18V7H9V2H2V18H14ZM8 10L12 14H9.5V17H6.5V14H4L8 10Z'
                      fill='#C1C2C4'
                    />
                  </svg>
                  <span className='text-[#C1C2C4] text-sm'>Maksimal 2MB</span>
                </div>
              </div>
            </div>
            <div className='py-2 px-4 w-full relative border border-[#E7E3FC3B] rounded-lg bg-[#22282A]'>
              <Label htmlFor='username' classname='text-[#9D9EA1] text-sm md:text-base'>
                Nama Pengguna
              </Label>
              <input
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                type='text'
                className='w-full text-base text-white outline-none'
              />
              <div className='absolute right-4 top-5 md:top-6'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 14.4601V17.5001C0 17.7801 0.22 18.0001 0.5 18.0001H3.54C3.67 18.0001 3.8 17.9501 3.89 17.8501L14.81 6.94006L11.06 3.19006L0.15 14.1001C0.0500001 14.2001 0 14.3201 0 14.4601ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
            <div className='py-2 px-4 w-full relative border border-[#E7E3FC3B] rounded-lg bg-[#22282A]'>
              <Label htmlFor='username' classname='text-[#9D9EA1] text-sm md:text-base'>
                Email
              </Label>
              <input
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                type='email'
                className='w-full text-base text-white outline-none'
              />
              <div className='absolute right-4 top-5 md:top-6'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 14.4601V17.5001C0 17.7801 0.22 18.0001 0.5 18.0001H3.54C3.67 18.0001 3.8 17.9501 3.89 17.8501L14.81 6.94006L11.06 3.19006L0.15 14.1001C0.0500001 14.2001 0 14.3201 0 14.4601ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
            <div className='py-2 px-4 w-full relative border border-[#E7E3FC3B] rounded-lg bg-[#22282A]'>
              <Label htmlFor='username' classname='text-[#9D9EA1] text-sm md:text-base'>
                Kata Sandi
              </Label>
              <input
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                type='password'
                className='w-full text-base text-white outline-none'
              />
              <div className='absolute right-4 top-5 md:top-6'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 14.4601V17.5001C0 17.7801 0.22 18.0001 0.5 18.0001H3.54C3.67 18.0001 3.8 17.9501 3.89 17.8501L14.81 6.94006L11.06 3.19006L0.15 14.1001C0.0500001 14.2001 0 14.3201 0 14.4601ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <Button
                type='submit'
                classname='cursor-pointer bg-[#09147A] rounded-full py-2.5 px-6.5 font-bold text-base text-white w-max'
              >
                Simpan
              </Button>
              <Button
                onClick={handleDelete}
                type='button'
                classname='cursor-pointer bg-red-500 rounded-full py-2.5 px-6.5 font-bold text-base text-white w-max'
              >
                Delete Account
              </Button>
            </div>
          </form>
        </div>
        <div className='flex w-full lg:justify-end lg:w-1/2'>
          <div className='flex w-full flex-col lg:w-[558px] p-6 bg-[#3D4142] rounded-xl gap-5'>
            <div className='flex gap-5'>
              <img src='/warning.png' alt='image' className='w-[78px] h-[78px]' />
              <div className='flex flex-col gap-3 font-lato'>
                <h4 className='text-2xl font-bold text-white'>
                  {isMobile ? 'Berlangganan' : 'Saat ini anda belum berlangganan'}
                </h4>
                <p className='text-sm text-white md:text-lg'>
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
                </p>
              </div>
            </div>
            <Button
              type='button'
              classname='cursor-pointer bg-[#2F3334] text-white rounded-full py-1.5 px-5.5 self-end font-bold text-base w-max font-lato'
            >
              Mulai Berlangganan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
