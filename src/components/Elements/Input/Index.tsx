import { InputPassword, Input } from './Input'
import Label from './Label'

const InputForm = ({
  label,
  type,
  id,
  placeholder,
  classname,
}: {
  label: string
  type: string
  id: string
  placeholder: string
  classname?: string
}) => {
  return (
    <div className={`flex flex-col gap-1 ${classname}`}>
      <Label htmlFor={id}>{label}</Label>
      {type === 'password' ? (
        <InputPassword type={type} placeholder={placeholder} id={id} />
      ) : (
        <Input type={type} id={id} placeholder={placeholder} />
      )}
    </div>
  )
}

export default InputForm
