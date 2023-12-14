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

import * as assets from './assets/assets'
import Icon, { IconNames } from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta

type Story = StoryObj<typeof Icon>

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
    const iconNames = Object.values(assets).map(({ name }) => name)

    return (
      <div className="flex flex-col gap-2">
        {iconNames.map((name) => (
          <div key={name} className="flex items-center gap-2">
            <Icon size={size} color={color} name={name as IconNames} />
            {name}
          </div>
        ))}
      </div>
    )
  },
}
