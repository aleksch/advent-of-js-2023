type Props = {
  name: string
  label: string
  type?: 'text' | 'email' | 'password'
}
const InputField = ({ name, label, type = 'text' }: Props) => {
  return (
    <div className="input-field relative">
      <input
        type={type}
        id={name}
        className="h-[100px] w-[660px] px-7 text-2xl font-bold transition-all"
        placeholder=""
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className="absolute left-[20px] top-8 font-handwriting text-3xl transition-all"
      >
        {label}
      </label>
    </div>
  )
}

export default InputField
