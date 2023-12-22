type Props = {
  name: string
  label: string
  type?: 'text' | 'email' | 'password'
}
const InputField = ({ name, label, type = 'text' }: Props) => {
  return (
    <div className="relative">
      {/* label should be before input */}
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} placeholder="" autoComplete="off" />
    </div>
  )
}

export default InputField
