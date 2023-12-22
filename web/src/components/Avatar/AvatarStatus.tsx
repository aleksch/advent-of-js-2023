import Icon from '../Icon/Icon'
import { IconColor, IconName } from '../Icon/types'

export type Status = 'accepted' | 'pending' | 'declined'

type Props = {
  status?: Status
}

const statusMap: Record<
  Status,
  { iconName: IconName; backgroundColorStyle: string; iconColor: IconColor }
> = {
  accepted: {
    iconName: 'check',
    backgroundColorStyle: 'bg-spanishGreen',
    iconColor: 'white',
  },
  pending: {
    iconName: 'question',
    backgroundColorStyle: 'bg-supernova',
    iconColor: 'black',
  },
  declined: {
    iconName: 'minus',
    backgroundColorStyle: 'bg-orangeRed',
    iconColor: 'white',
  },
}

const AvatarStatus = ({ status }: Props) => {
  if (!status) return null

  const { backgroundColorStyle, iconColor, iconName } = statusMap[status]

  return (
    <div className={`avatar-status ${backgroundColorStyle}`}>
      <Icon name={iconName} size="xs" color={iconColor} />
    </div>
  )
}

export default AvatarStatus
