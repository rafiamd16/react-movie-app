import CardContainer from '../components/CardContainer'
import LanjutTontonFilm from '../components/LanjutTontonFilm'
import HeroSection from '../components/Layouts/HeroSection'
import {
  imageFilmTrending,
  imageRilisBaruFilm,
  imageTontonFilm,
  imageTopRatingFilm,
} from '../data/Film'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        image='/img/hero.png'
        title='Duty After School'
        description='Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut
            lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam
            perang.'
      />

      {/* Lanjut Tonton Film */}
      <LanjutTontonFilm subTitle='Melanjutkan Tonton Film' data={imageTontonFilm} />

      {/* Top Rating Film dan Series Hari ini */}
      <CardContainer subTitle='Top Rating Film dan Series Hari ini' data={imageTopRatingFilm} />

      {/* Film Trending */}
      <CardContainer subTitle='Film Trending' data={imageFilmTrending} />

      {/* Rilis Baru */}
      <CardContainer subTitle='Rilis Baru' data={imageRilisBaruFilm} />
    </>
  )
}

export default HomePage
