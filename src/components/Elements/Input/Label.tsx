const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => {
  return (
    <label htmlFor={htmlFor} className='block text-[10px] sm:text-lg text-white'>
      {children}
    </label>
  )
}

export default Label
