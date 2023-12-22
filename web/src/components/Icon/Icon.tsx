import { IconColor, IconName, IconSize } from './types'

export const IconSizeMap: Record<IconSize, string> = {
  xs: 'w-4 h-4 min-w-4 min-h-4',
  s: 'w-5 h-5 min-w-5 min-h-5',
  md: 'w-6 h-6 min-w-6 min-h-6',
  lg: 'w-8 h-8 min-w-8 min-h-8',
  xl: 'w-10 h-10 min-w-10 min-h-10',
  auto: 'w-full h-full',
}

type Props = {
  name: IconName
  size?: IconSize
  color?: IconColor
}

const Icon = ({ name, color = 'white', size = 'md' }: Props) => {
  const sizeClass = IconSizeMap[size]
  const textColor = `text-${color}`

  return (
    <svg width={24} height={24} className={`${sizeClass} ${textColor}`}>
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  )
}

export default Icon
