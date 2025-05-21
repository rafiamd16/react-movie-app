const Button = ({
  children,
  type,
  classname,
}: {
  children: React.ReactNode
  type: 'submit' | 'reset' | 'button'
  classname: string
}) => {
  return (
    <button type={type} className={classname}>
      {children}
    </button>
  )
}

export default Button
