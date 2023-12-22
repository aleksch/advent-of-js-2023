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

import InputField from './InputField'

const meta: Meta<typeof InputField> = {
  component: InputField,
}

export default meta

type Story = StoryObj<typeof InputField>

export const Primary: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField name="text" type="text" label="Regular Text" />
      <InputField name="email" type="email" label="Email" />
      <InputField name="password" type="password" label="Password" />
    </div>
  ),
}
