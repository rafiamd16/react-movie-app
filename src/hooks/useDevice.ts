import { useMediaQuery } from 'react-responsive'

export const useDevice = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}
