import type { TLinks } from '../../data/FooterLinks'

type BantuanLinksProps = {
  links: TLinks[]
}

const DesktopBantuanLinks = ({ links }: BantuanLinksProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-base font-bold font-lato text-white'>Bantuan</h4>
      <div className='flex gap-7'>
        <ul className='flex flex-col gap-[13px] font-medium font-lato text-base text-[#C1C2C4]'>
          {links.map((link, i) => (
            <li key={i}>{link.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DesktopBantuanLinks
