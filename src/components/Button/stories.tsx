import type { Meta, StoryObj } from '@storybook/react'

import Button from './'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    prop1: 'Boilerplate',
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default: StoryObj<typeof Button> = {}
