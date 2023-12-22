import { useState } from 'react'

import Icon from '../Icon/Icon'

type Props = {
  name: string
  label: string
  type?: 'text' | 'email' | 'password'
}
const InputField = ({ name, label, type = 'text' }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const _type = isShowPassword && type === 'password' ? 'text' : type
  const handleToggleShowPassword = () => setIsShowPassword((prev) => !prev)

  return (
    <div className="relative">
      {/* label should be before input */}
      <label htmlFor={name}>{label}</label>
      <input type={_type} id={name} placeholder="" autoComplete="off" />
      {type === 'password' && (
        <button
          className="absolute right-8 top-8"
          onClick={handleToggleShowPassword}
        >
          {type === 'password' && (
            <Icon
              name={isShowPassword ? 'eyeOpened' : 'eyeClosed'}
              color="black"
              size="lg"
            />
          )}
        </button>
      )}
    </div>
  )
}

export default InputField
