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

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    userName: 'Alex',
    imgUrl: 'https://www.joancanto.com/wp-content/uploads/2017/04/H10B1062.jpg',
    icon: 'eyeClosed',
    status: 'accepted',
    withSantaHat: true,
  },
}
