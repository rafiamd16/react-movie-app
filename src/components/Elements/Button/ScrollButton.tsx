const ScrollButton = ({
  children,
  classname,
  onClick,
}: {
  children: React.ReactNode
  classname: string
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`p-2 md:p-[10px] bg-[#2F3334] absolute ${classname} rounded-full border border-[#E7E3FC3B] z-10`}
    >
      {children}
    </button>
  )
}

export default ScrollButton
