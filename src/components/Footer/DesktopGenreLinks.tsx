import { type TLinks } from '../../data/FooterLinks'

type GenreLinksProps = {
  links1: TLinks[]
  links2: TLinks[]
  links3: TLinks[]
  links4: TLinks[]
}

export const DesktopGenreLinks = ({ links1, links2, links3, links4 }: GenreLinksProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-base font-bold font-lato text-white'>Genre</h4>
      <div className='flex gap-7'>
        <ul className='flex flex-col gap-[13px] font-medium font-lato text-base text-[#C1C2C4]'>
          {links1.map((link, i) => (
            <li key={i}>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col gap-[13px] font-medium font-lato text-base text-[#C1C2C4]'>
          {links2.map((link, i) => (
            <li key={i}>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col gap-[13px] font-medium font-lato text-base text-[#C1C2C4]'>
          {links3.map((link, i) => (
            <li key={i}>{link.title}</li>
          ))}
        </ul>
        <ul className='flex flex-col gap-[13px] font-medium font-lato text-base text-[#C1C2C4]'>
          {links4.map((link, i) => (
            <li key={i}>{link.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DesktopGenreLinks
