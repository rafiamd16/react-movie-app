const Button = ({
  children,
  type,
  classname,
  onClick,
}: {
  children: React.ReactNode
  type: 'submit' | 'reset' | 'button'
  classname: string
  onClick?: () => void
}) => {
  return (
    <button onClick={onClick} type={type} className={classname}>
      {children}
    </button>
  )
}

export default Button
