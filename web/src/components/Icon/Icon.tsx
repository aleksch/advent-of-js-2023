import * as assets from './assets/assets'
import { Colors } from '../../../config/tailwind.config'

export type IconNames = keyof typeof assets
export type IconSize =
  | 'xs'
  | 's'
  | 'md'
  | 'lg'
  | 'xl'
  | 'auto'
type IconColor = Colors
export const IconSizeMap: Record<IconSize, string> = {
  xs: 'w-4 h-4 min-w-4 min-h-4',
  s: 'w-5 h-5 min-w-5 min-h-5',
  md: 'w-6 h-6 min-w-6 min-h-6',
  lg: 'w-8 h-8 min-w-8 min-h-8',
  xl: 'w-10 h-10 min-w-10 min-h-10',
  auto: 'w-full h-full',
}

type Props = {
  name: IconNames
  size?: IconSize
  color?: IconColor
}

const Icon = ({ name, color, size = 'md' }: Props) => {
  if (!assets[name]) {
    console.error('-icon not defined name', name)
  }
  const sizeClass = IconSizeMap[size]
  const IconComponent = assets[name] || null
  console.log(color)
  const textColor = color ? `text-${color}` : ''
  return (
    <span className={`flex items-center justify-center text-acadia ${sizeClass} ${textColor}`}>
      <IconComponent />
    </span>
  )
}

export default Icon
