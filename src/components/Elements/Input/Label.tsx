const Label = ({
  children,
  htmlFor,
  classname,
}: {
  children: React.ReactNode
  htmlFor: string
  classname?: string
}) => {
  return (
    <label htmlFor={htmlFor} className={`block text-[10px] md:text-lg ${classname}`}>
      {children}
    </label>
  )
}

export default Label
