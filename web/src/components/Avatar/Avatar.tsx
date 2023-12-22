import { useMemo } from 'react'

import Icon from '../Icon/Icon'
import { IconName } from '../Icon/types'

import AvatarStatus, { Status } from './AvatarStatus'
import SantaHat from './SantaHat'

type Props = {
  userName: string
  imgUrl?: string
  status?: Status
  icon?: IconName
  withSantaHat?: boolean
}

const Avatar = ({ userName, imgUrl, status, icon, withSantaHat }: Props) => {
  const content = useMemo(() => {
    if (icon) {
      return <Icon name={icon} size="lg" />
    }
    if (imgUrl) {
      return <img className="object-cover" src={imgUrl} alt="avatar" />
    }
    return (
      <span className="text-3xl text-white">
        {userName[0].toLocaleUpperCase()}
      </span>
    )
  }, [icon, imgUrl, userName])

  const borderColorClass = icon ? 'border-vistaBlue' : 'border-white'

  return (
    <div className="relative inline-block">
      {withSantaHat && <SantaHat />}
      <div
        className={`border-avatar relative flex h-18 w-18 items-center justify-center overflow-hidden rounded-full border-solid ${borderColorClass} bg-spanishGreen`}
      >
        {content}
      </div>
      <AvatarStatus status={status} />
    </div>
  )
}

export default Avatar
