/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import { InputPassword, Input } from './Input'
import Label from './Label'

interface Props {
  label: string
  type: string
  id: string
  placeholder: string
  classname?: string
  value?: any
  onChange?: any
}

const InputForm: FC<Props> = ({ label, type, id, placeholder, classname, value, onChange }) => {
  return (
    <div className={`flex flex-col gap-1 ${classname}`}>
      <Label htmlFor={id} classname='text-white'>
        {label}
      </Label>
      {type === 'password' ? (
        <InputPassword
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </div>
  )
}

export default InputForm
