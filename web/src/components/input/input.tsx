import { InputFieldProps, TextField } from '@redwoodjs/forms'

type Props = InputFieldProps

export function TextInput({
  name,
  className,
  errorClassName,
  placeholder,
  ...props
}: Props) {
  return (
    <TextField
      name={name}
      className={className}
      errorClassName={errorClassName}
      placeholder={placeholder}
      validation={{
        required: {
          value: true,
          message: 'Email is required',
        },
      }}
      {...props}
    />
  )
}
