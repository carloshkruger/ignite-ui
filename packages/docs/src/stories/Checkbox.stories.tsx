import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@carloshkruger-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', flexDirection: 'row' }}>
        {Story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    )
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
}


