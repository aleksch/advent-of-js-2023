// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'
import { IconName } from './types'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

const iconNames: IconName[] = [
  'calendar',
  'check',
  'chevron',
  'close',
  'edit',
  'eyeClosed',
  'eyeOpened',
  'logout',
  'minus',
  'plus',
  'question',
  'thumbsDown',
  'thumbsUp',
  'upload',
  'user',
]

export const Primary: Story = {
  argTypes: {
    name: {
      table: { disable: true },
    },
  },
  args: {
    size: 'md',
    color: 'acadia',
  },
  render: ({ size, color }) => {
    return (
      <div className="flex flex-col gap-2">
        {iconNames.map((name) => (
          <div key={name} className="flex items-center gap-2">
            <Icon size={size} color={color} name={name as IconName} />
            {name}
          </div>
        ))}
      </div>
    )
  },
}
